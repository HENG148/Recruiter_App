'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  name: string;
  path: string;
}

const links: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Job', path: '/job' },
  { name: 'Media', path: '/media' },
  { name: 'Job Want', path: '/job_want' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const NavBar: React.FC = () => {

  const pathname = usePathname();

  return (
    <nav className='flex gap-10 text-[1.1rem]'>
      {links.map((link, idx) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${link.path === pathname ? 'text-accent-HOVER border-b-4 flex justify-center grid-cols-3 border-accent-HOVER' : ''} capitalize font-medium hover:text-accent-HOVER transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default NavBar;
