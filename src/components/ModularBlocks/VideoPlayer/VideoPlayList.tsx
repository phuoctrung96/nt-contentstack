import React from "react"
import Flickity from "react-flickity-component"

import { getYouTubeId } from "../../../utils/utils"
import { FLICKITY_ARROW } from "../../../utils/constants"
import { VideoModel } from "../../../models/components"

interface Props {
  playlist: VideoModel[]
  setActiveVideo: (x: number) => void
  setAutoPlay: (x: boolean) => void
}

const defaultProps = {}

const VideoPlayList: React.FC<Props> = props => {
  // console.log("VideoPlayList: ", props)

  const flickityOptions = {
    cellSelector: ".playlist__item",
    groupCells: true,
    cellAlign: "left",
    percentPosition: true,
    dragThreshold: 40,
    adaptiveHeight: false,
    setGallerySize: true,
    selectedAttraction: 0.04,
    friction: 0.4,
    pageDots: false,
    arrowShape: FLICKITY_ARROW,
  }

  // events
  const selectVideo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number
  ) => {
    e.preventDefault()
    props.setActiveVideo(index)
    props.setAutoPlay(true)
  }

  return (
    <div className="grid-x grid-margin-x align-center">
      <div className="cell medium-10">
        <Flickity className="video__playlist" options={flickityOptions}>
          {props.playlist.map((video, index) => {
            const videoId = getYouTubeId(video.url)

            return (
              <div key={`video_${index}`} className="playlist__item">
                <a
                  className="playlist__link"
                  href={video.url}
                  target="_blank"
                  onClick={e => selectVideo(e, index)}
                >
                  <div className="video__linkInner ratio--16-9">
                    <img
                      className="video__image"
                      sizes="auto"
                      alt={video.heading}
                      srcSet={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg 320w,https://img.youtube.com/vi/${videoId}/hqdefault.jpg 480w,https://img.youtube.com/vi/${videoId}/maxresdefault.jpg 1280w`}
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    />

                    <div className="video__content">
                      <div className="media-control ratio--1-1">
                        <i className="svg-icon svg-play icon-white"></i>
                      </div>
                    </div>
                  </div>

                  {video.heading && (
                    <h4 className="video__title">{video.heading}</h4>
                  )}
                </a>
              </div>
            )
          })}
        </Flickity>
      </div>
    </div>
  )
}

VideoPlayList.defaultProps = defaultProps

export default VideoPlayList
