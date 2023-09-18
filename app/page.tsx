import { WelcomeSection } from './components'
import './home.css'

export default function Home () {
  return (
    <main className='ralative w-full h-screen overflow-auto snap-y snap-mandatory'>
      <div className='imgUrl'>
        <div className='snap-center'>
          <WelcomeSection />
        </div>
        <div className='snap-center'>
          <WelcomeSection />
        </div>
        <div className='snap-center'>
          <WelcomeSection />
        </div>
      </div>
    </main>
  )
}
