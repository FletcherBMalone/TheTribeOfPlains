import Providers from '@/components/Providers';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { Inter } from 'next/font/google';


// const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Fletcher Malone',
  description: 'The Tribe of Plains | Home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased')}>
      <body className='min-h-screen bg-white dark:white antialiased'>
        <Providers>
          {children}
        </Providers>

        {/* Allow for more height on mobile devices */}
        <div className='h-40 md:hidden'/>
      </body>
    </html>
  )
}
