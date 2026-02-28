import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex space-x-4">
      <Link href="/about" className="hover:text-yellow-300 font-medium">
        About
      </Link>
    </nav>
  );
}