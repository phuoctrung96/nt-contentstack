import React from "react"
import Flickity from "react-flickity-component"

const BannerSlide = React.lazy(() => import("./BannerSlide"))
const BannerStatic = React.lazy(() => import("./BannerStatic"))

import { flickityBannerOptions } from "../../../utils/constants"
import { BannerModule } from "../../../models/modules"

interface Props extends BannerModule {
  heading?: string
  subheading?: string
  eagerLoad?: boolean
  cssClass?: string
}

const defaultProps = {}

const BannerCarousel: React.FC<Props> = props => {
  // console.log("BannerCarousel: ", props)
  if (!props.banners) return null

  const bannerSize = props.small_height ? "small-height" : ""

  return (
    <React.Suspense fallback="Loading...">
      <section
        className={`bannerCarousel ${props.cssClass || ""} ${bannerSize}`}
      >
        {props.banners.length <= 1 && (
          <div className="banner__slider">
            {props.banners?.map((banner, index) => {
              return (
                <BannerSlide
                  key={`slide_${index}`}
                  {...banner}
                  heading={props.heading}
                  subheading={props.subheading}
                  eagerLoad={props.eagerLoad}
                />
              )
            })}
          </div>
        )}

        {props.banners.length > 1 && (
          <Flickity
            className="banner__slider flickity--fade"
            options={flickityBannerOptions}
          >
            {props.banners?.map((banner, index) => {
              return (
                <BannerSlide
                  key={`slide_${index}`}
                  {...banner}
                  heading={props.heading}
                  subheading={props.subheading}
                  eagerLoad={props.eagerLoad}
                  hideContent={!props.rotate_headings}
                />
              )
            })}

            {/* static content */}
            {!props.rotate_headings && (
              <BannerStatic
                {...props.banners[0]}
                heading={props.heading}
                subheading={props.subheading}
              />
            )}
          </Flickity>
        )}
      </section>
    </React.Suspense>
  )
}

BannerCarousel.defaultProps = defaultProps

export default BannerCarousel
