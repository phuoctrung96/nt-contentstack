import React, { useState } from "react"
import cx from "classnames"

import Icon from "../../Icon"

interface Props {
  heading: string
  cssClass?: string
  arrowColor?: string
  children?: React.ReactElement | string
}

const defaultProps = {}

export const MobileMenuAccordion: React.FC<Props> = props => {
  // state
  const [active, setActive] = useState(false)

  if (!props.children) return null

  // events
  const toggleActive = () => {
    setActive(!active)
  }

  const accordionClass = cx("accordion", { active: active }, props.cssClass)

  return (
    <div className={accordionClass}>
      <button className="accordion__heading" onClick={toggleActive}>
        {props.heading}
        <Icon name="angle-down" cssClass={"accordion__icon"} color="#fff" />
      </button>
      <div
        className="accordion__content"
        style={active ? { maxHeight: 1500 } : { maxHeight: 0, padding: 0 }}
      >
        <div className="accordion__contentInner">{props.children}</div>
      </div>
    </div>
  )
}

MobileMenuAccordion.defaultProps = defaultProps

export default MobileMenuAccordion
