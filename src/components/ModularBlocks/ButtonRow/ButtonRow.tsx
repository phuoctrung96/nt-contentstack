import React from "react"

const SectionHeader = React.lazy(() => import("../SectionHeader"))

import { getLink } from "../../../utils/utils_links"
import { ButtonRowModule } from "../../../models/modules"

interface Props extends ButtonRowModule {}

const defaultProps = {}

const ButtonRow: React.FC<Props> = props => {
  // console.log("ButtonRow: ", props)
  if (!props.links || props.links.length === 0) return null

  return (
    <React.Suspense fallback="Loading...">
      <section className="buttonRow">
        <div className="grid-container">
          {(props.heading || props.intro_paragraph) && (
            <SectionHeader
              heading={props.heading}
              intro={props.intro_paragraph}
            />
          )}

          <div className="grid-container">
            <div className="grid-x grid-margin-x">
              {props.links?.map((link, index) => {
                const buttonLink = getLink({
                  url: link.url,
                  asset: link.asset,
                  entry: undefined,
                })

                return (
                  <a
                    key={`link_${index}`}
                    className={`button ${
                      link.highlight ? "button--secondary" : ""
                    }`}
                    href={buttonLink.link}
                    title={link.text}
                    target={link.new_window ? "_blank" : buttonLink.target}
                  >
                    [DEV] {link.text}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </React.Suspense>
  )
}

ButtonRow.defaultProps = defaultProps

export default ButtonRow
