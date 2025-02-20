import Marquee from 'react-fast-marquee'
import { SliderID } from './NewsSliderData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css'
import { Autoplay, Pagination } from 'swiper/modules';

interface SliderProps {
  title: string;
}

const NewsSlider: React.FC<SliderProps> = () => {
  
  const slides = SliderID;

  return (
    <>
      <div>
        <Swiper pagination={true} modules={[Pagination, Autoplay]} autoplay={{ delay: 5000 }} className='myswiper'>
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img src={slide.image} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}

export default NewsSlider;
