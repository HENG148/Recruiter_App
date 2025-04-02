'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import logo from '../../../public/slider.png'

interface SliderProps {
  title: string;
}
const InfoSlider: React.FC<SliderProps> = () => {
  return (
    <div className="w-full">
      <div className=''>
        <Swiper 
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true, dynamicBullets: true, type: 'bullets' }}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className='mb-7'>
            <Image src={logo} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={logo} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={logo} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={logo} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={logo} alt='' />
          </SwiperSlide>
        </Swiper>
        {/* <Image src={logo} alt=''  /> */}
      </div>
    </div>
  )
}

export default InfoSlider;