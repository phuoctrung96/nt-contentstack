import React from "react"

import { MiniMapModule } from "../../../models/modules"

interface Props extends MiniMapModule {}

const defaultProps = {}

const MiniMap: React.FC<Props> = props => {
  console.log("MiniMap: ", props)

  return (
    <section>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <h4>Mini Map</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

MiniMap.defaultProps = defaultProps

export default MiniMap
