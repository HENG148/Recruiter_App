'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import wingbank from '../../public/wingbank.png';
import nike from '../../public/002-nike-logos-swoosh-white.png';
import adidas from '../../public/Adidas_logo.png';

interface images {
  src: StaticImageData;
  alt: string;
  className?: string;
}

const image:images[] = [
  { src: wingbank, alt: 'Wing Bank Logo', className: 'w-[14rem] object-cover' },
  { src: nike, alt: 'Nike Logo', className: 'w-[14rem] object-cover' },
  { src: adidas, alt: 'Adidas Logo', className: 'w-[6rem] pt-7 justify-center ml-10 object-cover' },
  { src: wingbank, alt: 'Lucky Supermarket Logo', className: 'w-[14rem] object-cover' },
  { src: wingbank, alt: 'Wing Bank Logo', className: 'w-[14rem] object-cover' },
  { src: wingbank, alt: 'Wing Bank Logo', className: 'w-[14rem] object-cover' },
  { src: wingbank, alt: 'Wing Bank Logo', className: 'w-[14rem] object-cover' },
  { src: wingbank, alt: 'Wing Bank Logo', className: 'w-[14rem] object-cover' },
  { src: wingbank, alt: 'Wing Bank Logo', className: 'w-[14rem] object-cover' },
  { src: wingbank, alt: 'Wing Bank Logo', className: 'w-[14rem] object-cover' },
  { src: wingbank, alt: 'Wing Bank Logo', className: 'w-[14rem] object-cover' },
]

const Collaborative: React.FC = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={5}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {image.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Image src={img.src} className={img.className} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Collaborative