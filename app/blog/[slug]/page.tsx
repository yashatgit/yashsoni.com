import type { Metadata } from "next";
import { Suspense, cache } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getBlogPosts } from "app/db/blog";
import { unstable_noStore as noStore } from "next/cache";

export async function generateMetadata({ params }): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? `https://leerob.io${image}` : `https://leerob.io/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://leerob.io/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);
  console.log(targetDate);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://leerob.io${post.metadata.image}`
              : `https://leerob.io/og?title=${post.metadata.title}`,
            url: `https://leerob.io/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Lee Robinson",
            },
          }),
        }}
      />
      <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        {post.metadata.title}
      </h1>
      <div className="flex flex-row justify-between items-center w-full mt-2">
        <div className="flex items-center">
          <Image alt="Yash Soni" height={30} width={30} src="/avatar.jpg" className="rounded-full" />
          <div className="text-sm md:text-md text-gray-700 dark:text-gray-300 ml-2">
            {"Yash Soni / "}
            {post.metadata.date}
          </div>
        </div>
        <div className="text-sm text-gray-500 min-w-32 mt-0 text-right">{post.metadata.readingTime}</div>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
