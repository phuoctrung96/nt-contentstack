import React from "react"

import { LinkRowModule } from "../../../models/modules"

interface Props extends LinkRowModule {}

const defaultProps = {}

const LinkRow: React.FC<Props> = props => {
  console.log("LinkRow: ", props)

  return (
    <section>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <h4>Link Row</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

LinkRow.defaultProps = defaultProps

export default LinkRow
