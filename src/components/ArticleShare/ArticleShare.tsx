import React, { useState, useEffect } from "react"

interface Props {
  title: string
  description: string
  image: string
}

const defaultProps = {}

const ArticleShare: React.FC<Props> = props => {
  // console.log("ArticleShare :", props)

  // state
  const [pageUrl, setPageUrl] = useState("")

  // effects
  useEffect(() => {
    setPageUrl(encodeURIComponent(window.location.href))
  }, [])

  const openSocialWindow = (url: string) => {
    var left = (screen.width - 570) / 2,
      top = (screen.height - 570) / 2,
      params =
        "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
        top +
        ",left=" +
        left
    // Setting 'params' to an empty string will launch content in a new tab or window rather than a pop-up.
    // params = "";
    window.open(url, "NewWindow", params)
  }

  return (
    <section className="articleShare">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell xlarge-2 show-for-xlarge" />
          <div className="cell medium-8 xlarge-7">
            <h5 className="share__label">Share this</h5>
            <div className="share__items">
              {/* Facebook */}
              <button
                className="share__link"
                title="Facebook"
                onClick={() =>
                  openSocialWindow(
                    `https://www.facebook.com/sharer.php?u=${pageUrl}`
                  )
                }
              >
                <i className="svg-icon svg-facebook-official icon-white"></i>
              </button>

              {/* Pinterest */}
              <button
                className="share__link"
                title="Pinterest"
                onClick={() =>
                  openSocialWindow(
                    `http://pinterest.com/pin/create/button/?url=${pageUrl}&media=${props.image}&description=${props.description}`
                  )
                }
              >
                <i className="svg-icon svg-pinterest icon-white"></i>
              </button>

              {/* Twitter */}
              <button
                className="share__link"
                title="Twitter"
                onClick={() =>
                  openSocialWindow(
                    `https://twitter.com/intent/tweet?url=${pageUrl}`
                  )
                }
              >
                <i className="svg-icon svg-twitter icon-white"></i>
              </button>

              {/* Email */}
              <a
                href={`mailto:?subject=${props.title}&body=${pageUrl}`}
                className="share__link"
              >
                <i className="svg-icon svg-email icon-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ArticleShare.defaultProps = defaultProps

export default ArticleShare
