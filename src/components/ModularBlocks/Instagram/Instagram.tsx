import React, { useEffect } from "react"

import { InstagramModule } from "../../../models/modules"

interface Props extends InstagramModule {}

const defaultProps = {}

const Instagram: React.FC<Props> = props => {
  // console.log("Instagram: ", props)

  useEffect(() => {
    const win: any = window
    win.instgrm?.Embeds?.process()
  }, [])

  return (
    <section className="instagram hide-for-print">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell xlarge-2 show-for-xlarge" />
          <div
            className="cell medium-8 xlarge-7"
            style={{ position: "relative" }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={props.url}
            />
          </div>
          <div className="cell medium-4 xlarge-3" />
        </div>
      </div>
    </section>
  )
}

Instagram.defaultProps = defaultProps

export default Instagram
