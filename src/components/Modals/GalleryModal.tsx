import React from "react"
import ReactPlayer from "react-player/lazy"

import Modal from "react-modal"
import Flickity from "react-flickity-component"

import { flickityGalleryOptions } from "../../utils/constants"

interface Props {
  gallery?: string[]
  modalOpen: boolean
  closeModal: () => void
}

const defaultProps = {}

Modal.setAppElement("#___gatsby")

const GalleryModal: React.FC<Props> = props => {
  // console.log("GalleryModal: ", props)

  const isImage = (url: string) => {
    if (url.indexOf(".jpeg") !== -1) return true
    if (url.indexOf(".jpg") !== -1) return true
    if (url.indexOf(".gif") !== -1) return true
    return false
  }

  if (!props.gallery) return null
  return (
    <Modal
      isOpen={props.modalOpen}
      className="modal__gallery"
      onRequestClose={props.closeModal}
      closeTimeoutMS={200}
    >
      <div className="grid-container">
        <div
          className="grid-x -grid-margin-x align-center-middle"
          style={{ height: "100vh" }}
        >
          <div className="cell" style={{ position: "relative" }}>
            <Flickity
              className="gallery__slider flickity--fade"
              options={flickityGalleryOptions}
            >
              {props.gallery?.map((item, index) => {
                if (isImage(item))
                  return (
                    <img
                      key={`gallery_${index}`}
                      className="slide"
                      data-flickity-lazyload={item}
                    />
                  )

                return (
                  <ReactPlayer
                    key={`gallery_${index}`}
                    url={item}
                    width="100%"
                    height="100%"
                    // playing={true}
                    controls={true}
                    className="slide"
                  />
                )
              })}
            </Flickity>

            {/* close button */}
            <button
              className="modal__close"
              title="Close (Esc)"
              onClick={props.closeModal}
            >
              <span style={{ display: "block", marginTop: -4, marginLeft: 1 }}>
                x
              </span>
              <span className="show-for-sr">close</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

GalleryModal.defaultProps = defaultProps

export default GalleryModal
