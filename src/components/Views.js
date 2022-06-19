import React from 'react'

const Views = ({ views, createdAt }) => {
  console.log(views)
  return (
    <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
    </div>
  )
}
export default Views
