'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image from '../../public/image.png'
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineQrCode2, MdShoppingBag, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoPeople, IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

type Job = {
  title: string;
  name: string;
  id: string;
  salary: string;
  skill: string[];
  image: string;
  time: string;
  location: string;
};

type JobCategory = {
  [category: string]: Job[];
};

const jobs: JobCategory = {
  software: [
    { title: 'Software Developer',name: 'Software-Developer', id: 'JB-0001', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.png', time: 'Full Time', location: 'Chomkar Morn' }
  ],
  fullStack: [
    { title: 'Full Stack Developer',name: 'FullStack-Developer', id: 'JB-0002', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.png',time: 'Full Time', location: 'Sen Sok' }
  ],
  webDeveloper: [
    { title: 'Web Developer',name: 'Web-Developer', id: 'JB-0003', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.png',time: 'Freelance', location: 'Chbar Orm Pov' }
  ],
  frontEnd: [
    { title: 'Front-end Developer',name: 'FrontEnd-Developer', id: 'JB-0004', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.png',time: 'Part Time', location: 'Toul Tom Pong' }
  ],
  backEnd: [
    { title: 'Back-end Developer',name: 'BackEnd-Developer', id: 'JB-0005', salary: '$2500 -$3500', skill: ['DevOps', 'CI / CD', 'Git'], image: '/job1.png',time: 'Full Time', location: 'Porchentong' }
  ],
};

const JobList: React.FC = () => {
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

    const calculateDays = () => {
      const currentDate = new Date();
      const timeDiff = currentDate.getTime() - startDate.getTime();
      const daysElapsed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;
      setDayCount(daysElapsed);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-accent">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        >
        {Object.entries(jobs).map(([category, jobList]) => (
          jobList.map((job) => (
            <div className="grid grid-cols-4">
              <SwiperSlide
                key={job.id}
                className="justify-items-center pt-6 rounded-[2.5rem] border border-[#adadad] transition-shadow duration-300 ease-in-out"
              > {/*shadow-[0px_5px_15px_rgba(0,0,0,0.25)]*/}
                <div className="uio">
                  <Image src={image} width={240} className="rounded-[14px]" alt="Job Image" />
                  <div className="relative top-[-2.4rem] mb-[-0.9rem]">
                    <div className="flex gap-2 pb-3 pl-2">
                      {job.skill.map((skill) => (
                        <p className="asx px-3 py-1" key={skill}>{skill}</p>
                      ))}
                    </div>
                    <div className="leading-[20px] mb-1">
                      <p className="font-extrabold text-main">{job.title}</p>
                      <p className="text-[15px] font-semibold text-main">{job.id}</p>
                      <p className="text-[16px] font-bold">{job.salary}</p>
                    </div>
                    <div className="grid gap-y-[1px]">
                      <div className="flex items-center gap-x-[0.8rem]">
                        <FaRegCalendarAlt />
                        <p className="yu">{dayCount} days ago</p>
                      </div>
                      <div className="flex items-center gap-x-[0.8rem]">
                        <MdShoppingBag />
                        <p className="yu">Full Time</p>
                      </div>
                      <div className="flex items-center gap-x-[0.8rem]">
                        <IoLocationSharp />
                        <p className="yu">{job.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineQrCode2 className="text-[17px]" />
                      <div className="w-[1px] h-4 bg-default"></div>
                      <IoPeople className="text-[17[px]" />
                      <p className="text-[14px]">1 pax</p>
                      <div className="flex gap-2 text-[14px] ml-2">
                        <Link href={`job/${job.name}`}>
                          <button name="button" className="px-[11px] py-[3px] bg-[#e1e1e1] rounded-[15px]" type="submit">Detail</button>
                        </Link>
                        <button name="button" className="px-[11px] py-[3px] bg-main rounded-[15px] text-[#fff]" type="submit">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))
        ))}
        {/* <div className="swiper-button-prev">
          <MdOutlineKeyboardArrowRight />
        </div>
        <div className="swiper-button-next">
          <MdOutlineKeyboardArrowLeft />
        </div> */}
      </Swiper>
    </div>
  );
};

export default JobList;
