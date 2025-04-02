'use client'

import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

interface MediaPageProps {
  params: { mediaId: string }
  searchParams: { title?: string };
}

const MediaDetail:React.FC<MediaPageProps> = ({ params }) => {
  const searchParams = useSearchParams();
  const title = searchParams?.get('title') || 'Unknown Media';
  if (!title) {
    notFound();
  }

  // const router = useRouter();
  // const [title, setTitle] = useState('');

  // useEffect(() => {
  //   if (router.query.title) {
  //     setTitle(router.query.title as string)
  //   }
  // }, [router.query]);
  return (
    <>
      <section className='font-accent mt-4'>
        <div className='px-[19.5rem] text-[14px] bg-[#fff] h-6 pt-[2px]'>
          <Breadcrumbs />
        </div>
        <h1>{title}</h1>
      </section>
    </>
  )
}

export default MediaDetail
