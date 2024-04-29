import type { Metadata } from "next";
import { CustomMDX } from "app/components/mdx";
import { getPost } from "app/db/blog";

export const metadata: Metadata = {
  title: "About – Yash Soni",
  description: "Why this blog",
};

export default function UsesPage() {
  const aboutPage = getPost("about.mdx").content;
  return (
    <section>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={aboutPage} />
      </article>
    </section>
  );
}
