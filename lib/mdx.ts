import { join } from 'path';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { bundleMDX } from 'mdx-bundler';
import matter from 'gray-matter';
import readingTime from 'reading-time';

import remarkGfm from 'remark-gfm';
import { remarkMdxImages } from 'remark-mdx-images';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export async function getFiles(type) {
  return readdirSync(join(process.cwd(), 'data', type)).filter((item) => {
    const isWip = item.indexOf('wip') > -1;
    const nonFiles = /(^|\/)\.[^\/\.]/g.test(item);
    return !nonFiles && !isWip;
  });
}

const getFilePath = (type, slug?) => {
  let dirPath = join(process.cwd(), 'data', type, slug || '');
  let filePath = '';

  if (existsSync(dirPath)) {
    filePath = join(process.cwd(), 'data', type, slug, `index.mdx`);
  } else if (slug) {
    filePath = join(process.cwd(), 'data', type, `${slug}.mdx`);
  } else {
    filePath = join(process.cwd(), 'data', `${type}.mdx`);
  }

  return { filePath, dirPath };
};

export async function getFileBySlug(type, slug?) {
  const { filePath, dirPath } = getFilePath(type, slug);
  const source = readFileSync(filePath, 'utf8');
  const imagesUrl = `/static/assets/${type}/${slug}`;

  // console.log({ dirPath });
  const { code, frontmatter } = await bundleMDX(source, {
    cwd: dirPath,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options?.remarkPlugins ?? []),
        remarkGfm,
        remarkMdxImages
      ];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor']
            }
          }
        ]
      ] as any;
      return options;
    },
    esbuildOptions: (options) => ({
      ...options,
      // Set the `outdir` to a public location for this bundle.
      outdir: join(process.cwd(), 'public', imagesUrl),
      loader: {
        ...options.loader,
        '.webp': 'file',
        '.jpeg': 'file',
        '.jpg': 'file',
        '.svg': 'file',
        '.png': 'file',
        '.gif': 'file',
        '.mp4': 'file'
      },
      // Set the public path to /img/about
      publicPath: imagesUrl,
      write: true
    })
  });

  return {
    code,
    frontMatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter
    }
  };
}

export async function getAllFilesFrontMatter(type) {
  const files = await getFiles(type);

  // console.log(files);

  return files.reduce((allPosts, postSlug) => {
    const fileOrDirName = postSlug.replace('.mdx', '');
    const { filePath } = getFilePath(type, fileOrDirName);

    // console.log({ type, postSlug, filePath });

    const source = readFileSync(filePath, 'utf8');
    const { data } = matter(source);

    return [
      {
        ...data,
        wordCount: source.split(/\s+/gu).length,
        readingTime: readingTime(source),
        slug: fileOrDirName
      },
      ...allPosts
    ];
  }, []);
}

// https://github.com/Savinvadim1312/notjustdev/blob/main/src/lib/api.ts
