import Image from 'next/image'

export function FormationsInfo() {
  return (
    <section className="bg-gray-50 py-16 w-full">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight">
            <span style={{ color: '#000E8F' }}>FORMATION</span>&nbsp;: <span className="text-slate-900">Négociation de crise</span>
          </h2>
          <p className="text-lg text-slate-700 mb-6 leading-relaxed">
            Formation 100% présentiel pour apprendre à gérer les conflits, maîtriser les techniques de négociation de crise et développer des stratégies de résolution. Animée par             <span className="font-bold" style={{ color: '#000E8F' }}>Didier GUEGUEN</span>, négociateur du RAID, cette formation s’adresse aux personnes en contact avec le public, étudiants en sécurité et professionnels du secteur.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-base font-semibold text-slate-700 mb-2">
          <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm"><span className="text-yellow-400 text-xl">★</span> 5/5</span>
          <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm"><span className="text-orange-500 text-xl">🎓</span> 1 Étudiant</span>
          <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm"><span className="text-green-500 text-xl">📈</span> Débutant</span>
          <span className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm"><span className="text-blue-500 text-xl">🌍</span> Français</span>
        </div>
      </div>
    </section>
  )
}