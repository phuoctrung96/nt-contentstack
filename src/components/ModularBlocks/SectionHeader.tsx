import React from "react"

interface Props {
  heading?: string
  intro?: string
}

const defaultProps = {}

const SectionHeader: React.FC<Props> = props => {
  return (
    <>
      {props.heading && (
        <div className="grid-x grid-margin-x align-center">
          <div className="cell small-10 large-8 xlarge-6 section__heading-wrapper">
            <h2 className="section__heading regional">{props.heading}</h2>
          </div>
        </div>
      )}

      {props.intro && (
        <div className="grid-x grid-margin-x align-center">
          <div className="cell small-10 xlarge-9">
            <p className="section__introduction">{props.intro}</p>
          </div>
        </div>
      )}
    </>
  )
}

SectionHeader.defaultProps = defaultProps

export default SectionHeader
