import * as global from "./globals"
// import * as page from "./pages"
// import * as component from "./components"
import * as module from "./modules"
import * as nav from "./nav"
import * as common from "./common"

export type BlockModels = BannerModel | ContentModel

/****************************************************
	Components
****************************************************/
export type AudioModel = {
  id?: string
  heading?: string
  asset: common.CmsAsset
  transcript?: any
  sitecore_id?: string
  internal?: common.EntryTypeModel
}

export type AuthorModel = {
  id?: string
  name: string
  image: common.CmsImage
  content?: any
  website?: string
  internal?: common.EntryTypeModel
}

export type BadgeModel = {
  id?: string
  url?: string
  image?: common.CmsImage
  solid?: boolean
  text?: string
  internal?: common.EntryTypeModel
}

export type BannerModel = {
  id?: string
  content: any
  buttons?: ButtonModel[]
  image?: common.CmsImage
  internal?: common.EntryTypeModel
}

export type ButtonModel = {
  id?: string
  label: string
  style?: string
  css_class?: string
  link?: nav.LinkModel
  internal?: common.EntryTypeModel
}

export type ContentModel = {
  id?: string
  body: {
    modular_blocks: module.BodyModuleObj[]
  }
  custom: common.ATDWItemModel
  internal?: common.EntryTypeModel
}

export type DealModel = {
  id: string
  url: string
  valid_from: Date
  valid_to?: Date
  kicker?: string
  heading: string
  subheading?: string
  hero: common.CmsImage
  cta_label: string
  logo?: common.CmsImage
  terms?: string
  badge?: common.CmsImage
  target_market: TagModel[]
  regions: TagModel[]
  deal_types: TagModel[]
  tnt_tags?: TagModel[]
  internal?: common.EntryTypeModel
}

export type DealListingModel = {
  id?: string
  code_id: string
  heading?: string
  intro?: any
  ordering?: string
  number_of_open_pages?: number
  view_more_deals?: boolean
  include_tags?: TagModel[]
  exclude_tags?: TagModel[]
  tag_query?: {
    // set: ??
  }
  internal?: common.EntryTypeModel
}

export type HeroModel = {
  heading: string
  subheading?: string
  hero_image?: global.GlobalHeroBannerModel
}

export type RegionModel = {
  id?: string
  display_name: string
  css_class?: string
  order?: number
  internal?: common.EntryTypeModel
}

export type TagModel = {
  id?: string
  taxonomy: string
  display_name: string
  // tag_name: string
  order?: number
  adobe_tracking?: string
  internal?: common.EntryTypeModel
}

export type VideoModel = {
  id?: string
  url: string
  heading?: string
  internal?: common.EntryTypeModel
}
