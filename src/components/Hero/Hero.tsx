import React from "react"

import BannerCarousel from "../ModularBlocks/BannerCarousel/BannerCarousel"

import { HeroModel } from "../../models/components"

interface Props extends HeroModel {}

const defaultProps = {}

const Hero: React.FC<Props> = props => {
  // console.log("Hero: ", props)
  const banners = props.hero_image?.banners
    ?.map(x => x.banner || {})
    .filter(x => x.image)

  return (
    <BannerCarousel
      banners={banners || []}
      rotate_headings={props.hero_image?.rotate_headings}
      small_height={props.hero_image?.small_height}
      eagerLoad={true}
      cssClass="hero"
      heading={props.heading}
      subheading={props.subheading}
    />
  )
}

Hero.defaultProps = defaultProps

export default Hero
