import React from "react"

const GalleryLayout_1 = React.lazy(() => import("./GalleryLayout_1"))
const GalleryLayout_2 = React.lazy(() => import("./GalleryLayout_2"))
const GalleryLayout_3 = React.lazy(() => import("./GalleryLayout_3"))
const GalleryLayout_4 = React.lazy(() => import("./GalleryLayout_4"))
const GalleryLayout_5 = React.lazy(() => import("./GalleryLayout_5"))

import { GalleryModule } from "../../../models/modules"

interface Props extends GalleryModule {}

const defaultProps = {}

const Gallery: React.FC<Props> = props => {
  // console.log("Gallery: ", props)

  if (!props.layout || !props.images?.length) return null

  const imageList = props.images.filter(
    item => item.image?.link?.url || item.image?.file
  )

  return (
    <React.Suspense fallback="Loading...">
      <>
        {props.layout === "Layout 1" && <GalleryLayout_1 images={imageList} />}
        {props.layout === "Layout 2" && <GalleryLayout_2 images={imageList} />}
        {props.layout === "Layout 3" && <GalleryLayout_3 images={imageList} />}
        {props.layout === "Layout 4" && <GalleryLayout_4 images={imageList} />}
        {props.layout === "Layout 5" && <GalleryLayout_5 images={imageList} />}
      </>
    </React.Suspense>
  )
}

Gallery.defaultProps = defaultProps

export default Gallery
