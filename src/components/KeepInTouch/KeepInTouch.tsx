import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import axios from "axios"

interface Props {}

const defaultProps = {}

const KeepInTouch: React.FC<Props> = () => {
  // graphQL
  const query = useStaticQuery(graphql`
    query {
      banner: contentstackConfig(code_id: { eq: "footerBanner" }) {
        ...ConfigFields
      }
    }
  `)
  const bannerImage = query.banner?.image

  // state
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  // events
  const updateEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  // form data
  // const endpoint = "https://auth.northernterritory.com/"
  // const successUrl = ""
  // const modalSettings = '{"width":600, "height":520, "viewport":767,"modal":1}'
  // const action = "https://travelnt.createsend.com/t/t/s/ikjyht/"

  // events
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // if (validEmail(email)) {
    //   setError(false)

    //   axios({
    //     method: "post",
    //     url: action,
    //     data: {
    //       email: email,
    //     },
    //   })
    //     .then(function (response) {
    //       console.log("response: ", response)
    //       setSuccess(true)
    //     })
    //     .catch(error => console.log("error: ", error))
    // } else setError(true)
    alert("Form Submit")
  }

  const validEmail = (email: string) => {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      email
    )
  }

  return (
    <section className="keepTouch">
      {bannerImage && (
        <GatsbyImage
          image={bannerImage.gatsbyImageData}
          alt={bannerImage.description || bannerImage.title || ""}
          className="keepTouch__bg"
          objectFit="cover"
        />
      )}

      <svg className="keepTouch__top svg--full-width" viewBox="0 0 1920 194">
        <path
          d="M545 4C327 4 101 194 0 194V0h1920v189c-80 0-414-103-539-103-155 0-257 14-402 1C806 71.5 700 4 545 4z"
          fill="#fff"
        />
      </svg>

      <div className="grid-container" style={{ height: "100%" }}>
        <div
          className="grid-x grid-margin-x align-middle"
          style={{ height: "100%" }}
        >
          <div className="cell small-1" />

          {success && (
            <div className="cell small-10 smedium-9 medium-7 large-6 xlarge-5">
              <h2 className="keepTouch__heading">Thank you</h2>
              <div className="keepTouch__content">
                <p className="keepTouch__text">
                  Your details have been submitted. Please check your email and
                  click the link to confirm your subscription.
                </p>
              </div>
            </div>
          )}

          {!success && (
            <div className="cell small-10 smedium-9 medium-7 large-6 xlarge-5">
              {/* heading */}
              <h2 className="keepTouch__heading">Subscribe</h2>

              {/* content */}
              <div className="keepTouch__content">
                <p className="keepTouch__text">
                  Sign up to receive the latest <strong>news</strong>,{" "}
                  <strong>deals</strong> and <strong>travel information</strong>
                  &nbsp;about the Northern Territory.{" "}
                  <small>
                    <strong>
                      <a
                        href="http://web.tourismnt.com.au/cn/afgz8/data_notice"
                        target="_blank"
                        rel="noopener"
                      >
                        Data privacy
                      </a>
                    </strong>
                  </small>
                </p>
              </div>

              {/* form */}
              <form
                className="keepTouch__form"
                data-profile-endpoint="https://auth.northernterritory.com/"
                data-success-url=""
                data-modal-settings='{"width":600, "height":520, "viewport":767,"modal":1}'
                data-action="https://travelnt.createsend.com/t/t/s/ikjyht/"
                onSubmit={onSubmit}
              >
                <label
                  id="keepEmailLabel"
                  htmlFor="keepEmail"
                  className="show-for-sr"
                >
                  Enter your email address:
                </label>
                <input
                  id="keepEmail"
                  name="cm-ikjyht-ikjyht"
                  type="email"
                  placeholder="Your email address"
                  className={`keepTouch__input ${error ? "error" : ""}`}
                  aria-labelledby="keepEmailLabel"
                  required={false}
                  onChange={updateEmail}
                />
                <input
                  id="fieldjuhrii"
                  name="cm-f-juhrii"
                  type="hidden"
                  value="northernterritory.com"
                  className="keepTouch__input"
                />
                <button
                  type="submit"
                  name="keepsubmit"
                  value="submit"
                  className="button keepTouch__submit"
                >
                  Sign up
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

KeepInTouch.defaultProps = defaultProps

export default KeepInTouch
