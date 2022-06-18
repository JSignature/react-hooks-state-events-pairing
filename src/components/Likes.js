import React from 'react'

const Likes = ({ upvotes, downvotes, handleUpVotes, handleDownVotes }) => {
  console.log(downvotes)
  const styleBtn = {
    fontSize: 14,
    textAlign: 'center',
    width: 100,
    height: 30,
    margin: 2,
    color: 'Black',
    alignContent: 'center',
  }

  return (
    <div>
      <button onClick={() => handleUpVotes()} style={styleBtn}>
        {upvotes}{' '}
      </button>
      <button onClick={() => handleDownVotes()} style={styleBtn}>
        {downvotes}{' '}
      </button>
    </div>
  )
}

export default Likes
