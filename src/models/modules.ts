// import * as global from "./globals"
// import * as page from "./pages"
import * as component from "./components"
// import * as module from "./modules"
import * as nav from "./nav"
import * as common from "./common"

export interface BodyModuleObj {
  [index: string]: BodyModules
}

/****************************************************
	Modular Block Collections
****************************************************/
export type BodyModules =
  | TextAreaModule
  | GalleryModule
  | BannerModule
  | AudioModule
  | InstagramModule
  | QuoteModule
  | StacklaModule
  | AccordionModule
  | LinkModule
  | LinkRowModule
  | DealsOffersModule
  // | DealsPageModule
  | SearchBookModule
  | EditorialModule
  | MiniMapModule
  | ArticleListingModule
  | DynamicListingModule
  | ButtonRowModule
  | VideoModule
  | MapModule
  | FaqsModule
  | TabsModule

/****************************************************
	Modular Block
****************************************************/
export type TabsModule = {
  tabs: {
    heading: string
    content: any
  }[]
}

/****************************************************
	Modular Block
****************************************************/
export type TextAreaModule = {
  intro?: string
  content?: any
}

export type GalleryModule = {
  layout?: string
  images?: {
    image?: ModularImage
    caption?: string
    caption_link?: string
    caption_target?: string
  }[]
}

export type BannerModule = {
  rotate_headings?: boolean
  small_height?: boolean
  banners?: ModularBanner[]
}

export type AudioModule = {
  audio: component.AudioModel[]
}

export type InstagramModule = {
  url: string
}

export type QuoteModule = {
  quote: string
  author?: string
  image?: ModularImage
}

export type StacklaModule = {
  stackla_filter: string
  layout?: string
  show_more?: boolean
  show_spinner?: boolean
  items_per_page?: number
  limit?: number
  heading?: string
  introduction?: string
}

export type AccordionModule = {
  first_open?: boolean
  accordion_items?: {
    heading: string
    content: any
  }[]
}

export type LinkModule = {
  link?: nav.LinkModel
  breadcrumb?: string
  heading?: string
  intro?: string
  image?: ModularImage
}

export type LinkRowModule = {
  links?: {
    link?: nav.LinkModel
    content?: any
    image?: ModularImage
  }[]
}

export type DealsOffersModule = {
  listing: component.DealListingModel[]
}

// export type DealsPageModule = {
//   listing: component.DealListingModel
// }

export type SearchBookModule = {
  display?: boolean
}

export type EditorialModule = {
  heading?: string
  intro_paragraph?: string
  layout?: string
  breadcrumbs?: string
  add_highlight?: boolean
  show_operator_links?: boolean
  include_links_at_start?: boolean
  include_immediate_children?: boolean
  manual_location?: string
  nearby_within_radius?: string
  keywords?: string
  include_items?: component.TagModel[]
  exclude_items?: component.TagModel[]
  set: QueryModule[]
}

export type MiniMapModule = {
  pin_position?: Coordinate
  position?: Coordinate
  starting_position?: string
  highlight_regions?: string
  zoom2?: string
  zoom3?: string
  view_larger_map_link?: string
}

export type ArticleListingModule = {
  heading?: string
  intro_paragraph?: string
  read_more_url?: string
  enable_smart_display_for_itineraries?: boolean
  enable_smart_display_for_articles?: boolean
  include_items?: component.TagModel[]
  exclude_items?: component.TagModel[]
  set: QueryModule[]
}

export type DynamicListingModule = {
  heading?: string
  intro_paragraph?: string
  breadcrumbs?: string
  manual_location?: string
  nearby_within_radius?: string
  keywords?: string
  add_highlight?: boolean
  show_operator_links?: boolean
  show_map_list_toggle?: boolean
  show_map_by_default?: boolean
  show_region_selector?: boolean
  display_manual_selection_only?: boolean
  map?: string
  show_keyword_search?: boolean
  show_tabs?: boolean
  show_sub_filters?: boolean
  initial_number_of_rows?: number
  number_of_rows_per_page?: number
  order_by?: string
  disable_add_to_trip?: boolean
  include_links_at_start?: boolean
  include_immediate_children?: boolean
  include_items?: component.TagModel[]
  exclude_items?: component.TagModel[]
  set: QueryModule[]
}

export type ButtonRowModule = {
  heading?: string
  intro_paragraph?: string
  links?: {
    text?: string
    highlight?: boolean
    style?: string
    url?: string
    asset?: common.CmsAsset
    item?: common.ATDWItemModel[]
    new_window?: boolean
  }[]
}

export type VideoModule = {
  heading?: string
  intro_paragraph?: string
  random_order?: boolean
  videos: component.VideoModel[]
}

export type MapModule = {
  heading?: string
  intro_paragraph?: string
  tab?: boolean
  lazy_load?: boolean
  map_id_prefix?: string
  markers?: string[]
  default_markers?: string[]
  map_centre?: {
    latitude?: string
    longitude?: string
  }
  drive_routes?: string[]
  flight_paths?: string[]
  default_drive_route?: string
  default_flight_path?: string
  collapse_legend?: boolean
  show_active_item?: boolean
}

export type FaqsModule = {
  tab?: boolean
  faqs?: {
    title: string
    content: any
  }[]
}

/****************************************************
	Query Building
****************************************************/
export type QueryModuleObj = NTTags | string | SetGroup
export type QueryModule = {
  nt_tags?: NTTags
  operator?: string | Operator
  group?: SetGroup
}

type NTTags = {
  nt_tags?: component.TagModel[]
  operator?: string
}

type Operator = {
  operator?: string
}

type SetGroup = {
  set: QueryModule[]
}

/****************************************************
	Helpers
****************************************************/
export type ModularImage = {
  file?: common.CmsImage
  imageSize1?: common.CmsImage
  imageSize2?: common.CmsImage
  imageSize3?: common.CmsImage
  link?: {
    alt_text?: string
    url?: string
  }
}

export type ModularBanner = {
  image?: ModularImage
  video?: string
  image_override?: string
  content_override?: string
  heading?: string
  subheading?: string
  content?: any
  button_text?: string
  button_link?: string
  button_target?: string
  caption?: string
  caption_link?: string
  caption_target?: string
  small?: boolean
  darken?: boolean
  render_h1?: boolean
}

export type Coordinate = {
  x?: string
  y?: string
}
