// import * as global from "./globals"
// import * as page from "./pages"
// import * as component from "./components"
import * as module from "./modules"
// import * as nav from "./nav"
import * as common from "./common"

export type DeveloperFields = {
  body_classes?: string
  code_to_appear_before_close_head_?: string
  code_to_appear_before_close_body_?: string
}

export type GatherContentSettings = {
  gathercontent_id?: string
  last_imported?: Date
  atdw_id?: string
  sitecore_id?: string
}

export interface GlobalHeroBannerModel {
  rotate_headings?: boolean
  small_height?: boolean
  banners?: {
    banner?: module.ModularBanner
  }[]
}

export interface GlobalImageModel extends module.ModularImage {}

export type SeoFields = {
  meta_title?: string
  meta_description?: string
  keywords?: string[]
  share_image?: common.CmsImage
  social_share_title?: string
  social_share_description?: string
  hidden?: boolean
}

export type QueryBuilderFields = {
  // current_query?: string
  // set?: ??
}
