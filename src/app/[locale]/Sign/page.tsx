import Link from 'next/link'
import React from 'react'

const LogPage = () => {
  return (
    <>
      <div className='flex items-center gap-3'>
        <Link href="/" className='border border-[#1a5276] px-6 py-[10px] rounded-[30px] text-[15px] hover:bg-[#edf2f4]'>
          Register
        </Link>
        <Link href='/' className='border border-[#1a5276] px-6 py-[10px] rounded-[30px] text-[15px] bg-[#1a5276] text-[#fff] hover:bg-[#2c6081]'>
          Login
        </Link>
      </div>
    </>
  )
}

export default LogPage
