import React from "react"

import { LinkModule } from "../../../models/modules"

interface Props extends LinkModule {}

const defaultProps = {}

const LinkItem: React.FC<Props> = props => {
  console.log("LinkItem: ", props)

  return (
    <section>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <h4>Link Item</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

LinkItem.defaultProps = defaultProps

export default LinkItem
