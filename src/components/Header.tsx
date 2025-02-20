import { Container } from "./Container"
import Logo from '../../public/10.png'
import Link from "next/link";
import Image from "next/image";
import NavBar from "./NavBar";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Container>
        <div className="ff flex items-center">
          <Link href='/' legacyBehavior>
            <Image
              src={Logo}
              alt="logo"
              width={200}
            />
          </Link>

          <div className="hidden xl:flex">
            <NavBar />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
