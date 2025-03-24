import React from 'react'

interface MediaPageProps {
  params: {mediaId: string}
}

const MediaDetail = async ({ params }: MediaPageProps) => {
  const {mediaId} = await Promise.resolve(params)
  return (
    <div>
      <h1>Hello{mediaId}</h1>
    </div>
  )
}

export default MediaDetail
