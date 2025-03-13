'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css'
import { Autoplay, Pagination } from 'swiper/modules';
import { SliderID } from './SliderID';
import Image from 'next/image';
import logo from '../../../public/slider.png'

interface SliderProps {
  title: string;
}
const InfoSlider: React.FC<SliderProps> = () => {
  const sliders = SliderID;
  return (
    <div className="">
      <div className=''>
        {/* <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 5000 }}>
          {sliders.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img src={slide.image} alt='' />
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 5000 }}>
          {sliders.map((slide, idx) => (
            <SwiperSlide key={idx} className='w-auto'>
              <img src={slide.image} alt='' />
            </SwiperSlide>
          ))}
        </Swiper> */}
        <Image src={logo} alt=''  />
      </div>
    </div>
  )
}

export default InfoSlider;