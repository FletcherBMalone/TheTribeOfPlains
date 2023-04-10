import Image from 'next/image'
import { FC } from 'react'


{/* <div className='relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image 
              priority
              className='img-shadow'
              quality={100}
              style={{objectFit: 'contain'}}
              fill
              src='/typewriter.png' 
              alt='typewriter'
            />
</div> */}

export default function Home() {
    return (
        <div className='relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
                priority
                className='img-header'
                quality={100}
                style={{objectFit: 'contain'}}
                fill
                src='/header.JPG'
                alt="header image"
             />
        </div>
      )
}
