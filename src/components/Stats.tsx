'use client'

import Image from 'next/image';
import React, { ReactElement} from 'react'
import CountUp from 'react-countup'
import background from '../../public/stats1.jpg'
import { IoBagOutline } from "react-icons/io5";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";

interface StatItem {
  num: number;
  text: string;
  icon: ReactElement;
}

const stats: StatItem[] = [
  { num: 850, text: 'Job Titles', icon: <IoBagOutline className='text-[3.3rem]' /> },
  { num: 850, text: 'Seekers', icon: <BsFillPeopleFill className='text-[3.3rem]' /> },
  { num: 850, text: 'Companies', icon: <FaRegBuilding className='text-[3.3rem]' /> },
]

const StatsCount = () => {
  return (
    <section className='mx-auto font-accent'>
      <div className='w-full relative'>
        <Image className='absolute w-full h-[23rem] object-cover' src={background} alt='Background' />
        <div className='relative text-center pt-20'>
          <p className='text-[1.5rem] font-extrabold mb-10'>Achievement</p>
          <div className='flex justify-center gap-x-[10rem]'>
            {stats.map((stat, idx) => (
              <div key={idx} className='grid justify-items-center'>
                {stat.icon}
                <CountUp end={stat.num} duration={4} delay={2} className='text-3xl xl:text-4xl' />
                <div className='text-[1.15rem] font-extrabold'>{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default StatsCount;