import React, { useState, useRef, useLayoutEffect } from "react"
import cx from "classnames"

import Icon from "../../Icon"
const RichText = React.lazy(() => import("../../RichText"))

import { useCurrentWidth } from "../../../hooks/useCurrentWidth"

interface Props {
  heading?: string
  content?: any
  cssClass?: string
  open?: boolean
  children?: JSX.Element
}

const defaultProps = {}

const AccordionItem: React.FC<Props> = props => {
  // state
  const [active, setActive] = useState(props.open || false)
  const [fullHeight, setFullHeight] = useState(0)

  // refs
  const contentRef = useRef<HTMLDivElement>(null)

  // hooks
  const width = useCurrentWidth()

  // effects
  useLayoutEffect(() => {
    if (contentRef?.current) {
      setFullHeight(contentRef.current.scrollHeight)
    }
  }, [contentRef, width])

  if (!props.content && !props.children) return null

  // events
  const toggleActive = () => {
    setActive(!active)
  }

  const accordionClass = cx("accordion", { active: active }, props.cssClass)

  return (
    <React.Suspense fallback="Loading...">
      <div className={accordionClass}>
        <button className="accordion__heading" onClick={toggleActive}>
          <h3>{props.heading}</h3>
          <Icon name="angle-down" cssClass={"accordion__icon"} />
        </button>
        <div
          className="accordion__content"
          ref={contentRef}
          style={active ? { height: fullHeight } : { height: 0, padding: 0 }}
        >
          {props.content ? (
            <RichText
              content={props.content}
              cssClass="accordion__contentInner"
            />
          ) : (
            <>{props.children}</>
          )}
        </div>
      </div>
    </React.Suspense>
  )
}

AccordionItem.defaultProps = defaultProps

export default AccordionItem
