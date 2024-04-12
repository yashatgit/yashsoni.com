import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-black dark:text-white pt-12">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-4" />
      <Link href="/" legacyBehavior>
        <a className="text-center w-full text-blue-500 dark:text-blue-400">yashsoni.com</a>
      </Link>
    </footer>
  );
}
