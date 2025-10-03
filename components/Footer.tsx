export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Built with Next.js & Tailwind CSS
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourname"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourname"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourname"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}