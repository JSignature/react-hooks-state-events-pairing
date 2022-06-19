import React from 'react'

const Comments = ({ comments, toggleState }) => {
  return (
    <div>
      {toggleState ? (
        <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
          <h1>{comments.length} Comments</h1>

          {comments.map(comment => (
            <div key={comment.id}>
              <h3>{comment.user}</h3>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        ' '
      )}
    </div>
  )
}

export default Comments
