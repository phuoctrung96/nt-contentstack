import React from "react"

interface Props {
  name?: string
  color?: string
  width?: string
  height?: string
  cssClass?: string
  fill?: string
  stroke?: string
}

const defaultProps = {}

const Icon: React.FC<Props> = props => {
  if (!props.name) return null

  return (
    <svg
      className={`svg-icon ${props.cssClass || ""}`}
      fill={props.fill || props.color}
      stroke={props.stroke}
      width={props.width}
      height={props.height}
    >
      <use xlinkHref={`/images/sprite.svg#${props.name}`} />
    </svg>
  )
}

Icon.defaultProps = defaultProps

export default Icon
