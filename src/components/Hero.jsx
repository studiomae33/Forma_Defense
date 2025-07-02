"use client"

import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  const [open, setOpen] = useState(false)
  return (
    <Container className="pt-6 pb-10 lg:pt-10 flex flex-col lg:flex-row items-center justify-between">
      <div className="text-left w-full lg:w-1/2 flex flex-col justify-center">
        <h1 className="max-w-2xl font-display text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          FORMATION<br />
          <span className="text-blue-700 font-bold">Négociation de crise</span>
        </h1>
        <p className="mt-7 max-w-lg text-xl text-slate-700 font-medium">
          Formation 100% présentiel pour maîtriser la gestion des conflits, les techniques de négociation de crise et le développement de stratégies de résolution. Acquérez des compétences essentielles pour désamorcer les situations tendues et gérer le stress en contexte professionnel.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 relative">
          <Button
            type="button"
            variant="outline"
            className="flex items-center px-8 py-3 border-2 border-blue-700 text-blue-700 font-bold rounded-full text-lg hover:bg-blue-50 transition-all duration-200 relative"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls="pdf-menu"
          >
            <svg aria-hidden="true" className="h-6 w-6 mr-2" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"/></svg>
            Télécharger la formation
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </Button>
          {open && (
            <div id="pdf-menu" className="absolute z-20 mt-14 left-0 w-full bg-white border border-blue-100 rounded-xl shadow-lg p-4 flex flex-col gap-3 animate-fade-in">
              <a href="/pdfs/Programme%20de%20formation.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium text-blue-700">
                <span>Programme de formation (PDF)</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
              </a>
              <a href="/pdfs/Fiche%20de%20formation.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium text-blue-700">
                <span>Fiche de formation (PDF)</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
              </a>
              <a href="/pdfs/Contrat%20de%20formation%20-%20N%C3%A9gociation%20de%20crise%20%20copie.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium text-blue-700">
                <span>Contrat de formation (PDF)</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
              </a>
              <a href="/pdfs/Guide%20RNQ%20v9%20du%2008%2001%2024.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50 transition font-medium text-blue-700">
                <span>Guide RNQ (PDF)</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
              </a>
              <a href="/pdfs/Documents_FORMA_DEFENSE.zip" download className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition font-bold">
                <span>Télécharger tous les PDF (ZIP)</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" /></svg>
              </a>
            </div>
          )}
          <Button href="Formation" className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-lg text-lg transition-all duration-200">
            Découvrir la formation
          </Button>
        </div>
        {/* Marquee défilante pour les bulles infos */}
        <div className="mt-8 w-full overflow-hidden py-4">
          <div className="relative w-full">
            <div className="marquee flex gap-6 whitespace-nowrap will-change-transform animate-marquee">
              <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-xl shadow-md border border-blue-100">
                <span className="text-2xl">🧩</span> Gestion des conflits et situations de crise
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-xl shadow-md border border-blue-100">
                <span className="text-2xl">🎯</span> Techniques de négociation éprouvées
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-xl shadow-md border border-blue-100">
                <span className="text-2xl">👤</span> Formation animée par un expert du RAID
              </div>
              {/* Duplique pour effet infini */}
              <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-xl shadow-md border border-blue-100">
                <span className="text-2xl">🧩</span> Gestion des conflits et situations de crise
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-xl shadow-md border border-blue-100">
                <span className="text-2xl">🎯</span> Techniques de négociation éprouvées
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-xl shadow-md border border-blue-100">
                <span className="text-2xl">👤</span> Formation animée par un expert du RAID
              </div>
            </div>
          </div>
        </div>
        {/* Styles pour l'animation marquee */}
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        `}</style>
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center items-center relative">
        <Image src="/images/Hero/securite.png" alt="Agent de sécurité" width={340} height={340} className="object-cover" />
      </div>
    </Container>
  )
}
