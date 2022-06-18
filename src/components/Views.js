import React from 'react'

const Views = ({ views, createdAt }) => {
  console.log(views)
  return (
    <>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
    </>
  )
}
export default Views
