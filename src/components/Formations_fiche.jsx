"use client"

import Image from 'next/image'
import { useRef, useState } from 'react'

export function FormationsFiche() {
  const dialogRef = useRef(null)
  const [showPhone, setShowPhone] = useState(false)

  return (
    <section className="w-full py-12 px-2 bg-white">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Colonne gauche : Modules & Compétences */}
          <div className="flex-1 p-10 flex flex-col gap-8 bg-white/80">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide" style={{ color: '#000E8F' }}>Modules</h3>
<ol className="space-y-2">
  <li className="flex items-center gap-2"><span className="font-bold" style={{ color: '#000E8F' }}>1.</span><span>Compréhension et gestion des conflits</span></li>
  <li className="flex items-center gap-2"><span className="font-bold" style={{ color: '#000E8F' }}>2.</span><span>Techniques de négociation de crise</span></li>
  <li className="flex items-center gap-2"><span className="font-bold" style={{ color: '#000E8F' }}>3.</span><span>Stratégies de résolution de conflits</span></li>
  <li className="flex items-center gap-2"><span className="font-bold" style={{ color: '#000E8F' }}>4.</span><span>Gestion des émotions et du stress</span></li>
</ol>
<h3 className="text-xl font-bold mb-4 uppercase tracking-wide" style={{ color: '#000E8F' }}>Compétences</h3>
<ul className="space-y-2">
  <li className="flex items-center gap-2"><span style={{ color: '#000E8F' }}>✔️</span>Gestion des conflits</li>
  <li className="flex items-center gap-2"><span style={{ color: '#000E8F' }}>✔️</span>Négociation de crise</li>
  <li className="flex items-center gap-2"><span style={{ color: '#000E8F' }}>✔️</span>Désamorcer les situations tendues</li>
  <li className="flex items-center gap-2"><span style={{ color: '#000E8F' }}>✔️</span>Résolution de conflits</li>
  <li className="flex items-center gap-2"><span style={{ color: '#000E8F' }}>✔️</span>Communication sous pression</li>
  <li className="flex items-center gap-2"><span style={{ color: '#000E8F' }}>✔️</span>Gérer émotions & stress</li>
</ul>
            </div>
            {/* Bloc PDF toujours ouvert sous Compétences */}
            <div className="group bg-blue-50 border border-blue-200 rounded-xl shadow-sm p-4 mt-2">
              <div className="flex items-center justify-between text-blue-700 font-bold text-base select-none mb-4">
                <span>📄 Télécharger les documents PDF de la formation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
              <div className="flex flex-col gap-3">
                <a href="/pdfs/Programme%20de%20formation.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-blue-100 hover:bg-blue-100 transition font-medium text-blue-700 shadow-sm">
                  <span>Programme de formation (PDF)</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
                </a>
                <a href="/pdfs/Fiche%20de%20formation.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-blue-100 hover:bg-blue-100 transition font-medium text-blue-700 shadow-sm">
                  <span>Fiche de formation (PDF)</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
                </a>
                <a href="/pdfs/Contrat%20de%20formation%20-%20N%C3%A9gociation%20de%20crise%20%20copie.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-blue-100 hover:bg-blue-100 transition font-medium text-blue-700 shadow-sm">
                  <span>Contrat de formation (PDF)</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
                </a>
                <a href="/pdfs/Guide%20RNQ%20v9%20du%2008%2001%2024.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-blue-100 hover:bg-blue-100 transition font-medium text-blue-700 shadow-sm">
                  <span>Guide RNQ (PDF)</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
                </a>
                <a href="/pdfs/Documents_FORMA_DEFENSE.zip" download className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition font-bold shadow">
                  <span>Télécharger tous les PDF (ZIP)</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
                </a>
              </div>
            </div>
          </div>
          {/* Colonne droite : Synthèse, prix, infos clés, actions */}
          <div className="flex-1 bg-white p-10 flex flex-col justify-between gap-8">
            <div className="flex flex-col items-center gap-4 mb-4">
                           <span className="text-5xl font-extrabold tracking-tight drop-shadow" style={{ color: '#000E8F' }}>499€</span>
              <button
                type="button"
                className="w-full border border-blue-700 text-blue-700 font-bold rounded-lg py-2 px-3 text-center hover:bg-blue-50 transition text-base flex items-center justify-center gap-2 shadow-sm"
                onClick={() => setShowPhone(!showPhone)}
              >
                {showPhone ? (
                  <span className="text-lg font-bold tracking-wide">06 30 38 09 13</span>
                ) : (
                  <>
                    <span>En savoir plus</span> <span className="text-lg">📞</span>
                  </>
                )}
              </button>
                            <a
                href="https://docs.google.com/forms/d/177S8wsB8vrB3-tec166pCKIn9h14zdq4S9AwJZbEPrU/preview"
                className="w-full font-bold rounded-lg py-2 px-3 text-center transition text-base shadow"
                style={{ backgroundColor: '#000E8F', color: 'white' }}
              >
                S'inscrire à la formation
              </a>
            </div>
            <div className="w-full bg-white rounded-xl p-6 border border-blue-100 flex flex-col gap-6 shadow-sm mt-4">
              <h4 className="text-lg font-bold text-blue-700 mb-2 text-center">Informations clés</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-base text-slate-700">
                <div className="flex items-center gap-2 flex-wrap"><span className="text-blue-600 text-xl">📍</span> <span className="font-semibold">Lieu&nbsp;:</span><span>31 Rue Aristide Berges, 33270 Floirac</span></div>
                <div className="flex items-center gap-2 flex-wrap"><span className="text-blue-600 text-xl">👥</span> <span className="font-semibold">Effectif&nbsp;:</span><span>12 personnes max</span></div>
                <div className="flex items-center gap-2 flex-wrap"><span className="text-blue-600 text-xl">📅</span> <span className="font-semibold">Dates&nbsp;:</span><span>26 & 27 nov. 2025</span></div>
                <div className="flex items-center gap-2 flex-wrap"><span className="text-blue-600 text-xl">⏱️</span> <span className="font-semibold">Durée&nbsp;:</span><span>14h (8h-12h, 13h-16h)</span></div>
                <div className="flex items-center gap-2 flex-wrap"><span className="text-green-600 text-xl">📈</span> <span className="font-semibold">Niveau&nbsp;:</span><span>Tous niveaux</span></div>
                <div className="flex items-center gap-2 flex-wrap"><span className="text-blue-500 text-xl">🌍</span> <span className="font-semibold">Langue&nbsp;:</span><span>Français</span></div>
                <div className="flex items-center gap-2 flex-wrap"><span className="text-orange-500 text-xl">🎓</span> <span className="font-semibold">Diplôme&nbsp;:</span><span>Certificat de fin</span></div>
                <div className="flex items-center gap-2 flex-wrap"><span className="text-blue-600 text-xl">📝</span> <span className="font-semibold">Évaluation&nbsp;:</span><span>QCM fin module</span></div>
                <div className="flex items-center gap-2 flex-wrap"><span className="text-blue-600 text-xl">🧑‍💼</span> <span className="font-semibold">Pratique&nbsp;:</span><span>Mise en situation</span></div>
              </div>
            </div>
            {/* Pastille Accessibilité & Handicap avec croix de fermeture */}
            {typeof window !== 'undefined' && typeof document !== 'undefined' && (
              !window.__hideHandicapBubble && (
                <div className="fixed bottom-8 right-8 z-40 flex items-center gap-2">
                  <button
                    type="button"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-full shadow-lg text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 relative"
                    onClick={() => dialogRef.current && dialogRef.current.showModal()}
                    aria-label="Accessibilité & Handicap"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    Accessibilité & Handicap
                    <span
                      className="absolute -top-2 -right-2 bg-white border border-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-blue-700 text-lg font-bold cursor-pointer shadow"
                      onClick={e => {
                        e.stopPropagation();
                        window.__hideHandicapBubble = true;
                        document.querySelector('[data-handicap-bubble]').style.display = 'none';
                      }}
                      title="Fermer la pastille"
                      data-handicap-bubble
                    >
                      ×
                    </span>
                  </button>
                </div>
              )
            )}
            <dialog ref={dialogRef} id="accessibilite-info-fiche" className="rounded-xl p-0 max-w-lg w-full shadow-xl backdrop:bg-black/30">
              <div className="bg-white rounded-xl p-6 relative">
                                <button
                  type="button"
                  className="absolute top-3 right-4 text-slate-400 text-2xl font-bold"
                  style={{ color: '#000E8F' }}
                  onClick={() => dialogRef.current && dialogRef.current.close()}
                  aria-label="Fermer"
                >
                  ×
                </button>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#000E8F' }}>Accessibilité & Handicap</h3>
                <p className="mb-2 font-bold">
                  FORMA DEFENSE s’engage à rendre ses formations accessibles à tous.<br />
                  Toutes nos formations sont accessibles aux personnes en situation de handicap.
                </p>
                <p className="mb-2">
                  Nous mettons en place les adaptations nécessaires pour garantir à chacun des conditions d&apos;apprentissage optimales (accessibilité des locaux, aménagement des supports, adaptation des rythmes, etc.).
                </p>
                <p className="mb-2">
                  Pour toute demande d’information ou de besoin spécifique, notre référent handicap est à votre disposition pour organiser les modalités d’accueil et d’accompagnement adaptées.
                </p>
                <div className="mt-3">
                  <span className="inline-block mr-2">👉</span>
                  <span className="font-semibold">Contact : Christophe MARTINHITA - Référent handicap</span><br />
                  <span className="inline-block mr-2">📧</span>
                  <a href="mailto:contact@formadefense.fr" className="underline" style={{ color: '#000E8F' }}>contact@formadefense.fr</a><br />
                  <span className="inline-block mr-2">📞</span>
                  <a href="tel:0630380913" className="underline" style={{ color: '#000E8F' }}>06 30 38 09 13</a>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </section>
  )
}