import React from "react"

import ConditionalWrapper from "../ConditionalWrapper"
const LinkButton = React.lazy(() => import("./LinkButton"))
const ModularButton = React.lazy(() => import("./ModularButton"))
const DummyButton = React.lazy(() => import("./DummyButton"))

import { ButtonModel } from "../../models/components"

interface Props extends ButtonModel {
  wrapperClass?: string
  cssClass?: string
  dummy?: boolean
  modular?: boolean
  onClick?: () => void
}

const defaultProps = {}

const Button: React.FC<Props> = props => {
  if (!props.label) return null

  // button styling
  let styleClass: string = ""
  if (props.style === "Primary") styleClass = ""
  if (props.style === "Secondary") styleClass = "secondary"

  return (
    <React.Suspense fallback="Loading...">
      {/* dummy button */}
      {props.dummy && (
        <DummyButton {...props} cssClass={`${styleClass} ${props.cssClass}`} />
      )}

      {/* modular button */}
      {props.modular && (
        <ModularButton
          {...props}
          cssClass={`${styleClass} ${props.cssClass}`}
        />
      )}

      {/* link button */}
      {props.link && (
        <ConditionalWrapper
          condition={props.wrapperClass !== ""}
          wrapper={children => (
            <span className={props.wrapperClass || ""}>{children}</span>
          )}
        >
          <LinkButton {...props} cssClass={`${styleClass} ${props.cssClass}`} />
        </ConditionalWrapper>
      )}
    </React.Suspense>
  )

  return null
}

Button.defaultProps = defaultProps

export default Button
