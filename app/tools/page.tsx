import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "AI Tools",
  description: "Collection of AI-powered tools and utilities",
};

const TOOL_META: Record<string, { name: string; description: string }> = {
  "polaroid-studio": {
    name: "Polaroid Studio Pro",
    description: "Create print-ready polaroid frames with filters, captions, and batch printing",
  },
  "pdf-kit": {
    name: "PDF Kit",
    description: "Compress, merge, split, rotate, convert, and unlock PDFs — 100% in your browser",
  },
};

function getTools() {
  const toolsDir = path.join(process.cwd(), "public", "tools");

  try {
    const files = fs.readdirSync(toolsDir);
    const htmlFiles = files
      .filter((file) => file.endsWith(".html"))
      .map((file) => {
        const toolId = file.replace(".html", "");
        const meta = TOOL_META[toolId];
        const name = meta?.name ?? toolId
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        const description = meta?.description ?? "";

        return {
          id: toolId,
          name,
          description,
          filename: file,
        };
      });

    return htmlFiles;
  } catch (error) {
    console.error("Error reading tools directory:", error);
    return [];
  }
}

export default function ToolsPage() {
  const tools = getTools();

  return (
    <section className="max-w-6xl flex flex-1 flex-col m-auto w-full mb-2 p-1">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold mb-6">AI Tools</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          A collection of AI-powered tools and utilities. Each tool is a standalone HTML application.
        </p>

        {tools.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            <p>
              No tools available yet. Add HTML files to{" "}
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">public/tools/</code> to get started.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
                {tool.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">{tool.description}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
