'use client'

import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import seekers from '../../public/ohho.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { seekerData } from '../data/seekerData'

const SeekerVoice:React.FC = () => {
  return (
    <>
      <section className='mt-32 w-full font-accent'>
        <p className='text-[1.6rem] font-bold mb-6'>Seeker's Voices</p>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true, dynamicBullets: true, type: 'bullets', }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1
            }
          }} 
        >
          {seekerData.map((seeker, idx) => (
            <SwiperSlide key={idx}>
              <div className='bg-[#f0f2f4] w-auto py-6 px-6 rounded-[1rem] mb-8'>
                <div className='flex items-center gap-6'>
                  <Image className='w-[5rem] rounded-full h-[5rem] object-cover'
                    src={seeker.image || seekers}
                    alt='seeker' />
                  <div>
                    <p className='text-[1.3rem] font-semibold'>{seeker.name}</p>
                    <p>{seeker.title}</p>
                  </div>
                </div>
                <p className='w-auto pt-3'>{seeker.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  )
}

export default SeekerVoice;
