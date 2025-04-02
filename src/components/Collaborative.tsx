'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import wingbank from '../../public/wingbank.png'
import nike from '../../public/002-nike-logos-swoosh-white.png'
import lucky from '../../public/Lucky-Supermarket-Logo-1140x800.png'
import adidas from '../../public/Adidas_logo.png'
import Image from 'next/image';

const Collaborative = () => {
  return (
    <>
      <div className='w-full'>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={5}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className=''>
            <Image src={wingbank} className='w-[14rem] object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={nike} className='w-[14rem] object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={adidas} className='w-[6rem] pt-7 justify-center ml-10 object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={wingbank} className='w-[14rem] object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={wingbank} className='w-[14rem] object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={wingbank} className='w-[14rem] object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={wingbank} className='w-[14rem] object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={wingbank} className='w-[14rem] object-cover' alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={wingbank} className='w-[14rem] object-cover' alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Collaborative
