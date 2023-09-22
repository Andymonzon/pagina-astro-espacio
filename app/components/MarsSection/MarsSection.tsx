import { type IMars } from '@/models'
import { getData } from '@/services'
import Image from 'next/image'
import MarsImg from '@/public/mars.png'

const fetchDataMars = async () => {
  const url = 'https://mars.nasa.gov/rss/api/?feed=weather&category=insight_temperature&feedtype=json&ver=1.0'
  return await getData({ url }) as IMars
}

const celsiusToFahrenheit = (temp: number) => {
  return (temp * 9 / 5) + 32
}

async function MarsSection () {
  const dataMars = await fetchDataMars()

  return (
    <section className='w-full min-h-screen py-5 md:p-0 md:h-screen flex items-center justify-center flex-col'>
      <div className='w-full md:px-20 px-10 flex flex-col md:flex-row items-center relative gap-10 justify-center'>
        <div className='w-full md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[50%] flex flex-col items-center justify-center gap-5'>
          <header className='w-full flex justify-between'>
            <h2 className='flex text-xs items-center text-gray-300'>
              <span className='w-[30px] h-[1px] bg-gray-300 mr-2'></span>
              <span className=''>MARS</span>
            </h2>
          </header>
          <main className='flex flex-col gap-5 items-center justify-center relative'>
            <Image src={MarsImg} alt='mars' className='w-[150px] md:w-[250px] absolute top-0 z-[20]' />
            <div className='flex flex-col items-center lg:w-[150%] justify-center gap-5 bg-zinc-700/10 backdrop-blur rounded pt-24 mt-20 md:mt-20 md:pt-40'>
              <div>
                <h3 className='text-center text-lg'>SOL 681</h3>
                <p className='text-xs'>October 25, 2020</p>
              </div>
              <div>
                <p className='text-xl md:text-3xl'>{celsiusToFahrenheit(dataMars[681].AT.av).toFixed(1)}°F</p>
              </div>
              <div className='flex gap-2 flex-wrap items-center justify-center p-5'>
                <p className='text-xs'>Max: {celsiusToFahrenheit(dataMars[681].AT.mx).toFixed(1)}°F</p>
                <p className='text-xs'>Min: {celsiusToFahrenheit(dataMars[681].AT.mn).toFixed(1)}°F</p>
              </div>
            </div>
          </main>

        </div>
      </div >
    </section >
  )
}

export default MarsSection
