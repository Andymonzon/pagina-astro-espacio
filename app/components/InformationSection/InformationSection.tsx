import './InformationSection.css'
import { getData } from '@/services'
import Image from 'next/image'
import Link from 'next/link'
import { imageBlur } from '@/app/models/image.blur'
import { type IInformation } from '@/models'

const fetchInformation = async () => {
  const url = 'https://api.nasa.gov/planetary/apod?'
  return await getData({ url, dataCache: 'no-store' }) as IInformation
}

async function InformationSection () {
  const information = await fetchInformation()

  if (information == null) return null

  return (
    <section className='w-full min-h-screen py-5 md:p-0 md:h-screen flex items-center justify-center flex-col'>
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
            <Image blurDataURL={imageBlur} placeholder='blur' className='object-cover h-auto w-full md:h-[300px] md:w-[250px] relative z-[20] rounded' src={information.url} alt={information.title} width={250} height={300} quality={70} priority />
          </Link>
        </div>
      </main>
    </section >
  )
}

export default InformationSection
