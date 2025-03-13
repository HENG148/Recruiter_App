'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image from '../../public/image.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineQrCode2 } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft  } from "react-icons/md";

// import { FaBagShopping } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

type JobData = {
  [category: string]: {
    title: string;
    id: string;
    salary: string;
    skill: string[];
    image: string;
  }[];
}

const jobs: JobData = {
  software: [
    { title: 'Software Developer', id: 'JB-0001', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.ing' }
  ],
  fullStack: [
    { title: 'Software Developer', id: 'JB-0001', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.ing' }
  ],
  webDeveloper: [
    { title: 'Software Developer', id: 'JB-0001', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.ing' }
  ],
  frontEnd: [
    { title: 'Software Developer', id: 'JB-0001', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.ing' }
  ],
  backEnd: [
    { title: 'Software Developer', id: 'JB-0001', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.ing' }
  ],
}

const JobList = () => {

  const [dayCount, setDayCount] = useState<number>(1);
  useEffect(() => {
    const storedStartDate = localStorage.getItem('startDate');
    let startDate: Date;
    if (storedStartDate) {
      startDate = new Date(storedStartDate);
    } else {
      startDate = new Date();
      localStorage.setItem('startDate', startDate.toISOString());
    }

    // calculate the number of days elapsed
    const calculateDays = () => {
      const currentDate = new Date();
      const timeDiff = currentDate.getTime() - startDate.getTime();
      const daysElapsed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
      setDayCount(daysElapsed)
    };
    calculateDays();
    const interval = setInterval(calculateDays, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-left'
          }}
        >
          <SwiperSlide className="tyo justify-items-center">
            <div className="uio">
              <Image src={image} width={240} className="rounded-[14px]" alt="Job Image" />
              <div className="relative top-[-2.4rem] mb-[-0.9rem]">
                <div className="flex gap-2 pb-3 pl-2">
                  {['DevOps', 'CI / CD', 'Git'].map((skill) => (
                    <p className="asx px-3 py-1" key={skill}>{skill}</p>
                  ))}
                </div>
                <div className="leading-[20px] mb-1">
                  <p className=" font-extrabold text-main">Software Developer</p>
                  <p className="text-[15px] font-semibold text-main">JB-0001</p>
                  <p className="text-[16px] font-bold">$2500 ~ $3500</p>
                </div>
                <div className="grid gap-y-[1px]">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="qc flex items-center">
                      <FaRegCalendarAlt />
                      <p className="yu">{dayCount} days ago</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineQrCode2 className="text-[17px]" />
                  <div className="w-[1px] h-4 bg-default"></div>
                  <IoPeople className="text-[17[px]" />
                  <p className="text-[14px]">1 pax</p>
                  <div className="flex gap-2 text-[14px] ml-2">
                    <Link href='job/details'>
                      <button name="button" className="px-[11px] py-[3px] bg-[#e1e1e1] rounded-[15px]" type="submit">Detail</button>
                    </Link>
                    <button name="button" className="px-[11px] py-[3px] bg-main rounded-[15px] text-[#fff]" type="submit">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="tyo justify-items-center">
            <div className="uio">
              <Image src={image} width={240} className="rounded-[14px]" alt="Job Image" />
              <div className="relative top-[-2.4rem] mb-[-0.9rem]">
                <div className="flex gap-2 pb-3 pl-2">
                  {['DevOps', 'CI / CD', 'Git'].map((skill) => (
                    <p className="asx px-3 py-1" key={skill}>{skill}</p>
                  ))}
                </div>
                <div className="leading-[20px] mb-1">
                  <p className=" font-extrabold text-main">Full Stack Developer</p>
                  <p className="text-[15px] font-semibold text-main">JB-0002</p>
                  <p className="text-[16px] font-bold">$1500 ~ $3200</p>
                </div>
                <div className="grid gap-y-[1px]">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="qc flex items-center">
                      <FaRegCalendarAlt />
                      <p className="yu">{dayCount} days ago</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineQrCode2 className="text-[17px]" />
                  <div className="w-[1px] h-4 bg-default"></div>
                  <IoPeople className="text-[17[px]" />
                  <p className="text-[14px]">1 pax</p>
                  <div className="flex gap-2 text-[14px] ml-2">
                    <button name="button" className="px-[11px] py-[3px] bg-[#e1e1e1] rounded-[15px]" type="submit">Detail</button>
                    <button name="button" className="px-[11px] py-[3px] bg-main rounded-[15px] text-[#fff]" type="submit">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="tyo justify-items-center">
            <div className="uio">
              <Image src={image} width={240} className="rounded-[14px]" alt="Job Image" />
              <div className="relative top-[-2.4rem] mb-[-0.9rem]">
                <div className="flex gap-2 pb-3 pl-2">
                  {['DevOps', 'CI / CD', 'Git'].map((skill) => (
                    <p className="asx px-3 py-1" key={skill}>{skill}</p>
                  ))}
                </div>
                <div className="leading-[20px] mb-1">
                  <p className=" font-extrabold text-main">Web Developer</p>
                  <p className="text-[15px] font-semibold text-main">JB-0003</p>
                  <p className="text-[16px] font-bold">$500 ~ $600</p>
                </div>
                <div className="grid gap-y-[1px]">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="qc flex items-center">
                      <FaRegCalendarAlt />
                      <p className="yu">{dayCount} days ago</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineQrCode2 className="text-[17px]" />
                  <div className="w-[1px] h-4 bg-default"></div>
                  <IoPeople className="text-[17[px]" />
                  <p className="text-[14px]">1 pax</p>
                  <div className="flex gap-2 text-[14px] ml-2">
                    <button name="button" className="px-[11px] py-[3px] bg-[#e1e1e1] rounded-[15px]" type="submit">Detail</button>
                    <button name="button" className="px-[11px] py-[3px] bg-main rounded-[15px] text-[#fff]" type="submit">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="tyo justify-items-center">
            <div className="uio">
              <Image src={image} width={240} className="rounded-[14px]" alt="Job Image" />
              <div className="relative top-[-2.4rem] mb-[-0.9rem]">
                <div className="flex gap-2 pb-3 pl-2">
                  {['DevOps', 'CI / CD', 'Git'].map((skill) => (
                    <p className="asx px-3 py-1" key={skill}>{skill}</p>
                  ))}
                </div>
                <div className="leading-[20px] mb-1">
                  <p className=" font-extrabold text-main">Front-end Developer</p>
                  <p className="text-[15px] font-semibold text-main">JB-0004</p>
                  <p className="text-[16px] font-bold">$200 ~ $300</p>
                </div>
                <div className="grid gap-y-[1px]">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="qc flex items-center">
                      <FaRegCalendarAlt />
                      <p className="yu">{dayCount} days ago</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineQrCode2 className="text-[17px]" />
                  <div className="w-[1px] h-4 bg-default"></div>
                  <IoPeople className="text-[17[px]" />
                  <p className="text-[14px]">1 pax</p>
                  <div className="flex gap-2 text-[14px] ml-2">
                    <button name="button" className="px-[11px] py-[3px] bg-[#e1e1e1] rounded-[15px]" type="submit">Detail</button>
                    <button name="button" className="px-[11px] py-[3px] bg-main rounded-[15px] text-[#fff]" type="submit">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="tyo justify-items-center">
            <div className="uio">
              <Image src={image} width={240} className="rounded-[14px]" alt="Job Image" />
              <div className="relative top-[-2.4rem] mb-[-0.9rem]">
                <div className="flex gap-2 pb-3 pl-2">
                  {['DevOps', 'CI / CD', 'Git'].map((skill) => (
                    <p className="asx px-3 py-1" key={skill}>{skill}</p>
                  ))}
                </div>
                <div className="leading-[20px] mb-1">
                  <p className=" font-extrabold text-main">Back-end Developer</p>
                  <p className="text-[15px] font-semibold text-main">JB-0005</p>
                  <p className="text-[16px] font-bold">$250 ~ $350</p>
                </div>
                <div className="grid gap-y-[1px]">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="qc flex items-center">
                      <FaRegCalendarAlt />
                      <p className="yu">{dayCount} days ago</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <MdOutlineQrCode2 className="text-[17px]" />
                  <div className="w-[1px] h-4 bg-default"></div>
                  <IoPeople className="text-[17[px]" />
                  <p className="text-[14px]">1 pax</p>
                  <div className="flex gap-2 text-[14px] ml-2">
                    <button name="button" className="px-[11px] py-[3px] bg-[#e1e1e1] rounded-[15px]" type="submit">Detail</button>
                    <button name="button" className="px-[11px] py-[3px] bg-main rounded-[15px] text-[#fff]" type="submit">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <div className="swiper-button-prev">
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="swiper-button-next">
            <MdOutlineKeyboardArrowLeft />
          </div>
        </Swiper>
      </div>
    </>
  )
}

export default JobList
