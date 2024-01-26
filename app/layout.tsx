import dynamic from 'next/dynamic'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Layout/Header'
import Sidebar from '@/components/Layout/Sidebar'
import Avatar from '@/components/Layout/Avatar'
import { ManagedUIContext } from '@/context/ui.context'
// import ManagedModal from '@/components/UI/modal/managed-modal'

const ManagedModal = dynamic(
  () => import('@/components/UI/modal/managed-modal'),
  {ssr: false}
);

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Mustafa Isaev - Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='w-full h-screen bg-[#373b40]'>
        <ManagedUIContext>
          <Header />
          <Avatar />
          <div className='w-auto h-auto lg:h-full lg:ml-[45%] lg:mr-[100px] z-20 '>
            {children}
          </div>
          <Sidebar />
          <ManagedModal />
        </ManagedUIContext>
      </body>
    </html>
  )
}
