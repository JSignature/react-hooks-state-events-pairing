import video from '../data/video.js'
import { React, useState } from 'react'
import Comments from './Comments'
import Likes from './Likes'
import Views from './Views'
function App() {
  const [youTubeVid, setYouTubeVid] = useState(video)
  // youTubeVid = [youTubeVid, setYouTubeVid] = useState(video.embedUrl)
  console.log("Here's your data:", video.embedUrl)
  // console.log(video.comments)
  let [vidLikes, setVidLikes] = useState(video.upvotes)
  let [vidDownLikes, setVidDownLikes] = useState(video.downvotes)
  console.log(vidLikes)
  console.log(vidDownLikes)

  function handleUpVotes() {
    setVidLikes((vidLikes += 1))
  }

  function handleDownVotes() {
    setVidDownLikes((vidDownLikes += 1))
  }
  return (
    <>
      <div className="App">
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
      />
      <Comments comments={youTubeVid.comments} />
    </>
  )
}

export default App
