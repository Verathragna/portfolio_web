export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <p>© {new Date().getFullYear()} Your Name</p>
        <div className="flex space-x-4">
          <a href="https://github.com/yourname">GitHub</a>
          <a href="https://linkedin.com/in/yourname">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}