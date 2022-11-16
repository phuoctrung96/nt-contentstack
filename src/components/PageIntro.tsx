import React from "react"

interface props {
  intro: string
}

const defaultProps = {}

export const PageIntro: React.FC<props> = props => {
  // console.log("PageIntro: ", props)
  if (!props.intro) return null

  return (
    <section className="textArea">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell xlarge-2 show-for-xlarge" />
          <div className="cell medium-8 xlarge-7 text">
            <p className="intro">{props.intro}</p>
          </div>
          <div className="cell medium-4 xlarge-3" />
        </div>
      </div>
    </section>
  )
}

PageIntro.defaultProps = defaultProps

export default PageIntro
