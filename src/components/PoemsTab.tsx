'use client'

import paragraph from '@/helpers/paragraph';
import { Box, maxWidth } from '@mui/system';
import { FC } from 'react';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'

const PoemsTab: FC = () => {
  return (
    <div className='flex w-[1000px] pb-[100px] text-center text-[20px] leading-10 whitespace-pre-wrap'>
        {paragraph}
    </div>
  )
}   

export default PoemsTab