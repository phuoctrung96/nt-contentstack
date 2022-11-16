import React from "react"

import Icon from "./Icon"

interface Props {
  cssClass?: string
}

const defaultProps = {}

const AddMyTrip: React.FC<Props> = props => {
  return (
    <button
      className={`addMyTrip ${props.cssClass || ""}`}
      title="Add to my trip"
    >
      <Icon name="heart" fill="none" stroke="#000" />
    </button>
  )
}

AddMyTrip.defaultProps = defaultProps

export default AddMyTrip
