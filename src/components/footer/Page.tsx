'use client'

import Image from 'next/image'
import logo from '../../../public/11.png'
import linkedin from '../../../public/icon/linkedin.png'
import facebook from '../../../public/icon/facebook.png'
import telegram from '../../../public/icon/telegram1.png'
import instagram from '../../../public/icon/instagram.png'
import tiktok from '../../../public/icon/tik-tok1.png'
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

import CountUp from 'react-countup'
import Link from 'next/link'

const num = 10370;

const Footer = () => {
  return (
    <>
      <div className='bg-[#2d394b] w-full h-auto font-accent grid grid-cols-2 mx-auto px-[19rem] pt-20 pb-10'>
        <div className='grid gap-y-4'>
          <Image className='w-[5rem] object-cover' src={logo} alt='' />
          <p className='text-[#fff] pt-2 w-[20rem]'>Astro HR is Cambodia's #1 Job Matching Service Specialized in IT.</p>
          <div className='bg-[#fff] w-[5rem]'>
            <div className='w-[10rem] flex items-center gap-[3px]'>
              <Image className='w-5 bg-[#0078b6] py-1' src={linkedin} alt='' />
              <p className='bg-[#0078B6] px-1 py-[1.2px] text-[#fff]'>Follow</p>
            </div>
            <CountUp className='pl-3' end={num} duration={4} delay={2} />
          </div>

          <div> {/* social icon */}
            <div className='flex items-center gap-4'>
              <Link href='/' className='bg-[#505967] px-3 py-3 rounded-full'>
                <Image className='w-8' src={linkedin} alt='' />
              </Link>
              <Link href='/' className='bg-[#505967] px-[0.85rem] py-[0.85rem] rounded-full'>
                <Image className='w-7' src={facebook} alt='' />
              </Link>
              <Link href='/' className='bg-[#505967] px-4 py-4 rounded-full'>
                <Image className='w-6' src={instagram} alt='' />
              </Link>
              <Link href='/' className='bg-[#505967] px-3 py-3 rounded-full'>
                <Image className='w-8' src={telegram} alt='' />
              </Link>
              <Link href='/' className='bg-[#505967] px-4 py-4 rounded-full'>
                <Image className='w-6' src={tiktok} alt='' />
              </Link>
            </div>

            <div className='pt-10'>
              <Link href='/' className='font-primary underline'>
                <p className='text-[#fff]'>Privacy Policy</p>
              </Link>

              <p className='text-[#fff] mt-4'>2025 Astro HR ( Cambodia ) Co., Ltd. All Rights Reserved</p>
            </div>
          </div>
        </div>

        <div>
          <div className='text-[#fff] grid gap-y-4'>
            <p className='text-[1.3rem] font-bold'>Our Contacts</p>
            <div className='flex gap-7'>
              <FaLocationDot className='text-[1.5rem] mt-1' />
              <p className='text-[1.1rem]'>#12, Street 2001, Phum Paprak Khang Tboung, Songkat Kakab, Khan Porsenchey, Phnom Penh, Cambodia</p>
            </div>
            <div className='flex items-center gap-7'>
              <FaPhone className='text-[1.3rem]' />
                <p>+017540260</p>
            </div>
            <div className='flex items-center gap-7'>
              <IoIosMail className='text-[1.5rem]' />
              <p>rongsokheng148@gmail.com</p>
            </div>
            <div className='flex gap-7'>
              <FaRegClock className='mt-1 text-[1.3rem]' />
              <div>
                <p>Moday -- Friday</p>
                <p>8:00am - 6:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
