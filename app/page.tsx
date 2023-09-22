import { Inter } from 'next/font/google'
import { ContainerObserver } from '@/components'
import { WelcomeSection, InformationSection, MarsSection } from './components'
import './home.css'
import { Routes } from '@/models'

const inter = Inter({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  display: 'block'
})

export default function Home () {
  return (
    < main className='ralative w-full md:h-screen overflow-auto snap-y snap-mandatory' >
      <div className='imgUrl'>
        <div className='snap-center' id='home'>
          <ContainerObserver nameId={Routes.HOME}>
            <WelcomeSection />
          </ContainerObserver>
        </div>

        <div className={`snap-center ${inter.className}`} id='news'>
          <ContainerObserver nameId={Routes.NEW}>
            <InformationSection />
          </ContainerObserver>
        </div>
        <div className={`snap-center ${inter.className}`} id='mars'>
          <ContainerObserver nameId={Routes.MARS}>
            <MarsSection />
          </ContainerObserver>
        </div>
      </div>
    </main >
  )
}
