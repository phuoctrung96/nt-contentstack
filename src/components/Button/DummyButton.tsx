import React from "react"

import ConditionalWrapper from "../ConditionalWrapper"

import { ButtonModel } from "../../models/components"

interface Props extends ButtonModel {
  wrapperClass?: string
  cssClass?: string
  dummy?: boolean
  onClick?: () => void
}

const defaultProps = {}

export const DummyButton: React.FC<Props> = props => {
  if (!props.dummy && !props.label) return null

  return (
    <ConditionalWrapper
      condition={props.wrapperClass !== ""}
      wrapper={children => (
        <span className={props.wrapperClass || ""}>{children}</span>
      )}
    >
      <button
        className={`button ${props.cssClass || ""}`}
        onClick={props.onClick || undefined}
      >
        <span>{props.label}</span>
      </button>
    </ConditionalWrapper>
  )
}

DummyButton.defaultProps = defaultProps

export default DummyButton
