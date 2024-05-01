import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Pre } from "./code";
import { TweetComponent } from "./tweet";
import { MediaGrid } from "./mediaGrid";
import { Book } from "./book";
// import { LiveCode } from "./sandpack";

const NN_Lazy = dynamic(() => import(/* webpackChunkName: "NN" */ "./neural-networks-hello-world/NN"));
const CNN_Handwriting_MNIST_Lazy = dynamic(
  () => import(/* webpackChunkName: "NN" */ "./handwriting-recognition-using-CNN/CNN_Handwriting_MNIST")
);

function autoLinkText(markdown) {
  // Regex to match the markdown link syntax
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;

  // Replace markdown link with HTML <a> tag
  return markdown.replace(regex, '<a href="$2">$1</a>');
}

function Table({ data }) {
  let headers = data.headers.map((header, index) => <th key={index}>{header}</th>);
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex} dangerouslySetInnerHTML={{ __html: autoLinkText(cell) }} />
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Callout(props) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  return ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  StaticTweet: TweetComponent,
  pre: Pre,
  Table,
  MediaGrid,
  Book,
  // LiveCode,

  // custom
  NN_Lazy,
  CNN_Handwriting_MNIST_Lazy,
};

export function CustomMDX(props) {
  return <MDXRemote {...props} components={{ ...components, ...(props.components || {}) }} />;
}
