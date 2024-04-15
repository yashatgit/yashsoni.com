import type { Metadata } from "next";
import { CustomMDX } from "app/components/mdx";
import { getPost } from "app/db/blog";

export const metadata: Metadata = {
  title: "Uses",
  description: "Here's what tech I'm currently using for coding, videos, and music.",
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
