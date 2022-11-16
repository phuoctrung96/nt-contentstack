// import * as global from "./globals"
// import * as page from "./pages"
// import * as component from "./components"
// import * as module from "./modules"
import * as nav from "./nav"
import * as common from "./common"

export type Config = {
  id?: string
  code_id: string
  description: string
  boolean?: boolean
  text?: string
  rich_text?: any
  nav?: nav.NavModels[]
  image?: common.CmsImage[]
  asset?: common.CmsAsset[]
  internal: common.EntryTypeModel
}
