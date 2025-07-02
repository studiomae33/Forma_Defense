"use client"

import Image from 'next/image'
import { Button } from './Button'
import { useRef } from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

const formation = {
  id: 1,
  title: 'Négociation de crise',
  level: 'Tout public',
  image: '/images/Formation/formation.jpg',
  description: 'Formation 100% présentiel pour acquérir les techniques de négociation de crise, la gestion des conflits et le développement de stratégies de résolution. Accessible à toute personne en contact avec le public ou dans le secteur de la sécurité.',
  duration: '14h',
  chapters: 4,
  category: 'Gestion de crise',
}

export function Formations() {
  const dialogRef = useRef(null)
  return (
    <section className="w-full max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-2">La formation</h2>
      <p className="text-center text-slate-500 mb-8">Négociation de crise&nbsp;: développez vos compétences pour gérer les situations tendues</p>
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col mb-8">
        <div className="h-56 w-full relative">
          <Image src={formation.image} alt={formation.title} fill className="object-cover" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded mb-2">{formation.level}</span>
          <h3 className="text-xl font-bold text-slate-900 mb-1">{formation.title}</h3>
          <p className="text-slate-600 text-sm mb-4 line-clamp-2">{formation.description}</p>
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
            <span className="flex items-center gap-1"><span className="text-red-500">⏱️</span> 14h</span>
            <span className="flex items-center gap-1"><span className="text-orange-500">📅</span> Dates : 26 et 27 novembre 2025</span>
          </div>
          <Button href="/Formation" className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">Voir & Réserver</Button>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full shadow-sm text-sm transition border border-blue-200"
          onClick={() => dialogRef.current && dialogRef.current.showModal()}
        >
          <InformationCircleIcon className="w-5 h-5 text-blue-500" aria-hidden="true" />
          Accessibilité & Handicap
        </button>
      </div>
      <dialog ref={dialogRef} id="accessibilite-info" className="rounded-xl p-0 max-w-lg w-full shadow-xl backdrop:bg-black/30">
        <div className="bg-white rounded-xl p-6">
          <button
            type="button"
            className="absolute top-3 right-4 text-slate-400 hover:text-blue-700 text-2xl font-bold"
            onClick={() => dialogRef.current && dialogRef.current.close()}
            aria-label="Fermer"
          >
            ×
          </button>
          <h3 className="text-lg font-bold mb-3 text-blue-700">Accessibilité & Handicap</h3>
          <p className="mb-2 font-bold">FORMA DEFENSE s’engage à rendre ses formations accessibles à tous.<br />Toutes nos formations sont accessibles aux personnes en situation de handicap.</p>
          <p className="mb-2">Nous mettons en place les adaptations nécessaires pour garantir à chacun des conditions d&apos;apprentissage optimales (accessibilité des locaux, aménagement des supports, adaptation des rythmes, etc.).</p>
          <p className="mb-2">Pour toute demande d’information ou de besoin spécifique, notre référent handicap est à votre disposition pour organiser les modalités d’accueil et d’accompagnement adaptées.</p>
          <div className="mt-3">
            <span className="inline-block mr-2">👉</span>
            <span className="font-semibold">Contact : Christophe MARTINHITA - Référent handicap</span><br />
            <span className="inline-block mr-2">📧</span>
            <a href="mailto:contact@formadefense.fr" className="underline text-blue-700">contact@formadefense.fr</a><br />
            <span className="inline-block mr-2">📞</span>
            <a href="tel:0630380913" className="underline text-blue-700">06 30 38 09 13</a>
          </div>
        </div>
      </dialog>
    </section>
  )
}
