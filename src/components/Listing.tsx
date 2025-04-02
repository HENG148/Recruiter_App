'use client'

import React, { useEffect } from 'react'
import { useState } from 'react'

interface Job {
  id: number;
  title: string;
  category: string;
  salary: string;
  location: string;
}

const jobCategories = ["All", "Internship", "Junior Level", "Medium Level", "Senior Level", "Manager"];

const Listing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`/api/jobs?category=${selectedCategory}`)
    .then((res) => res.json())
    .then((data) => setJobs(data));
  }, [selectedCategory])
  return (
    <>
      <div className='p-4'>
        <div className='flex gap-4 mb-4'>
          {jobCategories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`border px-4 py-2 rounded-md ${selectedCategory === cat ? 'bg-blue-500 text-[#fff]' : "bg-[#fff] text-[#000]  border-[#757575]"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-3 gap-4'>
          {jobs.length > 0 ? (
            jobs.map((job: any) => (
              <div key={job.id} className='border p-4 rounded-md shadow-md'>
                <h3 className='font-bold'>{job.title}</h3>
                <p>{job.salary}</p>
                <p>{job.location}</p>
              </div>
            ))
          ) : (
              <p>No jobs available for this category</p>
          )}
        </div>
      </div>
    </>
  )
}

export default Listing
