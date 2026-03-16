const SERVICES = [
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Svadobná fotografia',
    description:
      'Zachytím najkrajšie momenty vášho veľkého dňa. Od príprav cez obrad až po oslavu — každý detail má hodnotu.',
    image: 'https://loremflickr.com/800/600/wedding,photography?random=2',
    alt: 'Svadobná fotografia páru počas obradu',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Portrétna fotografia',
    description:
      'Profesionálne portréty pre jednotlivcov aj rodiny. Prirodzené pózy v ateliéri alebo v exteriéri podľa vašich predstáv.',
    image: 'https://loremflickr.com/800/600/portrait,photography?random=3',
    alt: 'Portrétna fotografia v prírodnom svetle',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Produktová fotografia',
    description:
      'Kvalitné snímky vašich produktov pre e-shop, katalóg alebo sociálne siete. Čisté pozadie alebo kreatívne aranžmány.',
    image: 'https://loremflickr.com/800/600/product,photography?random=4',
    alt: 'Produktová fotografia na čistom pozadí',
  },
];

export default function Features() {
  return (
    <section id="sluzby" className="py-16 lg:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Moje služby
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ponúkam širokú škálu fotografických služieb prispôsobených vašim
            potrebám a&nbsp;predstavám.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="group bg-gray-800/50 border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-gray-400 opacity-80">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
