import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'

interface JobPageProps {
  params: { jobId: string}
}

// const DetailPage = async ({ params }: { params: { jobId: string } }) => {\
const DetailPage = async ({params}: JobPageProps) => {
  const {jobId} = await Promise.resolve(params)

  return (
    <>
      <div className='font-accent mt-4'>
        <div className='px-[19.5rem] text-[14px] bg-[#fff] h-6 pt-[2px]'>
          <Breadcrumbs />
        </div>
        <div>
          <p className='text-[1.35rem] text-main font-bold'>{jobId} ( JB-0001 )</p>
          <div className='grid grid-cols-2'>
            <div className='tvn'> {/* Detail */}
              <p>Salary: <span className='ml-1'> $400 - $600</span></p>
              <p>Job Type: <span className='ml-1'> Full Time</span></p>
              <p>Job Level: <span className='ml-1'> Medium Type</span></p>
              <p>Gender: <span className='ml-1'> Male / Female</span></p>
              <p>Age: <span className='ml-1'> 18+</span></p>
              <p>Year of Experience: <span className='ml-1'> 2 Years +</span></p>
              <p>Language: <span className='ml-1'> English - Intermedate</span></p>
            </div>
            <div className='tvn'>
              <p>Categories: <span className='ml-1'> Web Development</span></p>
              <p>Industry: <span className='ml-1'> Tech Company</span></p>
              <p>Location: <span className='ml-1'> Sen Sok, Phnom Penh, Cambodia</span></p>
              <p>Qualification: <span className='ml-1'> Bachelor Degree</span></p>
              <p>Avalible Position: <span className='ml-1'> 2 pax</span></p>
              <p>Required Skill: <span className='ml-1'> Vue.JS, MongoDB</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage
