import React from "react"

// import LinkWrapper from "../LinkWrapper"

import { ButtonModel } from "../../models/components"

interface LinkButtonProps extends ButtonModel {
  cssClass: string
}

const defaultProps = {}

export const LinkButton: React.FC<LinkButtonProps> = props => {
  if (!props.link || !props.label) return null

  return (
    <a href={props.link.link?.url} className={props.cssClass || ""}>
      {props.label || "Learn more"}
    </a>
  )

  // return (
  //   <LinkWrapper anchor={props.anchor} cssClass={props.cssClass || ""}>
  //     <span className="button__inner">{props.label || "Learn more"}</span>
  //   </LinkWrapper>
  // )
}

LinkButton.defaultProps = defaultProps

export default LinkButton
