import React from 'react'

const Comments = ({ comments }) => {
  console.log(comments)
  return (
    <div>
      <h1>{comments.length} Comments</h1>
      {comments.map(comment => (
        <div key={comment.id}>
          <h3>{comment.user}</h3>
          <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments
