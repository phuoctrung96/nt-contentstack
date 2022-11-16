import React from "react"

import GalleryImage from "./GalleryImage"

import { GalleryModule } from "../../../models/modules"

interface Props extends GalleryModule {}

const defaultProps = {}

const GalleryLayout_2: React.FC<Props> = props => {
  // console.log("GalleryLayout_2: ", props)

  return (
    <section className="gallery">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-center">
          {props.images?.map((item, index) => {
            return (
              <div
                key={`img_${index}`}
                className="cell small-10 smedium-6 medium-6"
              >
                <GalleryImage
                  {...item}
                  file={item.image?.imageSize2}
                  link={item.image?.link}
                  cssClass="ratio--3-4"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

GalleryLayout_2.defaultProps = defaultProps

export default GalleryLayout_2
