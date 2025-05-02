'use client'

import Link from 'next/link'
import Logo from '../../public/10.png'
import Image from 'next/image'
import NavBar from './NavBar'
import LocalSwitcher from './local-switcher';
import { useTranslations } from 'next-intl'

interface HeaderProps {
  title: string;
  className: string;
}

const Header: React.FC<HeaderProps> = () => {
  const t = useTranslations("Log")
  return (
    <>
      <div className='w-[70%] justify-items-center rounded-[40px] py-2 bg-[#fff] border border-[#cde6ff] bg-transparent flex items-center justify-between pr-[2rem] fixed left-[50%] top-3 z-10 transform -translate-x-1/2'>
        <div className='flex items-center'>
          <Link href='/' legacyBehavior>
            <Image className=' cursor-pointer' src={Logo} alt='logo' width={200} />
          </Link>
          <div className='hidden xl:flex'>
            <NavBar />
          </div>
        </div>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-3 w-auto'>
            <Link href="/Sign/register" className='border border-[#1a5276] grid justify-items-center py-[10px] rounded-[30px] text-[15px] w-[7rem] hover:bg-[#edf2f4]'>
              {t("register")}
            </Link>
            <Link href='/Sign/login' className='w-[6.5rem] border border-[#1a5276] grid justify-items-center py-[10px] rounded-[30px] text-[15px] bg-[#1a5276] text-[#fff] hover:bg-[#2c6081]'>
              {t("log-in")}
            </Link>
          </div>       
          <LocalSwitcher />
        </div>
      </div>
    </>
  )
}

export default Header
