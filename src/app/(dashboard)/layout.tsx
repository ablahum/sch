import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='h-screen flex'>
      {/* LEFT */}
      <div className='w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4'>
        <Link
          href='/'
          className='flex items-center justify-center lg:justify-start gap-2'
        >
          <Image
            src='/logo.png'
            alt='logo'
            width={32}
            height={32}
          />
          <p className='hidden font-bold uppercase lg:flex flex-col'>
            sch
            <span className='capitalize font-normal text-sm text-gray-400'>school management app</span>
          </p>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className='w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}
