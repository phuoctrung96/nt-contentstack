import React from "react"

import GalleryImage from "./GalleryImage"

import { GalleryModule } from "../../../models/modules"

interface Props extends GalleryModule {}

const defaultProps = {}

const GalleryLayout_5: React.FC<Props> = props => {
  // console.log("GalleryLayout_5: ", props)

  return (
    <section className="gallery">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-center">
          {props.images?.map((item, index) => {
            return (
              <div key={`img_${index}`} className="cell">
                <GalleryImage
                  {...item}
                  file={item.image?.file}
                  link={item.image?.link}
                  cssClass="ratio--16-9"
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

GalleryLayout_5.defaultProps = defaultProps

export default GalleryLayout_5
