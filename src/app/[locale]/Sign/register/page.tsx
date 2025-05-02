import React from 'react'
import logo from '../../../../../public/8.png'
import findjob from '../../../../../public/find_job_primary.1e1bc76.png'
import Image from 'next/image'
import Link from 'next/link'

const Register = () => {
  return (
    <>
      <main className='font-accent mx-[28rem] mt-24'>
        <div className='grid grid-cols-2 ttzx'>
          <div className='bg-[#EEF5FF] px12'>
            <Image src={logo} width={65} alt='' />
            <p className='text-[1.4rem] font-bold pt-4'>Welcome to <br />Astro HR <span className='text-main'>Job Seeker</span></p>
            <p className='text-[1.05rem]'>Find your dream job now!</p>
            <Image src={findjob} className="h-auto mt-5" alt='' />
          </div>

          <div className='px12'> {/* register form */}
            <div className=''>
              <p className='flex justify-end gap-2 items-center'>Are you already register? 
                <Link href="/Sign/login" className='text-[1.1rem] font-semibold text-main'>Login</Link>
              </p>
              <p className='flex justify-center mt-10 font-bold text-main text-[1.1rem]'>Register</p>
            </div>

            <div> {/* input form */}
              <div className='grid gap-y-6 mt-7'>
                <input 
                  className='plq rounded-3xl pl-6'
                  type='text'
                  placeholder='Full name'
                />
                <input 
                  className='plq rounded-3xl pl-6'
                  type='text'
                  placeholder='Email'
                />
                <input 
                  className='plq rounded-3xl pl-6'
                  type='password'
                  placeholder='Password'
                />
                <input 
                  className='plq rounded-3xl pl-6'
                  type='password'
                  placeholder='Confirm Password'
                />
              </div>

              <div>
                <button className='w-full bac rounded-3xl mt-7'>
                  Register
                </button>
                <div className='mt-12'>
                  <div className='or-text text-[1.05rem] flex items-center text-center text-[#000] font-medium my-5 mx-0'>
                    OR
                  </div>

                  <button className='w-full bg-[#2C7EEA] bac rounded-3xl'>
                    Sign up with Google 
                  </button>
                  <button className='w-full bg-[#147DB7] bac rounded-3xl mt-2'>
                    Sign up with Linkedin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Register
