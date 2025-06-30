
import { Footer } from '@/components/Footer'
import { Formations } from '@/components/Formations'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { Avis } from '@/components/Avis'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Formations />
        <Avis />
      </main>
      <Footer />
    </>
  )
}
