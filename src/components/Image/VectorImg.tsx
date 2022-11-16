import React, { CSSProperties } from "react"

import { CmsImage } from "../../models/common"

interface VectorImgProps {
  image?: CmsImage | undefined
  height?: number
  maxHeight?: number
  objectFit?: CSSProperties["objectFit"]
  altText?: string
  cssClass?: string
  style?: any
}

const defaultProps = {
  height: undefined,
  maxHeight: undefined,
  objectFit: undefined,
  altText: undefined,
  cssClass: "",
  style: null,
}

export const VectorImg: React.FC<VectorImgProps> = props => {
  if (!props.image) return null

  let height = props.image?.dimension?.height || 0
  let width = props.image?.dimension?.width || 0

  if (props.maxHeight && height > props.maxHeight) {
    const scale = width / height
    height = props.maxHeight
    width = height * scale
  }

  if (props.height) {
    const scale = width / height
    height = props.height
    width = height * scale
  }

  return (
    <img
      src={props.image.url}
      alt={props.image.description}
      width={width}
      height={height}
      style={props.style}
      className={props.cssClass}
    />
  )
}

VectorImg.defaultProps = defaultProps

export default VectorImg
