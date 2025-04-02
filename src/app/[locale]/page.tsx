import Category from '@/components/Category';
import ExpertList from '@/components/ExpertList';
import JobList from '@/components/JobList';
import InfoSlider from '@/components/slider/Slider';
import { LuSearch } from "react-icons/lu";
// import Link from 'next/link';
import React from 'react'
import StatsCount from '@/components/Achievement';
import SeekerVoice from '@/components/SeekVoice';
import Media from './media/page';
import MediaList from '@/components/MediaList';
import FindJob from '@/components/FindJob';
import {useTranslations} from 'next-intl';
import { Link } from '@/i18n/navigation';
import Achievement from '@/components/Achievement';
import QuickJob from '@/components/QuickJob';
import Collaborative from '@/components/Collaborative';
import Listing from '@/components/Listing';
interface LinkButtonProps {
  href: string;
  text: string;
  className?: string;
}

const LinkButton = ({ href, text, className }: LinkButtonProps) => {
  return (
    <Link href={href} className={`${className} text-default font-medium text-[17px] border-[1px] border-[#149ac5] px-10 py-3 rounded-[10px] hover:bg-accent-HOVER`}>
      {text}
    </Link>
  )
}

interface HomeProps {}

const Home = ({ }: HomeProps) => {
  const t =  useTranslations('HomePage');
  return (
    <main>
      <div className='w-auto mx-[19rem] font-accent mt-7'>
        <div className='justify-items-center grid grid-cols-1 gap-y-1 md:grid-cols-1'>
          <InfoSlider title={t('news-slider')} />
          <Collaborative />
          <LinkButton href='/' text='Create your Professional CV now!' />
        </div>

        <div className='mt-6 pb-5 border-[2px] shadow-[0px_0px_6px_#dedede] border-[#dedede] justify-items-center rounded-[9px] bg-[#fff]'>
          <div className='w-[80rem] ml-9 py-4'>
            <ExpertList className='' />
          </div>
          <div className='w-auto flex items-center justify-items-center'>
            <LuSearch className='absolute ml-[1.3rem] text-[1.2rem]' />
            <input
              type='text'
              placeholder='Search Keyword ......'
              className='w-[77.9rem] h-10 text-[17px] px-12 o'
            />
          </div>
          <div className='mt-4'>
            <Category />
          </div>
        </div>

        {/* <div>
          <Listing />
        </div> */}

        {/* JOB PAGE */}
        <div className='mt-6'>
          <p className='font-semibold text-2xl mb-5'>Job</p>
          <JobList />
        </div>

      </div>
        <div className='bg-[#F0F4F8] w-full px-[19rem] py-10 mt-7'>
          <QuickJob />
        </div>
      <Achievement />

      <div className='mx-[19rem]'>
        <div className=''> {/* seeker voice */}
          <SeekerVoice />
        </div>

        <div> {/* media */}
          <MediaList />
        </div>

        <div className='font-accent'>
          <p className='text-[1.6rem] font-bold'>{t('find-a-job')}</p>
          <FindJob />
        </div>

        <div className='mt-24 mb-10'>
          <div className='justify-items-center grid gap-y-1 relative font-accent'>
            <h3 className='text-[1.8rem] font-bold pb-3'>Feature On</h3>
            <div className="poi"></div>
            <p className="pt-3">
              Astro HR is delighted to be covered by various Media. Our team adheres to six original core values.
            </p>
            <h4 className="justify-items-center">
              (Teamwork, High Ambition, Strong Confident, Be the only ONE, Working Hard, and PDCA Quality Cycle)
            </h4>
            <p className="justify-items-center">
              to ensure we deliver what we promise to ourselves and our customers.
            </p>
          </div>

          <div className=''>
            <Collaborative />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
