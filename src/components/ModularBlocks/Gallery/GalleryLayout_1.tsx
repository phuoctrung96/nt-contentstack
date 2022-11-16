import React from "react"

import GalleryImage from "./GalleryImage"

import { GalleryModule } from "../../../models/modules"

interface Props extends GalleryModule {}

const defaultProps = {}

const GalleryLayout_1: React.FC<Props> = props => {
  // console.log("GalleryLayout_1: ", props)

  return (
    <section className="gallery">
      <div className="grid-container">
        <div className="grid-x grid-margin-x align-center">
          {props.images?.map((item, index) => {
            if (index % 3 === 2)
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

            if (index % 3 === 1) {
              return (
                <div key={`img_${index}`} className="cell large-8">
                  <GalleryImage
                    {...item}
                    file={item.image?.imageSize3}
                    link={item.image?.link}
                    cssClass="ratio--16-9"
                  />
                </div>
              )
            }

            return (
              <div
                key={`img_${index}`}
                className="cell small-10 smedium-8 medium-8 large-4"
              >
                <GalleryImage
                  {...item}
                  file={item.image?.imageSize1}
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

GalleryLayout_1.defaultProps = defaultProps

export default GalleryLayout_1
