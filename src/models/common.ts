// import * as global from "./globals"
// import * as page from "./pages"
// import * as component from "./components"
// import * as module from "./modules"
// import * as nav from "./nav"
// import * as common from "./common"

import { IGatsbyImageData } from "gatsby-plugin-image"

export type EntryTypeModel = {
  type: string
}

export type LinkData = {
  url: string
  isExternal: boolean
}

/****************************************************
	ATDW
****************************************************/
export type ATDWItemModel = {
  uid: string
  title: string
  hero_image?: any
  visual?: any
  type: string
  nt_tags?: any
}

export type ATDWProductModel = {
  productId: string
  productserviceId?: string
  status: string
  productName: string
  productCategoryId: string
  verticalClassifications?: string[]
  region: string
  subregion: string
  path: string
  thumbnail: string
  tags: string[]
}

/****************************************************
	SEO
****************************************************/
export type SeoDataModel = {
  slug: string
  metaTitle?: string
  metaTitlePipe?: string
  metaDescription?: string
  metaKeywords?: string[]
  shareImage?: CmsImage
  shareTitle?: string
  shareDescription?: string
}

/****************************************************
	Assets
****************************************************/
export type CmsAsset = {
  id?: string
  title: string
  description?: string
  filename: string
  url: string
  content_type: string
  internal: EntryTypeModel
}

interface Dimensions {
  width?: number
  height?: number
}

export type CmsImage = CmsAsset & {
  dimension: Dimensions
  gatsbyImageData: IGatsbyImageData
}

/****************************************************
	Array
****************************************************/
export interface StringObj {
  [index: string]: string
}

export interface BoolObj {
  [index: string]: boolean
}
