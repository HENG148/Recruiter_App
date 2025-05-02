'use client'

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { TiArrowSortedDown } from "react-icons/ti";


interface NavLink {
  name: string;
  path: string;
}

const links: NavLink[] = [
  // { name: 'home', path: '/' },
  // { name: 'job', path: '/job' },
  // { name: 'media', path: '/media' },
  { name: 'about', path: '/abouts' },
  { name: 'contact', path: '/contacts' },
]

const NavLinks = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} className={isActive ? "text-blue-500 font-bold" : "text-gray-700"}>
      {children}
    </Link>
  )
}

const NavBar: React.FC = () => {

  const [open, setOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (): void => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
    }
    setIsOpen(true) 
  }

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setIsOpen(false)
    }, 200)
  }

  const pathname = usePathname();
  const t = useTranslations("Header")

  return (
    <nav className="font-primary flex gap-8 text-[1.1rem]">
      <Link href="/" className="capitalize font-medium transition-all hover:text-default text-default border-b-4 border-default">
        {t("home")}
      </Link>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button className="capitalize flex items-center font-medium transition-all ">
          {t("job")}
          <TiArrowSortedDown
            className={`text-main transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        {open && (
          <div className='font-accent grid gap-y-[2px] absolute w-[6.5rem] justify-center py-2 ml-[-1.5rem] mt-1 ttq bg-[#fff] border shadow-lg rounded z-10 text-[0.95rem] font-semibold hover:bg-[#fff]'>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href={{ pathname: '/jobListing', query: { page: '1' } }}>IT related</Link>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/'>Other</Link>
          </div>
        )}
      </div>
      <div
        className=''
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="capitalize flex items-center font-medium transition-all hover:text-default text-gray-700">
          {t("media")}
          <TiArrowSortedDown
            className={`text-main transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
        </button>

        {isOpen && (
          <div className={`font-accent grid gap-y-1 absolute w-[11rem] justify-center py-2 ml-[-1.5rem] mt-1 bg-[#fff] border border-gray-200 shadow-lg rounded-[7px] z-10 text-[0.95rem] font-semibold ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/media'>All</Link>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/'>General Knowledge</Link>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/'>IT Knowledge</Link>
            <Link className='hover:bg-[#858585] px-[10px] rounded py-2 transition-colors duration-150' href='/'>Seekers Review</Link>
          </div>
        )}
      </div>
      {links.map((link, idx) => (
        <Link href={link.path} key={idx}
          className={`${link.path === pathname ? 'text-main border-b-2 border-main': ""} text-white capitalize hover:text-main transition-all`}
        >
          {t(link.name)}
        </Link>
      ))}
    </nav>
  )
}

export default NavBar;