import React from "react";
import { highlight } from "sugar-high";
import { File } from "lucide-react";

function extractFirstLineComment(codeBlock) {
  try {
    if (!codeBlock) {
      throw "";
    }

    // Define regex patterns to match and extract content from different comment types
    const htmlCommentPattern = "<!--\\s*(.*?)\\s*-->";
    const hashCommentPattern = "#\\s*(.*)";
    const doubleSlashCommentPattern = "//\\s*(.*)";

    // Combining the patterns for detecting the first line as a comment
    const commentPatterns = `(${htmlCommentPattern}|${hashCommentPattern}|${doubleSlashCommentPattern})`;
    const firstLineCommentRegex = new RegExp(`^${commentPatterns}`, "i");

    // Split the block into lines and check the first one
    const lines = codeBlock.split("\n");
    const firstLine = lines[0].trim();
    const matches = firstLineCommentRegex.exec(firstLine);

    if (!matches) {
      throw "";
    }
    // Determine which group captured content to ensure we strip only comment markers
    const commentContent = matches[2] || matches[3] || matches[4]; // Each corresponds to a capture group from the patterns
    // filename=app/components/Button.tsx highlight=4
    const commentstags = commentContent.split(" ");
    const commentMetadata = commentstags.reduce((meta, annotation) => {
      const [key, value] = annotation.split("=");
      meta[key.trim()] = value.trim();
      return meta;
    }, {});

    return {
      commentMetadata: commentMetadata,
      remainingCode: lines.slice(1).join("\n").trim(), // Remove the first line
    };
  } catch (e) {
    // If no comment is found, return the original code as is
    return {
      commentMetadata: null,
      remainingCode: codeBlock,
    };
  }
}

function CodeFileBlock({ commentMetadata }) {
  const { filename, highlight } = commentMetadata;

  return (
    <div className="codeFileMeta text-white px-4 py-2 text-sm text-slate-400 flex items-center">
      <File width={16} height={16} />
      <span className="ml-2">{filename}</span>
    </div>
  );
}

function CodeBlock({ codeContent, ...props }) {
  //   const regexp = /language-([^\s]+)/g;
  //   const languageProp = props.className || "";
  //   const matches = [...languageProp.matchAll(regexp)];
  //   const language = matches[0]?.[1];
}

export function Code({ className, codeContent }) {
  const hasLanguageSpecified = !!className;
  const isMultilineCode = codeContent.indexOf("\n") > -1 || hasLanguageSpecified;

  if (isMultilineCode) {
    let codeHTML = highlight(codeContent);
    return (
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
      //   <div className="relative dark">
      //     {/* {hasLanguageSpecified ? <span className="code-tag">{language}</span> : null} */}
      //   </div>
    );
    //return <CodeBlock codeContent={codeContent} />;
  } else {
    return <code dangerouslySetInnerHTML={{ __html: codeContent }} />;
  }
}

export function Pre(props) {
  const codeContent = props.children?.props?.children;
  const { commentMetadata, remainingCode } = extractFirstLineComment(codeContent);
  return (
    <div className="code-wrapper pt-3">
      {commentMetadata ? <CodeFileBlock commentMetadata={commentMetadata} /> : null}
      <pre className={`dark ${commentMetadata ? "file-meta" : ""}`}>
        <Code className={props.children.className} codeContent={remainingCode} />
      </pre>
    </div>
  );
}
