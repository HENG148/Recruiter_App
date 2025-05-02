'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../../../public/11.png'
import linkedin from '../../../public/icon/linkedin.png'
import facebook from '../../../public/icon/facebook.png'
import telegram from '../../../public/icon/telegram1.png'
import instagram from '../../../public/icon/instagram.png'
import tiktok from '../../../public/icon/tik-tok1.png'
import { FaRegCopyright } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div className='font-accent'>
        <div className='bg-main w-full h-auto px-[19rem]'>
          <div className='text-[#fff] leading-[40px] pt-[11.5rem]'>
            <p className='font-khmer text-[2.5rem] pb-2'>ទាក់ទងមកយើងខ្ញុំ</p>
            <p className='text-[1.4rem]'>Contact us</p>
          </div>
        </div>
        <div>
          <div className='grid gap-y-4'>
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

          <div></div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
