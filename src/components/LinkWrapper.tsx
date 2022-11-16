import React from "react"
import { Link } from "gatsby"

import { getPrettyURL } from "../utils/utils_links"
import { ATDWItemModel, CmsAsset } from "../models/common"
import { PageModels } from "../models/pages"

interface Props {
  url?: string
  asset?: CmsAsset
  entry?: PageModels[]
  item?: ATDWItemModel
  cssClass?: string
  children?: React.ReactElement | string
}

const defaultProps = {}

const LinkWrapper: React.FC<Props> = props => {
  if (!props.children) return null

  let linkData = fetchLink(props.url, props.asset, props.entry)

  // if no link, return children
  if (!linkData) return <>{props.children}</>

  if (linkData?.isExternal) {
    return (
      <a
        href={linkData.url}
        className={props.cssClass || ""}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    )
  } else if (linkData?.url) {
    return (
      <Link to={linkData.url} className={props.cssClass || ""}>
        {props.children}
      </Link>
    )
  } else return null
}

LinkWrapper.defaultProps = defaultProps

export default LinkWrapper

const fetchLink = (
  url?: string,
  asset?: CmsAsset,
  entry?: PageModels[]
  // item?: ATDWItemModel
): { url: string; isExternal: boolean } | undefined => {
  // asset
  if (asset) return { url: asset.url, isExternal: true }

  // CMS entry
  if (entry?.length) {
    return {
      url: getPrettyURL(entry[0]),
      isExternal: false,
    }
  }

  // URL
  if (url && url.trim().length)
    return {
      url: url,
      isExternal: !/^\/(?!\/)/.test(url) || false,
    }

  // ATDW item

  return undefined
}
