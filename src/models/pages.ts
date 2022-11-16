import * as global from "./globals"
// import * as page from "./pages"
import * as component from "./components"
import * as module from "./modules"
// import * as nav from "./nav"
import * as common from "./common"

export type PageModels =
  | ArticlePageModel
  | ContentPageModel
  | ItineraryPageModel

export interface ArticlePageModel extends PageModel {}
export interface ContentPageModel extends PageModel {}
export interface ItineraryPageModel extends PageModel {}

export type PageModel = {
  id?: string
  url: string
  parent_page?: ParentModel
  gathercontent_settings?: global.GatherContentSettings
  heading: string
  subheading?: string
  hero_image?: global.GlobalHeroBannerModel
  intro?: string
  badge?: component.BadgeModel
  body: {
    modular_blocks: module.BodyModuleObj[]
  }
  author: component.AuthorModel[]
  publish_date: Date
  blocks: component.BlockModels[]
  overrides?: {
    listing_title?: string
    listing_image?: common.CmsImage
    menu_title?: string
  }
  seo?: global.SeoFields
  developer_fields?: global.DeveloperFields
  nt_tags?: component.TagModel[]
  // tag_validation?: string
  internal?: common.EntryTypeModel
}

/****************************************************
	Helpers
****************************************************/
export type ParentModel = {
  id?: string
  url: string
  parent_page?: ParentModel
  heading?: string
  subheading?: string
  internal?: common.EntryTypeModel
}
