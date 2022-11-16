import React from "react"

import { TextAreaModule } from "../../../models/modules"
import RichText from "../../RichText"

interface Props extends TextAreaModule {}

const defaultProps = {}

const TextArea: React.FC<Props> = props => {
  // console.log("TextArea: ", props)

  return (
    <section className="textArea">
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell xlarge-2 show-for-xlarge" />
          <div className="cell medium-8 xlarge-7 text">
            {props.intro && <p className="intro">{props.intro}</p>}
            <RichText content={props.content} />
          </div>
          <div className="cell medium-4 xlarge-3" />
        </div>
      </div>
    </section>
  )
}

TextArea.defaultProps = defaultProps

export default TextArea
