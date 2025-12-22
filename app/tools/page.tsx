import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata = {
  title: "AI Tools",
  description: "Collection of AI-powered tools and utilities",
};

function getTools() {
  const toolsDir = path.join(process.cwd(), "public", "tools");

  try {
    const files = fs.readdirSync(toolsDir);
    const htmlFiles = files
      .filter((file) => file.endsWith(".html"))
      .map((file) => {
        const toolId = file.replace(".html", "");
        // You can extract title/description from the HTML file if needed
        // For now, we'll use a simple format
        const name = toolId
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");

        return {
          id: toolId,
          name,
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
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
