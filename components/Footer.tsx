import Link from 'next/link';
import { HR } from 'components/elements';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8 text-black dark:text-white">
      <HR />
      <Link href="/">
        <a className="text-center w-full text-blue-500 dark:text-blue-400">
          yashsoni.com
        </a>
      </Link>
    </footer>
  );
}
