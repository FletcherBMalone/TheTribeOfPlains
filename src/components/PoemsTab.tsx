'use client'

import numerals from '@/helpers/numerals';
import paragraph from '@/helpers/paragraph';
import { Box, maxWidth } from '@mui/system';
import { FC } from 'react';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'

const PoemsTab: FC = () => {
  return (
    <div className='flex flex-col lg:flex-row w-[1000px] pb-[100px] text-center text-[20px] leading-10 whitespace-pre-wrap'>
      <div className="pl-10 mt-0 pt-0">
        {numerals}
      </div>
      <div>
        {paragraph}
      </div>
</div>

  )
}   

export default PoemsTab