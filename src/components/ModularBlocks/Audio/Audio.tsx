import React, { useState, useRef } from "react"
import { graphql } from "gatsby"

import { AudioModule } from "../../../models/modules"

import Icon from "../../Icon"
const RichText = React.lazy(() => import("../../RichText"))

interface Props extends AudioModule {}

const defaultProps = {}

const Audio: React.FC<Props> = props => {
  // console.log("Audio: ", props)

  const audio = props.audio ? props.audio[0] : undefined
  if (!audio) return null

  // state
  const [showAudio, setShowAudio] = useState(false)

  // refs
  const audioRef = useRef<HTMLAudioElement>(null)

  // events
  const playAudio = () => {
    setShowAudio(true)
    audioRef.current?.play()
  }

  return (
    <React.Suspense fallback="Loading...">
      <section className="audio">
        <div className="grid-container">
          <div className="grid-x grid-margin-x">
            <div className="cell xlarge-2 show-for-xlarge" />
            <div className="cell medium-8 xlarge-7">
              <figure style={{ position: "relative" }}>
                <button
                  className={`audio__trigger ${showAudio ? "disabled" : ""}`}
                  onClick={playAudio}
                >
                  <div className="audio__play ratio--1-1">
                    <i className="svg-icon svg-play" />
                  </div>
                </button>

                <audio
                  id={`audio--${audio.id}`}
                  className={`audio__player ${showAudio ? "active" : ""}`}
                  controls={true}
                  preload="metadata"
                  ref={audioRef}
                >
                  <source
                    src={audio.asset.url}
                    type={audio.asset.content_type}
                  />
                  Your browser does not support the audio element.
                </audio>

                <figcaption>
                  <h2 className="audio__title">
                    <span className="audio__label">Audio</span>
                    {audio.heading}
                  </h2>
                </figcaption>

                {audio.transcript && (
                  <details>
                    <summary
                      aria-controls={`audio__transcript_content--${audio.id}`}
                      tabIndex={0}
                      aria-expanded="false"
                      className="audio__summary"
                    >
                      View transcript <Icon name="angle-down" color="#1f1f5f" />
                    </summary>
                    <div
                      id={`audio__transcript--${audio.id}`}
                      className="audio__transcript"
                      aria-live="off"
                      aria-atomic="true"
                      aria-relevant="all"
                      tabIndex={0}
                      aria-expanded="false"
                      role="article"
                    >
                      <RichText content={audio.transcript} />
                    </div>
                  </details>
                )}
              </figure>
            </div>
            <div className="cell medium-4 xlarge-3" />
          </div>
        </div>
      </section>
    </React.Suspense>
  )
}

Audio.defaultProps = defaultProps

export default Audio

/******************************************************
	Data
******************************************************/
export const query = graphql`
  fragment AudioFields on Contentstack_audio {
    id
    heading
    asset {
      ...CmsAssetFields
    }
    transcript
    sitecore_id
    internal {
      type
    }
  }
`
