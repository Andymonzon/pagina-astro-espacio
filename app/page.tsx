import { ContainerObserver } from '@/components'
import { InformationSection, WelcomeSection } from './components'
import './home.css'
import { Routes } from '@/models'

export default function Home () {
  return (
    <main className='ralative w-full md:h-screen overflow-auto snap-y snap-mandatory'>
      <div className='imgUrl'>
        <div className='snap-center' id='home'>
          <ContainerObserver nameId={Routes.HOME}>
            <WelcomeSection />
          </ContainerObserver>
        </div>

        <div className='snap-center' id='news'>
          <ContainerObserver nameId={Routes.NEW}>
            <InformationSection />
          </ContainerObserver>
        </div>
        <div className='snap-center' id='mars'>
          <ContainerObserver nameId={Routes.MARS}>
            <WelcomeSection />
          </ContainerObserver>
        </div>
      </div>
    </main>
  )
}
