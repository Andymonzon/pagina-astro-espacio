import { Inter } from 'next/font/google'
import './InformationSection.css'
import { getData } from '@/services'
import Image from 'next/image'
import Link from 'next/link'

export interface IInformation {
  date: Date
  explanation: string
  hdurl: string
  media_type: string
  service_version: string
  title: string
  url: string
}

const API_KEY = process.env.API_KEY_NASA

const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

const fetchInformation = async () => {
  return await getData(url) as IInformation
}

const inter = Inter({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  variable: '--font-Inter',
  display: 'block'
})

async function InformationSection () {
  const information = await fetchInformation()

  return (
    <section className={`w-full min-h-screen md:h-screen flex items-center justify-center flex-col ${inter.className}`}>
      <main className='w-full md:px-20 px-10 flex flex-col md:flex-row items-center relative gap-10 justify-center'>

        <div className='md:w-[50%] flex flex-col gap-5 justify-center'>
          <div className='md:w-[80%] flex flex-col gap-5 justify-center'>
            <header>
              <h2 className='flex text-xs items-center text-gray-300'>
                <span className='w-[30px] h-[1px] bg-gray-300 mr-2'></span>
                <span>WHAT&apos;S NEW</span>
              </h2>
            </header>
            <main className='flex flex-col gap-2'>
              <h3 className='text-lg flex items-center'>
                {information.title}
              </h3>
              <p className='text-xs'>{information.explanation}</p>
            </main>
          </div>
        </div>

        <div className='
          lg:block w-auto relative md:after:content-[""] duration-300 md:after:duration-300 custom-hover md:after:absolute md:after:rounded
          md:after:w-[250px] md:after:h-[300px] md:after:border-2 lg:after:left-[14px] lg:after:top-[14px]
          md:after:left-[14px] md:after:top-[14px] md:after:z-[10]'>
          <Link href={information.hdurl} target='_blank'>
            <Image className='object-cover h-auto w-full md:h-[300px] md:w-[250px] relative z-[20] rounded' src={information.url} alt={information.title} width={400} height={400} priority />
          </Link>
        </div>
      </main>
    </section >
  )
}

export default InformationSection
