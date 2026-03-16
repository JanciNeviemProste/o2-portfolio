export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a
            href="#hero"
            className="text-xl font-bold text-white transition-all duration-300 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 rounded-lg px-2 py-1"
          >
            Martin<span className="text-blue-500">Foto</span>
          </a>

          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Martin Fotograf. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}
