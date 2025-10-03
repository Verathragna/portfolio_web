export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-xl font-bold">YourName.dev</a>
        <ul className="flex space-x-6">
          <li><a href="/projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
          <li><a href="/about" className="hover:text-blue-600">About</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}