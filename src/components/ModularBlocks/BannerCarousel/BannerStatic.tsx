import React, { useState } from "react"

import ConditionalWrapper from "../../ConditionalWrapper"
const RichText = React.lazy(() => import("../../RichText"))

import { getHtmlJson, hasRichTextContent } from "../../../utils/utils_text"
import { ModularBanner } from "../../../models/modules"
import GalleryModal from "../../Modals/GalleryModal"

interface Props extends ModularBanner {}

const defaultProps = {}

const BannerStatic: React.FC<Props> = props => {
  // console.log("BannerStatic: ", props)

  // state
  const [modalOpen, setModalOpen] = useState(false)

  // events
  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const content = hasRichTextContent(props.content) ? props.content : undefined
  const staticHeading =
    props.content_override || content || buildStaticContent(props)

  const galleryLinks = [
    "https://assets.atdw-online.com.au/images/fdbec87e833200ca964e5e10262098a3.jpeg?rect=0%2c210%2c3933%2c2212&w=1170&h=900&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI3MzcwN2I5MzVmYmU3MzBmMjNhZCIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzciLCJhcGlrZXlJZCI6IjU2YjFmNjNmMGNmMjEzYWQyMGRlZGVkOSJ9&fit=max&auto=enhance,compress",
    "https://assets.atdw-online.com.au/images/902b570c1306e569a6f558d65e232d1c.jpeg?rect=0%2c228%2c4272%2c2403&w=1170&h=900&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI3MzcwN2I5MzVmYmU3MzBmMjNhZCIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzciLCJhcGlrZXlJZCI6IjU2YjFmNjNmMGNmMjEzYWQyMGRlZGVkOSJ9&fit=max&auto=enhance,compress",
    "https://assets.atdw-online.com.au/images/a29f0ca8dcd6daff09a63a91f4ff064c.jpeg?rect=0%2c333%2c3466%2c1950&w=1170&h=900&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI3MzcwN2I5MzVmYmU3MzBmMjNhZCIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzciLCJhcGlrZXlJZCI6IjU2YjFmNjNmMGNmMjEzYWQyMGRlZGVkOSJ9&fit=max&auto=enhance,compress",
    "https://assets.atdw-online.com.au/images/ef4b57856bff76aaab966a44f7fe52fc.jpeg?rect=0%2c228%2c4272%2c2403&w=1170&h=900&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI3MzcwN2I5MzVmYmU3MzBmMjNhZCIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzciLCJhcGlrZXlJZCI6IjU2YjFmNjNmMGNmMjEzYWQyMGRlZGVkOSJ9&fit=max&auto=enhance,compress",
    "https://assets.atdw-online.com.au/images/ea697b9f73cdaad710de08b1bfcc748a.jpeg?rect=0%2c228%2c4272%2c2403&w=1170&h=900&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI3MzcwN2I5MzVmYmU3MzBmMjNhZCIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzciLCJhcGlrZXlJZCI6IjU2YjFmNjNmMGNmMjEzYWQyMGRlZGVkOSJ9&fit=max&auto=enhance,compress",
    "https://www.youtube.com/watch?v=l1N_pErOVeA",
  ]
  // const hasGallery = galleryLinks && galleryLinks.length > 0
  const hasGallery = false

  return (
    <React.Suspense fallback="Loading...">
      <>
        <div className="static__wrapper">
          <div className="banner">
            <div className="grid-container banner__inner">
              <div className="grid-x align-center align-middle banner__content">
                <div className="cell small-11 medium-8 xlarge-9">
                  {/* text */}
                  <RichText content={staticHeading} />

                  {/* button */}
                  {props.button_link && props.button_text && (
                    <a
                      href={props.button_link}
                      className="button"
                      target={props.button_target || "_self"}
                    >
                      {props.button_text}
                    </a>
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

            {/* gallery */}
            {hasGallery && (
              <div className="grid-container banner__gallery">
                <button className="gallery__link" onClick={openModal}>
                  <div className="gallery__icon valign-helper">
                    <i className="svg-icon" />
                  </div>
                  <div className="gallery__text show-for-medium">
                    View <em>gallery</em>
                  </div>
                </button>
              </div>
            )}

            {/* caption */}
            {!hasGallery && props.caption && (
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
            )}
          </div>
        </div>

        {hasGallery && (
          <GalleryModal
            modalOpen={modalOpen}
            closeModal={closeModal}
            gallery={galleryLinks}
          />
        )}
      </>
    </React.Suspense>
  )
}

BannerStatic.defaultProps = defaultProps

export default BannerStatic

const buildStaticContent = (props: ModularBanner) => {
  const headingSize = props.render_h1 ? "h1" : "h2"
  let content = `<${headingSize}>${props.heading || ""}<span>${
    props.subheading || ""
  }</span></${headingSize}>`

  return getHtmlJson(content)
}
