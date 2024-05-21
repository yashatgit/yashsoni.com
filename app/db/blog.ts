import fs from "fs";
import path from "path";
import readingTime from "reading-time";

type MetadataTagsFilter = Array<string>;

type Metadata = {
  title: string;
  date: string;
  description: string;
  image?: string;
  tags?: string;

  // derived
  readingTime: string;
};

type Post = {
  metadata: Metadata;
  slug: string;
  content: string;
};

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  metadata.readingTime = readingTime(fileContent).text;

  return { metadata: metadata as Metadata, content };
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir, metadataTagsFilter?: MetadataTagsFilter) {
  let mdxFiles = fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");

  return mdxFiles
    .filter((file) => file.indexOf("wip-") === -1)
    .map((file) => {
      let { metadata, content } = readMDXFile(path.join(dir, file));
      let slug = path.basename(file, path.extname(file));
      let matchesFilter = !metadataTagsFilter;

      if (metadataTagsFilter && metadata.tags) {
        matchesFilter = metadataTagsFilter.every((tag) => (metadata.tags as string).indexOf(tag) > -1);
      }

      return (
        matchesFilter && {
          metadata,
          slug,
          content,
        }
      );
    })
    .filter(Boolean) as Array<Post>;
}

export function getBlogPosts(metadataTagsFilter?: MetadataTagsFilter) {
  return getMDXData(path.join(process.cwd(), `content/blog`), metadataTagsFilter);
}

export function getPost(contentName) {
  let { metadata, content } = readMDXFile(path.join(process.cwd(), `content/${contentName}`));
  return { metadata, content };
}
