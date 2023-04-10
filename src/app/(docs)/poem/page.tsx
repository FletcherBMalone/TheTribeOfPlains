'use client'

import { FC } from 'react'
import Image from 'next/image'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import PoemsTab from '@/components/PoemsTab'
import Audio from '@/helpers/audio'
import Link from 'next/link'

const page: FC = ({}) => {
  return (
    <div>
        <div className='relative w-full h-[110px] m-0 p-0'>
        <Link href='/'>
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
      
        <div className='m-0 p-0 h-screen flex pt-[100px] justify-center content-center text-center'>
            <div className='container m-0 p-0 max-w-8xl mx-auto w-full text-center'>
                <div className='gap-6 flex flex-col justify-start lg:justify-center items-center text-center'>
                    <Paragraph className='text-[#ffffffb7] text-center'>
                        <div className='text-2xl'>Fletcher Malone</div>
                    </Paragraph>
                    <LargeHeading 
                        size='lg'
                        className='three-d text-black dark:text-light-gold'
                    >
                        The Tribe of Plains
                    </LargeHeading>
                    <div className='flex flex-col lg:flex-row gap-4 w-[1000px] items-start'>
                      <PoemsTab />
                      <div>
                        <Paragraph className='text-center'>
                          <div>Listen to this poem:</div>
                        </Paragraph>
                        <Audio />
                      </div>
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

export default page