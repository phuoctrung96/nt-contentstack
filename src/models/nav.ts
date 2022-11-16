// import * as global from "./globals"
// import * as page from "./pages"
// import * as component from "./components"
// import * as module from "./modules"
// import * as nav from "./nav"
import * as common from "./common"

export type NavModels = NavMenuModel

export type PageHierarchy = {
  id: string
  url: string
  label?: string
}

export type NavMenuModel = {
  id?: string
  heading?: string
  items?: common.ATDWItemModel[]
  layout?: string
  menu_image?: common.CmsImage[]
  more_link?: any
  internal?: common.EntryTypeModel
}

export type LinkModel = {
  id?: string
  link_id?: string
  visual?: {
    text?: string
    link_image?: common.CmsImage
    icon?: boolean
    link_class?: string
    link_icon_svg_code?: string
    short_description?: string
    breadcrumb?: string
    read_more_text?: string
  }
  link?: {
    url?: string
    asset?: common.CmsAsset
    item?: common.ATDWItemModel[]
    new_window?: boolean
  }
  internal?: common.EntryTypeModel
}
