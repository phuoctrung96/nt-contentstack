import React, { CSSProperties } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import VectorImg from "./VectorImg"

import { CmsImage } from "../../models/common"
import { getAssetAltText } from "../../utils/utils_images"

interface ImageProps {
  image: CmsImage | undefined
  altText?: string
  cssClass?: string
  style?: CSSProperties
  imgStyle?: CSSProperties
  objectFit?: CSSProperties["objectFit"]
  //objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down"
  objectPosition?: CSSProperties["objectPosition"]
}

const defaultProps = {
  cssClass: "",
}

export const Image: React.FC<ImageProps> = props => {
  // console.log("Image: ", props)
  if (!props.image) return null

  // SVG
  if (props.image?.content_type === "image/svg+xml")
    return <VectorImg {...props} />

  // Image
  const imageData = getImage(props.image.gatsbyImageData)

  if (imageData) {
    return (
      <GatsbyImage
        image={imageData}
        alt={getAssetAltText(props.image)}
        style={props.style}
        imgStyle={props.imgStyle}
        className={props.cssClass}
        objectFit={props.objectFit || "contain"}
        objectPosition={props.objectPosition}
      />
    )
  }

  return null
}

Image.defaultProps = defaultProps

export default Image
