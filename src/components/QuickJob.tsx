'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { MdOutlineComputer } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";

interface JobCard {
  id: number;
  title: string;
  width?: string;
  description: string;
}

const jobCards: JobCard[] = [
  {
    id: 1,
    title: 'Quick job matching',
    description:
      'With our huge networks and clients, getting a job, the one you like is just a few steps away.',
  },
  {
    id: 2,
    title: 'Create and export CV for FREE',
    description:
      'With this features you just fill in your background information then you can export the best CVs template which you dream of',
  },
  {
    id: 3,
    title: 'Hosting your resume for FREE',
    description:
      'Use our template or customized resume to beautify your career milestones and many companies will take a look around at you.',
  },
  {
    id: 4,
    title: 'Take online training course for FREE',
    description:
      'The course has cooperated with the best IT training center which will not just only improve your soft skill but it will improve your hard skill as well with real purpose and passion, Do not miss it, Take it now.',
  },
  {
    id: 5,
    title: 'Take the skills test and get the certificate for FREE',
    description:
      'This skill test ensure and reiterates candidate working capability. You can take it for free, if you passed, you will get the certificate from our organiztion as well!',
  },
]

const icons = [
  <MdOutlineComputer key="1" className="text-main text-[3.5rem] pla" />,
  <IoDocumentTextSharp key="2" className="text-main text-[3.5rem] pl-1 pla" />,
  <FaDollarSign key="3" className="text-main text-[3rem] pl-2 pla" />,
  <GiGraduateCap key="4" className="text-main text-[3.5rem] pla" />,
  <FaUserCheck key="5" className="text-main text-[3.5rem] pl-3 pla" />,
];

const QuickJob = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <section className='font-accent grid grid-cols-3 gap-y-6 gap-x-8'>
        {jobCards.map((job, idx) => (
          <div
            key={job.id}
            className='bg-[#fff] flex items-center w-full px-8 h-auto py-6 gap-9 rounded-[10px]'
          >
            <div className='qin'>
              {icons[idx]}
            </div>
            <div className='w-[14rem] pb-2'>
              <p className='font-bold pb-3'>{job.title}</p>
              <p className='text-[14px]'>{job.description}</p>
            </div>
          </div>
        ))}
        <div className="w-full grid items-center">
          <Link href='/' className='text-main flex items-center gap-1 underline decoration-transparent hover:decoration-current transition-all'
            onMouseEnter={() => setOpen(!open)}
            onMouseLeave={() => setOpen(false)}
          >
            Browse our job now!
            <FaLongArrowAltRight className={`transition-transform ${open ? 'translate-x-1' : 'translate-x-0'}`} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default QuickJob
