import { Header } from '@/components/Header'
import { FormationsInfo } from '@/components/Formations_info'
import { FormationsFiche } from '@/components/Formations_fiche'
import { Footer } from '@/components/Footer'

export default function FormationPage() {
  return (
    <>
      <Header />
      <FormationsInfo />
      <FormationsFiche />
      <Footer />
    </>
  )
}
