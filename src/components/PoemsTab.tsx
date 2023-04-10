'use client'

import paragraph from '@/helpers/paragraph';
import { Box, maxWidth } from '@mui/system';
import { FC } from 'react';
import Simplebar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'

const PoemsTab: FC = () => {
  return (
    <div className='flex w-[700px] max-h-[420px] text-center text-2xl leading-10 whitespace-pre-wrap'>
        {paragraph}
    </div>
  )
}   

export default PoemsTab