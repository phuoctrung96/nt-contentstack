/****************************************************

	Utilities - Links

****************************************************/
import { PageModels } from "../models/pages"
import { PageHierarchy } from "../models/nav"
import { CmsAsset } from "../models/common"

/******************************************************
	Get Link
******************************************************/
export const getLink = (props: {
  url?: string
  asset?: CmsAsset
  entry?: PageModels
}) => {
  if (props.url) return { link: props.url, target: "_blank" }

  if (props.asset) return { link: props.asset.url, target: "_blank" }

  if (props.entry) return { link: getPrettyURL(props.entry), target: "_self" }

  return { link: "/", target: "_self" }
}

/******************************************************
	Build page hierarchy
******************************************************/
const getPagePath = (page?: any): PageHierarchy[] => {
  if (page?.parent_page?.length)
    return [
      ...getPagePath(page.parent_page[0]),
      {
        id: page.id,
        url: page.url,
        label: `${page.heading || ""} ${page.subheading || ""}`,
      },
    ]
  return [{ id: page.id, url: page.url, label: getNavLabel(page) }]
}

const getNavLabel = (page?: any) => {
  if (page) {
    if (page.url === "/") return "Home"
    return `${page.heading} ${page.subheading}`.replace(/\ +/g, " ")
  }
  return ""
}

/******************************************************
	Build page breadcrumbs
******************************************************/
export const buildBreadcrumbs = (page?: any): PageHierarchy[] => {
  if (page) {
    const pathParts = getPagePath(page)
    return pathParts.map((crumb, index) => {
      const previous = pathParts
        ?.slice(0, index + 1)
        ?.map(x => x.url)
        ?.join("/")
      return { ...crumb, url: getPrettyURL(previous) }
    })
  }
  return []
}

/******************************************************
	Build the page URL from page hierarchy
******************************************************/
const getPageUrl = (page?: any): string => {
  if (page)
    return getPagePath(page)
      .map(x => x.url)
      .filter(Boolean)
      .join("")
  return ""
}

/******************************************************
	make the URL pretty
  - add trailing slash
	- remove double slashes (but not protocol eg http://)
	- replace spaces with hyphens
	- remove double hyphens
	- make lowercase
******************************************************/
export const getPrettyURL = (url: string | PageModels | undefined): string => {
  if (!url) return ""

  if (typeof url === "string") {
    // break out any query strings parameters
    let urlParts = url.split("?")
    const baseURL = urlParts.shift()
    const prettyUrl = (baseURL + "/")
      .replace(/(https?:\/\/)|(\/){2,}/g, "$1$2")
      .replace(/\ /g, "-")
      .replace(/\-+/g, "-")
      .toLowerCase()

    if (urlParts.length) return [prettyUrl, urlParts].join("?")
    return prettyUrl
  }

  return getPrettyURL(getPageUrl(url))
}
