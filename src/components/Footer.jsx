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
