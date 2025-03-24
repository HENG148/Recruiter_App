import React from 'react'

const JobRelated = ({ params}: {
  params: {
    jobId: string[];
  };
  }) => {
  if (params.jobId?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.jobId[0]} and concept {params.jobId[1]}
      </h1>
    )
  } else if (params.jobId?.length === 1) {
    return <h1>Viewing docs for features {params.jobId[0]}</h1>
  }
  return (
    <div>
      hello
    </div>
  )
}

export default JobRelated
