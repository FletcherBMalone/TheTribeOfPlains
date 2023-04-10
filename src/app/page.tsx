import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fletcher Malone | Home',
  description: '"The Tribe of Plain Poem"'
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <div className='relative w-full h-[110px] m-0 p-0'>
        <Link href="/home">
          <Image
            priority
            className='absolute w-full h-full object-cover m-0 p-0'
            quality={100}
            layout='fill'
            objectFit='cover'
            src='/header.JPG'
            alt="header image"
          />
        </Link>
      </div>

      <div className='m-0 p-0 h-screen flex pt-[100px] justify-center'>
      <div className='container m-0 p-0 max-w-8xl mx-auto w-full'>
        <div className='gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading 
            size='lg'
            className='three-d text-black dark:text-light-gold'
          >
            The Tribe of Plains. <br /> A poem by Fletcher Malone.
          </LargeHeading>
          <Paragraph className='max-w-xl lg:text-left text-white'>
          Hello, my name is Fletcher. Today I am happy to present <br/>
          to you a poem I have written entitled "The Tribe of Plains",<br />
          which covers the events of the North-West Rebellion of <br />
          1885. Please find the poem linked {' '}
          <Link href='/poem' className='underline underline-offset-2 text-black dark:text-light-gold'>
            here.
          </Link>
          </Paragraph>
          <Paragraph className='max-w-xl lg:text-left'>
            The North-West Rebellion is an event which I feel <br />
            unfortunately is relatively unknown to many Canadians. <br />
            I for one find it very interesting, and I hope my poem may <br />
            educate some (in a fun way) as to the nature of this <br />
            solemn, unjust and very formative part of Canadian <br />
            history. This poem began as a university project which I have <br/ >
            expanded upon. Thank and hope you enjoy!
            
          </Paragraph>

          <div className='relative w-[70%] max-w-[500px] lg:max-w-1xl lg:left-[60%] aspect-square lg:absolute'>
              <Image 
                priority
                className='home-page'
                quality={100}
                style={{objectFit: 'contain'}}
                fill
                src='/homepage.JPG' 
                alt='homepage'
              />
          </div>
        </div>
      </div>
    </div>

      <div className='fixed bottom-0 left-0 w-full h-[110px] m-0 p-0'>
        <Image 
          priority
          className='absolute w-full h-full object-cover m-0 p-0'
          quality={100}
          layout='fill'
          objectFit='cover'
          src='/footer.JPG'
          alt="header image"
        />
      </div>
    </div>
    
    
  )
}
