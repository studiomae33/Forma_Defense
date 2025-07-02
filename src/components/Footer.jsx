import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-16">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-5 gap-10 text-slate-700">
          {/* Bloc logo + intro + réseaux */}
          <div className="col-span-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <Logo className="h-10 w-auto mb-2" />
            <p className="text-sm max-w-xs leading-snug">
              Forma Défense propose des formations professionnelles pour la gestion de crise, la négociation et la sécurité. Développez vos compétences pour agir efficacement en situation tendue.
            </p>
            <div className="flex gap-3 mt-2">
              <Link
                href="https://www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener"
              >
                <svg
                  className="w-7 h-7 fill-blue-600 hover:fill-blue-800 transition"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener"
              >
                <svg
                  className="w-7 h-7 fill-blue-700 hover:fill-blue-900 transition"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </Link>
              <Link
                href="mailto:contact@formadefense.fr"
                aria-label="Mail"
              >
                <svg
                  className="w-7 h-7 fill-slate-500 hover:fill-blue-700 transition"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 13.065l-8-6.065v12h16v-12l-8 6.065zm8-8.065h-16c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-16c0-1.104-.896-2-2-2zm-8 9.065l8-6.065v-2h-16v2l8 6.065z" />
                </svg>
              </Link>
            </div>
          </div>
          {/* Société */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-3 text-slate-900">
              Forma Défense
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Notre organisme
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contact@formadefense.fr"
                  className="hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/Formation" className="hover:underline">
                  Nos formations
                </Link>
              </li>
            </ul>
          </div>
          {/* Documentation */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-3 text-slate-900">
              Documentation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/pdfs/Programme%20de%20formation.pdf"
                  download
                  className="hover:underline"
                >
                  Programme de formation
                </a>
              </li>
              <li>
                <a
                  href="/pdfs/Fiche%20de%20formation.pdf"
                  download
                  className="hover:underline"
                >
                  Fiche de formation
                </a>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-bold text-lg mb-3 text-slate-900">Contact</h4>
            <ul className="space-y-2">
              <li className="whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="font-semibold">Téléphone :</span>{' '}
                <a
                  href="tel:0630380913"
                  className="hover:underline"
                >
                  06 30 38 09 13
                </a>
              </li>
              <li className="whitespace-nowrap overflow-hidden text-ellipsis">
                <span className="font-semibold">Email :</span>{' '}
                <a
                  href="mailto:contact@formadefense.fr"
                  className="hover:underline"
                >
                  contact@formadefense.fr
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-slate-400 text-xs py-6 border-t border-slate-100 mt-6">
          &copy; {new Date().getFullYear()} Forma Défense - Négociation de crise.
          Tous droits réservés.
        </div>
      </Container>
    </footer>
  )
}
