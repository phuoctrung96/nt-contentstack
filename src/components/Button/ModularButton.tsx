import React from "react"

import ConditionalWrapper from "../ConditionalWrapper"

import { ATDWItemModel, CmsAsset } from "../../models/common"
import LinkWrapper from "../LinkWrapper"

interface Props {
  label?: string
  url?: string
  asset?: CmsAsset
  item?: ATDWItemModel
  wrapperClass?: string
  cssClass?: string
  modular?: boolean
}

const defaultProps = {}

export const ModularButton: React.FC<Props> = props => {
  if (!props.modular && !props.label) return null

  return (
    <ConditionalWrapper
      condition={!!props.wrapperClass && props.wrapperClass !== ""}
      wrapper={children => (
        <span className={props.wrapperClass || ""}>{children}</span>
      )}
    >
      <LinkWrapper
        url={props.url}
        asset={props.asset}
        entry={undefined}
        item={props.item}
        cssClass={`button ${props.cssClass || ""}`}
      >
        <span>{props.label}</span>
      </LinkWrapper>
    </ConditionalWrapper>
  )
}

ModularButton.defaultProps = defaultProps

export default ModularButton
