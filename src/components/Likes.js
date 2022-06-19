import { React, useState } from 'react'

const Likes = ({
  upvotes,
  downvotes,
  handleUpVotes,
  handleDownVotes,
  handleToggle,
  toggleState,
}) => {
  console.log(downvotes)
  const styleBtn = {
    fontSize: 16,
    textAlign: 'center',
    width: 100,
    height: 30,
    margin: 2,
    color: 'Black',
    alignContent: 'center',
  }

  return (
    <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
      <button onClick={() => handleUpVotes()} style={styleBtn}>
        {upvotes}
        {'👍 '}
      </button>
      <button onClick={() => handleDownVotes()} style={styleBtn}>
        {downvotes}
        {'👎 '}
      </button>{' '}
      <div>
        <button onClick={() => handleToggle()} style={{ marginTop: 15 }}>
          {toggleState ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>
    </div>
  )
}

export default Likes
