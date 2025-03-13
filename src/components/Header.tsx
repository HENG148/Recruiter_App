import Link from 'next/link'
import Logo from '../../public/10.png'
import Image from 'next/image'
import NavBar from './NavBar'

interface HeaderProps {
  title: string;
  className: string;
}

const Header:React.FC<HeaderProps> = () => {
  return (
    <>
      <div className='rounded-[40px] py-2 bg-[#fff] w-auto mx-[18.5rem]'> {/* using fixed */}
        <div className='flex items-center'>
          <Link href='/' legacyBehavior>
            <Image className=' cursor-pointer' src={Logo} alt='logo' width={200} />
          </Link>

          <div className='hidden xl:flex'>
            <NavBar />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
