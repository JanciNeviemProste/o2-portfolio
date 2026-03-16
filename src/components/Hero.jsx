export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://loremflickr.com/1200/800/photography,camera,landscape?random=1"
          alt="Fotografický záber zachytávajúci krásu prírody"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-950/70 to-gray-900/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white mb-6">
          Zachytávam{' '}
          <span className="text-blue-500">príbehy</span>
          <br />
          cez objektív
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 opacity-80">
          Profesionálna fotografia, ktorá osloví. Portréty, eventy, produkty
          a&nbsp;krajiny — každý záber má svoj význam.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#portfolio"
            className="inline-block rounded-lg bg-blue-500 px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Pozrieť portfólio
          </a>
          <a
            href="#kontakt"
            className="inline-block rounded-lg border border-gray-400 px-8 py-4 text-base font-semibold text-gray-200 transition-all duration-300 hover:border-white hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Napíšte mi
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
