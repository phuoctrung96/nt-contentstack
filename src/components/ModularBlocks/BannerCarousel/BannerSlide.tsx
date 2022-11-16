import React from "react"

import BannerImage from "./BannerImage"
import ConditionalWrapper from "../../ConditionalWrapper"
const RichText = React.lazy(() => import("../../RichText"))

import { ModularBanner } from "../../../models/modules"

interface Props extends ModularBanner {
  eagerLoad?: boolean
  hideContent?: boolean
}

const defaultProps = {}

const BannerSlide: React.FC<Props> = props => {
  // console.log("BannerSlide: ", props)
  return (
    <React.Suspense fallback="Loading...">
      <div className={`slide banner ${props.darken ? "darken" : ""}`}>
        <BannerImage {...props} />

        {!props.hideContent && (
          <>
            {/* banner content */}
            <div className="grid-container banner__inner">
              <div className="grid-x align-center align-middle banner__content">
                <div className="cell small-11 medium-8 xlarge-9">
                  {/* text */}
                  {(props.heading || props.subheading) && (
                    <h1>
                      {props.heading}
                      {props.subheading && <span>{props.subheading}</span>}
                    </h1>
                  )}

                  {props.content && <RichText content={props.content} />}

                  {/* button */}
                  {props.button_link && props.button_text && (
                    <>
                      <a
                        href={props.button_link}
                        className="button"
                        target={props.button_target || "_self"}
                      >
                        {props.button_text}
                      </a>
                    </>
                  )}

                  {/* other  */}
                  <h3 className="render_h1">{props?.render_h1}</h3>
                  <h3 className="content_override">
                    {props?.content_override}
                  </h3>
                  <h3 className="image_override">{props?.image_override}</h3>
                  <h3 className="video">{props.video}</h3>
                  <h3 className="small">{props.small}</h3>
                </div>
              </div>
            </div>

            {/* caption */}
            <div className="grid-container banner__caption show-for-medium">
              <ConditionalWrapper
                condition={!!props.caption_link}
                wrapper={children => (
                  <a
                    href={props.caption_link}
                    className="banner__captionLink"
                    target={props.caption_target || "_self"}
                  >
                    {children}
                  </a>
                )}
              >
                <>{props.caption}</>
              </ConditionalWrapper>
            </div>
          </>
        )}
      </div>
    </React.Suspense>
  )
}

BannerSlide.defaultProps = defaultProps

export default BannerSlide
