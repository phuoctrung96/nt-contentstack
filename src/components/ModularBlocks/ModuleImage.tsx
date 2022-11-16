import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { ModularImage } from "../../models/modules"

interface Props extends ModularImage {
  cssClass?: string
}

const defaultProps = {}

const ModuleImage: React.FC<Props> = props => {
  // console.log("ModuleImage: ", props)

  if (props?.file) {
    // Image
    const imageData = getImage(props?.file?.gatsbyImageData)
    if (imageData) {
      return (
        <GatsbyImage
          image={imageData}
          alt={props.file.description || props.file.title || ""}
          className={props.cssClass}
        />
      )
    }
  }

  if (props?.link) {
    if (props.link.url) {
      return (
        <img
          src={props.link.url}
          alt={props.link.alt_text || ""}
          className={props.cssClass}
        />
      )
    }
  }

  return null
}

ModuleImage.defaultProps = defaultProps

export default ModuleImage
