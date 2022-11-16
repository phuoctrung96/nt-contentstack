import React from "react"

import GalleryImage from "./GalleryImage"

import { GalleryModule } from "../../../models/modules"

interface Props extends GalleryModule {}

const defaultProps = {}

const GalleryLayout_4: React.FC<Props> = props => {
  // console.log("GalleryLayout_4: ", props)

  return (
    <section className="gallery">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-center">
          {props.images?.map((item, index) => {
            return (
              <div
                key={`img_${index}`}
                className="cell smedium-10 medium-10 large-6"
              >
                <GalleryImage
                  {...item}
                  file={item.image?.imageSize2}
                  link={item.image?.link}
                  cssClass="ratio--37-4340"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

GalleryLayout_4.defaultProps = defaultProps

export default GalleryLayout_4
