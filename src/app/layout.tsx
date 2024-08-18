import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify|clone',
  description: 'The best place to listen to music '
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <div className='w-full h-screen max-h-screen bg-music-dark text-music-light overflow-hidden flex flex-col'>
          {children}
        </div>
      </body>
    </html>
  )
}
