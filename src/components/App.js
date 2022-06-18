import video from '../data/video.js'
import { React, useState } from 'react'
import Comments from './Comments'
import Likes from './Likes'
import Views from './Views'
function App() {
  // const youTubeVid = ([youTubeVid, setYouTubeVid] = useState(video.embedUrl))
  console.log("Here's your data:", video.embedUrl)
  // console.log(video.comments)

  return (
    <>
      <div className="App">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={video.title}
        />

        <h1>{video.title}</h1>
      </div>
      <Views views={video.views} createdAt={video.createdAt} />
      <Likes upvotes={video.upvotes} downvotes={video.downvotes} />
      <Comments comments={video.comments} />
    </>
  )
}

export default App
