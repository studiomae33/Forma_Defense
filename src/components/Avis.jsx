import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const avis = [
  {
    name: 'Ludovic LAUZE',
    text: 'Formation au top, hyper concrète et animée par un pro du terrain ! Didier Gueguen partage son expérience avec beaucoup de pédagogie. Idéal pour mieux gérer les conflits et apprendre à négocier en situation de tension. Je recommande à tous ceux qui bossent avec du public ou dans la sécu.',
    stars: 5,
  },
]

export function Avis() {
  return (
    <section id="avis" className="relative w-full bg-white py-16 px-2 overflow-hidden">
      {/* Décor rond pastel */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-40 -z-10" style={{ backgroundColor: '#000E8F' }} />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-100 rounded-full opacity-30 -z-10" />
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Bloc texte + bouton */}
        <div className="flex-1 flex flex-col items-center lg:items-start justify-center mb-10 lg:mb-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center lg:text-left drop-shadow" style={{ color: '#000E8F' }}>Ils nous ont fait confiance</h2>
          <p className="text-lg text-slate-700 mb-8 text-center lg:text-left max-w-md">Découvrez les retours authentiques de nos stagiaires sur la formation Forma Defense.</p>
          <a href="https://www.google.com/search?q=forma+defense+avis" target="_blank" rel="noopener noreferrer" className="inline-block font-bold px-7 py-3 rounded-full shadow-lg transition text-lg" style={{ backgroundColor: '#000E8F', color: 'white' }}>
            Voir tous les avis Google
          </a>
        </div>
        {/* Bloc avis + badge */}
        <div className="flex-1 flex flex-col gap-4 items-center relative">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            {avis.map((a, i) => (
              <div key={i} className="relative bg-white border border-blue-100 rounded-xl shadow p-5 flex-1 flex flex-col items-center text-center transition hover:scale-105 duration-200 max-w-xs mx-auto">
                <FaQuoteLeft className="text-xl text-blue-200 mb-2 absolute -top-4 left-1/2 -translate-x-1/2" />
                <p className="text-slate-700 text-sm mb-4 mt-2">{a.text}</p>
                <div className="flex justify-center mb-1">
                  {Array.from({ length: a.stars }).map((_, idx) => (
                    <FaStar key={idx} className="text-yellow-400 text-base" />
                  ))}
                </div>
                				<div
				  className="font-bold text-blue-900 text-base mt-1 relative z-20 bg-white px-2 rounded-full shadow-sm border border-blue-100"
				  style={{ marginTop: '12px' }}
				>
				  {a.name}
				</div>
              </div>
            ))}
          </div>
          {/* Badge note Google modernisé */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white rounded-xl shadow-xl flex flex-col items-center justify-center px-6 py-3 w-40 border-4 border-white z-10 scale-105" style={{ background: 'linear-gradient(90deg, #000E8F 60%, #e23a31 100%)' }}>
            <div className="flex mb-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <FaStar key={idx} className="text-yellow-300 text-base drop-shadow" />
              ))}
            </div>
            <div className="text-xs opacity-90">Sur 1 avis Google</div>
          </div>
        </div>
      </div>
    </section>
  )
}