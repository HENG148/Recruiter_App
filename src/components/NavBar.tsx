'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

interface NavLink {
  name: string;
  path: string;
}

const links: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Job', path: '/job' },
  { name: 'Media', path: '/media' },
  // { name: 'Job Want', path: '/job_want' },
  { name: 'About', path: '/abouts' },
  { name: 'Contact', path: '/contact' },
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

  const pathname = usePathname();

  return (
    <nav className='font-primary flex gap-8 text-[1.1rem]'>
      {links.map((link, idx) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${link.path === pathname ? 'text-default border-b-4 flex justify-center grid-cols-3 border-default' : ''} capitalize font-medium hover:text-default transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default NavBar;