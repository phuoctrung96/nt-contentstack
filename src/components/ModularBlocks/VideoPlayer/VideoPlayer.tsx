import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"

const SectionHeader = React.lazy(() => import("../SectionHeader"))
const VideoPlayList = React.lazy(() => import("./VideoPlayList"))
import Video from "./Video"

import { shuffleArray } from "../../../utils/utils_arrays"
import { VideoModel } from "../../../models/components"
import { VideoModule } from "../../../models/modules"

interface Props extends VideoModule {}

const defaultProps = {
  videos: [],
}

const VideoPlayer: React.FC<Props> = props => {
  // console.log("VideoPlayer: ", props)

  // state
  const [videoList, setVideoList] = useState<VideoModel[]>([])
  const [activeVideo, setActiveVideo] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)

  // effects
  useEffect(() => {
    setVideoList(props.random_order ? shuffleArray(props.videos) : props.videos)
  }, [props.videos])

  if (videoList.length === 0) return null

  const playlist = videoList.length > 1

  return (
    <React.Suspense fallback="Loading...">
      <section className={`video ${playlist ? "section--highlighted" : ""}`}>
        <div className="grid-container">
          {(props.heading || props.intro_paragraph) && (
            <SectionHeader
              heading={props.heading}
              intro={props.intro_paragraph}
            />
          )}

          {/* video */}
          <div className="grid-x grid-margin-x align-center">
            <div
              className={`cell ${playlist ? "medium-10" : ""}`}
              style={{ position: "relative" }}
            >
              <Video {...videoList[activeVideo]} autoPlay={autoPlay} />
            </div>
          </div>

          {/* video playlist */}
          {videoList.length > 1 && (
            <VideoPlayList
              playlist={videoList}
              setActiveVideo={setActiveVideo}
              setAutoPlay={setAutoPlay}
            />
          )}
        </div>
      </section>
    </React.Suspense>
  )
}

VideoPlayer.defaultProps = defaultProps

export default VideoPlayer

/******************************************************
	Data
******************************************************/
export const query = graphql`
  fragment VideoFields on Contentstack_video {
    id
    url
    heading
    internal {
      type
    }
  }
`
