import { ContainerObserver } from '@/components'
import { WelcomeSection } from './components'
import './home.css'
import { Routes } from '@/models'

export default function Home () {
  return (
    <main className='ralative w-full h-screen overflow-auto snap-y snap-mandatory'>
      <div className='imgUrl'>
        <div className='snap-center'>
          <ContainerObserver nameId={Routes.HOME}>
            <WelcomeSection />
          </ContainerObserver>
        </div>

        <div className='snap-center'>
          <ContainerObserver nameId={Routes.INFORMATION}>
            <div className='h-screen' />
          </ContainerObserver>
        </div>
        <div className='snap-center'>
          <ContainerObserver nameId={Routes.MARS}>
            <WelcomeSection />
          </ContainerObserver>
        </div>
      </div>
    </main>
  )
}
