'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Experience {
  khmerTitle: string;
  englishTitle: string;
  count: number;
}

interface ExpertProps {
  className?: string;
}

const experience: Experience[] = [
  { khmerTitle: 'ការងារមិនត្រូវការបទពិសោធន៏', englishTitle: 'Internship', count: 1 },
  { khmerTitle: 'ការងារត្រូវការបទពិសោធន៏តិចតួច', englishTitle: 'Junior Level', count: 1 },
  { khmerTitle: 'ការងារត្រូវការបទពិសោធន៏មធ្យម', englishTitle: 'Medium Level', count: 1 },
  { khmerTitle: 'ការងារត្រូវការបទពិសោធន៏ច្រើន', englishTitle: 'Senior Level', count: 1 },
  { khmerTitle: 'ការងារផ្នែកគ្រប់គ្រង', englishTitle: 'Manager', count: 1 },
];

const ExpertList: React.FC<ExpertProps> = ({ className = '' }) => {
  return (
    <div className={`font-accent ${className}`}>
      <div className="w-[77.8rem]">
        <Swiper
          spaceBetween={3}
          slidesPerView={4.6}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          scrollbar={{ draggable: true }}
          loop={false}
          className="w-auto"
          modules={[Pagination, Navigation]}
        >
          {experience.map((exp, index) => (
            <SwiperSlide key={index}>
              <div className="tr aa">
                <p className="text-[16.5px] font-medium font-khmer text-main">{exp.khmerTitle}</p>
                <p className="text-[17px] text-main font-bold">{exp.englishTitle}</p>
                <p className="text-[23px] font-semibold text-main">{exp.count}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ExpertList;

// 'use client'

// import { Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { SwiperOptions } from "swiper/types";
// import { useRef, useEffect } from "react";
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

// interface Experience {
//   khmerTitle: string;
//   englishTitle: string;
//   count: number;
// }

// interface ExpertProps {
//   className: string;
// }

// const experience: Experience[] = [
//   { khmerTitle: 'ការងារមិនត្រូវការបទពិសោធន៏', englishTitle: 'Intership', count: 1 },
//   { khmerTitle: 'ការងារត្រូវការបទពិសោធន៏តិចតួច', englishTitle: 'Junior Level', count: 1 },
//   { khmerTitle: 'ការងារត្រូវការបទពិសោធន៏មធ្យម', englishTitle: 'Medium Level', count: 1 },
//   { khmerTitle: 'ការងារត្រូវការបទពិសោធន៏ច្រើន', englishTitle: 'Senior Level', count: 1 },
//   { khmerTitle: 'ការងារផ្នែកគ្រប់គ្រង', englishTitle: 'Manager', count: 1},
// ]

// const ExpertList:React.FC<ExpertProps> = () => {
//   return (
//     <>
//       <div className="">
//         <div className='font-accent'>
//           <div className="w-[77.8rem]">
//             <Swiper
//               // ref={swiperRef}
//               spaceBetween={3}
//               slidesPerView={4.6}
//               navigation={{
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//               }}
//               // pagination={{ clickable: true }}
//               scrollbar={{ draggable: true }}
//               loop={false}
//               // className="w-[78.6rem]"
//               className="w-auto"
//               modules={[Pagination, Navigation]}
//             >
//               <SwiperSlide>
//                 <div className="tr aa">
//                   <p className="text-[16.5px] font-medium font-khmer text-main">ការងារមិនត្រូវការបទពិសោធន៏</p>
//                   <p className="text-[17px] text-main font-bold">Internship</p>
//                   <p className="text-[23px] font-semibold text-main">1</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="tr aa">
//                   <p className="text-[16.5px] font-medium font-khmer text-main">ការងារត្រូវការបទពិសោធន៍តិចតួច</p>
//                   <p className="text-[17px] text-main font-bold">Junior Level</p>
//                   <p className="text-[23px] font-semibold text-main">1</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="tr aa">
//                   <p className="text-[16.5px] font-medium font-khmer text-main">ការងារត្រូវការបទពិសោធន៏មធ្យម</p>
//                   <p className="text-[17px] text-main font-bold">Medium Level</p>
//                   <p className="text-[23px] font-semibold text-main">1</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="tr aa">
//                   <p className="text-[16.5px] font-medium font-khmer text-main">ការងារត្រូវការបទពិសោធន៏ច្រើន</p>
//                   <p className="text-[17px] text-main font-bold">Senior Level</p>
//                   <p className="text-[23px] font-semibold text-main">1</p>
//                 </div>
//               </SwiperSlide>
//               <SwiperSlide>
//                 <div className="tr aa">
//                   <p className="text-[16.5px] font-medium font-khmer text-main">ការងារផ្នែកគ្រប់គ្រង</p>
//                   <p className="text-[17px] text-main font-bold">Manager</p>
//                   <p className="text-[23px] font-semibold text-main">1</p>
//                 </div>
//               </SwiperSlide>
//               <div className="swiper-button-next"></div>
//               <div className="swiper-button-prev"></div>
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ExpertList;
