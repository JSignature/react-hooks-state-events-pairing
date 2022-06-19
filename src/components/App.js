import video from '../data/video.js'
import { React, useState } from 'react'
import Comments from './Comments'
import Likes from './Likes'
import Views from './Views'
function App() {
  const [youTubeVid, setYouTubeVid] = useState(video)

  console.log("Here's your data:", video.embedUrl)

  let [vidLikes, setVidLikes] = useState(video.upvotes)
  let [vidDownLikes, setVidDownLikes] = useState(video.downvotes)
  const [toggleState, setToggleState] = useState(false)

  function handleToggle() {
    setToggleState(!toggleState)
  }

  function handleUpVotes() {
    setVidLikes((vidLikes += 1))
  }

  function handleDownVotes() {
    setVidDownLikes((vidDownLikes += 1))
  }
  return (
    <>
      <div className="App" style={{ marginTop: 30 }}>
        <iframe
          width="919"
          height="525"
          src={youTubeVid.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={youTubeVid.title}
        />

        <h1>{youTubeVid.title}</h1>
      </div>
      <Views views={youTubeVid.views} createdAt={video.createdAt} />
      <Likes
        upvotes={vidLikes}
        downvotes={vidDownLikes}
        handleUpVotes={handleUpVotes}
        handleDownVotes={handleDownVotes}
        handleToggle={handleToggle}
        toggleState={toggleState}
      />
      <Comments comments={youTubeVid.comments} toggleState={toggleState} />
    </>
  )
}

export default App
