import React, { useState, useEffect } from "react"
import ReactPlayer from "react-player/lazy"

import { getYouTubeId } from "../../../utils/utils"
import { VideoModel } from "../../../models/components"

interface Props extends VideoModel {
  autoPlay?: boolean
}

const defaultProps = {}

const Video: React.FC<Props> = props => {
  // console.log("Video: ", props)
  if (!props.url) return null

  // state
  const [mute, setMute] = useState(false)
  const [showVideo, setShowVideo] = useState(props.autoPlay || false)

  // effects
  useEffect(() => {
    if (props.autoPlay) setShowVideo(true)
  }, [props.autoPlay])

  // events
  const toggleMute = () => {
    setMute(!mute)
  }

  const playVideo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowVideo(true)
  }

  // get the video ID
  const videoId = getYouTubeId(props.url)

  return (
    <>
      <a
        href={props.url}
        className="video__link ratio--16-9 conversion-link"
        target="_blank"
        rel="noopener"
        onClick={playVideo}
      >
        <div className="video__linkInner ratio--16-9">
          <img
            className="video__image"
            sizes="auto"
            alt={props.heading}
            srcSet={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg 320w,https://img.youtube.com/vi/${videoId}/hqdefault.jpg 480w,https://img.youtube.com/vi/${videoId}/maxresdefault.jpg 1280w`}
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
          />

          <div className="video__content">
            <div className="media-control">
              <i className="svg-icon svg-play icon-white" />
            </div>

            {props.heading && <h2 className="video__title">{props.heading}</h2>}
          </div>
        </div>
      </a>

      {showVideo && (
        <div className="video__player">
          <ReactPlayer
            url={props.url}
            width="100%"
            height="100%"
            playing={true}
            controls={true}
            muted={mute}
          />
        </div>
      )}

      {!showVideo && (
        <button
          className="video__mute ratio--1-1"
          title={mute ? "Mute (m)" : "Unmute (m)"}
          aria-label={mute ? "Mute (m)" : "Unmute (m)"}
          onClick={toggleMute}
        >
          {mute ? (
            <i className="svg-icon icon-white svg-volume-slash" />
          ) : (
            <i className="svg-icon icon-white svg-volume-on" />
          )}
        </button>
      )}
    </>
  )
}

Video.defaultProps = defaultProps

export default Video
