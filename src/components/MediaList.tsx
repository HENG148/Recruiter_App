'use client'

import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import image from '../../public/stats1.jpg'
import Image, { StaticImageData } from 'next/image';
import { FaRegCalendarAlt } from "react-icons/fa";

interface MediaItem {
  id: string;
  title: string;
  date: string;
  image: StaticImageData;
}

const mediaData: MediaItem[] = [
  {
    id: '100',
    title: 'Public Innovation Awards',
    date: 'March 01, 2025',
    image: require('../../public/stats1.jpg')
  },
  {
    id: '101',
    title: 'Tech Summit 2025',
    date: 'April 15, 2025',
    image: require('../../public/stats1.jpg')
  },
  {
    id: '102',
    title: 'AI Breakthrough',
    date: 'May 20, 2025',
    image: require('../../public/stats1.jpg')
  },
  {
    id: '103',
    title: 'AI Breakthrough',
    date: 'May 20, 2025',
    image: require('../../public/stats1.jpg')
  },
  {
    id: '104',
    title: 'AI Breakthrough',
    date: 'May 20, 2025',
    image: require('../../public/stats1.jpg')
  },
  {
    id: '105',
    title: 'AI Breakthrough',
    date: 'May 20, 2025',
    image: require('../../public/stats1.jpg')
  },
]

const MediaList: React.FC = () => {
  return (
    <section className='font-accent'>
      <div className='flex items-center justify-between'>
        <p className='text-[1.6rem] font-bold'>Media</p>
        <div className='flex items-center gap-1 transition-all duration-400 hover:gap-[0.6rem]'>
          <Link className='text-[17px]' href='/media'>See more</Link>
          <FaAngleRight className='text-[17px]' />
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true, dynamicBullets: true, type: 'bullets' }}
        modules={[Pagination, Navigation]}
      >
        {mediaData.map((media) => (
          <SwiperSlide key={media.id} className='iim mb-8'>
            <Link href={`/media/${media.id}?title=${encodeURIComponent(media.title)}`}>
              <Image
                className='h-[178.75px] w-[300px] object-cover rounded-[20px]' 
                src={image}
                alt={media.title}
              />
              <div className='flex items-center gap-2 ml-3 mt-1'>
                <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
                <p className='text-[0.95rem]'>{media.date}</p>
              </div>
              <p className='ml-3 text-[1.1rem] font-semibold pt-2'>{media.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default MediaList;

// const MediaList = () => {
//   return (
//     <>
//       <section className='font-accent'>
//         <div className='flex items-center gap-[69.5rem]'>
//           <p className='text-[1.6rem] font-bold'>Media</p>
//           <div className='flex items-center gap-1 transition-all duration-400 hover:w-full hover:gap-[0.6rem] place-items-end right-0'>
//             <Link className='text-[17px]' href='/media'>See more</Link>
//             <FaAngleRight className='text-[17px]' />
//           </div>
//         </div>

//         <div className=''>
//           <Swiper
//             spaceBetween={30}
//             slidesPerView={4}
//             scrollbar={{ draggable: true }}
//             pagination={{ clickable: true, dynamicBullets: true, type: 'bullets', }}
//             modules={[Pagination, Navigation]}
//           >
//             <SwiperSlide className='iim mb-8'>
//               <Link href='/media/Public-Innovation-Awards'>
//                 <Image className='h-[178.75px] w-[300px] object-cover rounded-[20px]' src={image} alt='' />
//                 <div className='flex items-center gap-2 ml-3 mt-1'> {/* detail */}
//                   <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
//                   <p className='text-[0.95rem] font-bold'>March, 01, 2025</p>
//                 </div>
//                 <p className='ml-3 text-[1.1rem] font-semibold pt-2'>Public Innovation Awards</p>
//               </Link>
//             </SwiperSlide>

//             <SwiperSlide className='iim'>
//               <Link href='/media/Public-Innovation-Awards'>
//                 <Image className='h-[178.75px] w-[300px] object-cover rounded-[20px]' src={image} alt='' />
//                 <div className='flex items-center gap-2 ml-3 mt-1'> {/* detail */}
//                   <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
//                   <p className='text-[0.95rem] font-bold'>March, 01, 2025</p>
//                 </div>
//                 <p className='ml-3 text-[1.1rem] font-semibold pt-2'>Public Innovation Awards</p>
//               </Link>
//             </SwiperSlide>

//             <SwiperSlide className='iim'>
//               <Link href='/media/Public-Innovation-Awards'>
//                 <Image className='h-[178.75px] w-[300px] object-cover rounded-[20px]' src={image} alt='' />
//                 <div className='flex items-center gap-2 ml-3 mt-1'> {/* detail */}
//                   <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
//                   <p className='text-[0.95rem] font-bold'>March, 01, 2025</p>
//                 </div>
//                 <p className='ml-3 text-[1.1rem] font-semibold pt-2'>Public Innovation Awards</p>
//               </Link>
//             </SwiperSlide>

//             <SwiperSlide className='iim'>
//               <Link href='/media/Public-Innovation-Awards'>
//                 <Image className='h-[178.75px] w-[300px] object-cover rounded-[20px]' src={image} alt='' />
//                 <div className='flex items-center gap-2 ml-3 mt-1'> {/* detail */}
//                   <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
//                   <p className='text-[0.95rem] font-bold'>March, 01, 2025</p>
//                 </div>
//                 <p className='ml-3 text-[1.1rem] font-semibold pt-2'>Public Innovation Awards</p>
//               </Link>
//             </SwiperSlide>
            
//             <SwiperSlide className='iim'>
//               <Link href='/media/Public-Innovation-Awards'>
//                 <Image className='h-[178.75px] w-[300px] object-cover rounded-[20px]' src={image} alt='' />
//                 <div className='flex items-center gap-2 ml-3 mt-1'> {/* detail */}
//                   <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
//                   <p className='text-[0.95rem] font-bold'>March, 01, 2025</p>
//                 </div>
//                 <p className='ml-3 text-[1.1rem] font-semibold pt-2'>Public Innovation Awards</p>
//               </Link>
//             </SwiperSlide>

//             <SwiperSlide className='iim'>
//               <Link href='/media/Public-Innovation-Awards'>
//                 <Image className='h-[178.75px] w-[300px] object-cover rounded-[20px]' src={image} alt='' />
//                 <div className='flex items-center gap-2 ml-3 mt-1'> {/* detail */}
//                   <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
//                   <p className='text-[0.95rem] font-bold'>March, 01, 2025</p>
//                 </div>
//                 <p className='ml-3 text-[1.1rem] font-semibold pt-2'>Public Innovation Awards</p>
//               </Link>
//             </SwiperSlide>

//             <SwiperSlide className='iim'>
//               <Link href='/media/Public-Innovation-Awards'>
//                 <Image className='h-[178.75px] w-[300px] object-cover rounded-[20px]' src={image} alt='' />
//                 <div className='flex items-center gap-2 ml-3 mt-1'> {/* detail */}
//                   <FaRegCalendarAlt className='text-[#757575] text-[1.3rem]' />
//                   <p className='text-[0.95rem] font-bold'>March, 01, 2025</p>
//                 </div>
//                 <p className='ml-3 text-[1.1rem] font-semibold pt-2'>Public Innovation Awards</p>
//               </Link>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>
//     </>
//   )
// }

// export default MediaList
