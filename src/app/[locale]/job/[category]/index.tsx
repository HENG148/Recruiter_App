import { useRouter } from "next/router"
import { useEffect, useState } from "react";

interface Job {
  id: string;
  title: string;
}

const JobPage = () => {
  const router = useRouter();
  const { page = 1 } = router.query;

  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (page) {
      fetchJobs(Number(page));
    }
  }, [page])

  const fetchJobs = async (page: number) => {
    setLoading(true);

    const fetchedJobs: Job[] = [
      { id: '1', title: 'Software Developer' },
      { id: '2', title: 'System Administrator' },
      { id: '3', title: 'Graphic Designer' },
      { id: '4', title: 'Data Scientist' },
      { id: '5', title: 'Product Manager' },
    ]

    const jobsPerPage = 2;
    const paginatedJobs = fetchedJobs.slice((page - 1) * jobsPerPage, page * jobsPerPage);

    setJobs(paginatedJobs);
    setLoading(false);
  }

  return (
    <div>
      <h1>Jobs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
          <>
            <ul>
              {jobs.length > 0 ? (
                jobs.map((job) => <li key={job.id}>{job.title}</li>)
              ) : (
                  <li>No jobs found</li>
              )}
            </ul>

            <div>
              <button 
                onClick={() => router.push(`/job?page=${Number(page) - 1}`)}
                disabled={Number(page) <= 1}
              >
                Previous
              </button>
              <button
                onClick={() => router.push(`/job?page=${Number(page) + 1}`)}
              >
                Next
              </button>
            </div>
          </>
      )}
    </div>
  )
}

export default JobPage

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const jobData = [
//   { id: 1, title: 'Software Engineer', category: 'it' },
//   { id: 2, title: 'Data Analyst', category: 'it' },
//   { id: 3, title: 'Marketing Manager', category: 'it' },
// ]

// const JobCategoryPage = () => {
//   const router = useRouter();
//   const { category } = router.query;
//   const [jobs, setJobs] = useState<{ id: Number; title: string; category: string }[]>([]);

//   useEffect(() => {
//     if (category) {
//       setJobs(jobData.filter(job => job.category === category));
//     }
//   }, [category]);

//   if(!category) return <p>Loading...</p>
//   return (
//     <div>
//       <h1>Jobs in {category.toString().toUpperCase()}</h1>
//       <ul>
//         {jobs.length > 0 ? (
//           jobs.map(job => <li key={job.id.toString()}>{job.title}</li>)
//         ) : (
//             <li>No jobs found for this category</li>
//         )}
//       </ul>
//     </div>
//   )
// }

// export default JobCategoryPage;