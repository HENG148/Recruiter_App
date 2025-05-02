import Image from 'next/image'
import React from 'react'
import image from '../../../../public/stats1.jpg'

const Abouts:React.FC = () => {
  return (
    <>
      <div className='font-accent'>
        <div className='bg-main w-full h-auto px-[19rem]'>
          <div className='text-[#fff] leading-[40px] pt-[11.5rem]'>
            <p className='font-khmer text-[2.5rem] pb-2'>អំពីយើង</p>
            <p className='text-[1.4rem]'>About us</p>
          </div>
        </div>

        <div className='mx-[19rem] mt-8'>
          <div>
            <div className=' justify-items-center'>
              <p className='text-[#000] tts'>WHO WE ARE</p>
            </div>

            <div>
              <h2 className='text-[1.4rem] font-bold mb-4 mt-14'>About Astro HR</h2>
              <div className='grid grid-cols-2 gap-10'>
                <div>
                  <p className='pb-4'>Our team adheres to seven orginal core values: Be Respectful, Be Clear, Be Truthful, Be Humble, Be Lead by example, Be the only ONE and PDCA Quality Cycle to ensure we deliver what we promise to ourselves and our customers. With these six core values in mind, every member of the company has proven to our customers that WE CAN DO IT!</p>
                  <p className='pb-4'>Astro HR is Cambodia's #1 Job Matching Service Specialized in IT. Currently, we offer IT Recruitment Service and Software-Engineer-as-a-Service Solutions. These two services serve our client's current needs and help us collect valuable data and generate revenue to sustain an develop our bussiness. By prioritizing data collection, we enhance our matching algorithms for accurate connections between companies and tech talents. We offer the company a free online consultantm access to high-skill IT specialist, faster and more professional, and up to 70% cost saving compared to tranditional recruitment.</p>
                  <p>Additionally, we've created a powerful PWA and mobile app with stunning UI/UX combined with advance AI technology to bring new tastes to users. Jobseekers just upload their CV, quickly match them with relevant JDs, and then swipe left or right to apply or pass the job! <br />Visit us: https://web.facebook.com/rong.sokheng.96/</p>
                  
                </div>
                <div>
                  <Image src={image} className='w-auto' alt='' />
                </div>
              </div>
            </div>

            <div>
              <p className='text-[1.8rem] tts pb-10'>OUR TEAM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Abouts
