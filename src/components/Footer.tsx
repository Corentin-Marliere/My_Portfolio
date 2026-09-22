export default function Footer() {
  return (
    <footer className="max-w-300 mx-auto px-8 py-4 flex justify-between items-center">
      <p>© {new Date().getFullYear()} Corentin.</p>
      <div className="flex gap-4">
        <a
          href="https://github.com/Corentin-Marliere"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[#667eea]"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/corentin-ma/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[#667eea]"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
