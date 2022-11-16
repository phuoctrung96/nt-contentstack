/****************************************************

	Utilities - Modules

****************************************************/
import { BodyModuleObj, FaqsModule, MapModule } from "../models/modules"

/******************************************************
	Process Module List
******************************************************/
export const processModules = (body: { modular_blocks: BodyModuleObj[] }) => {
  let modules = [...body.modular_blocks]
  wrapTabModules(modules)
  groupTabModules(modules)
  return modules
}

// wrap tabbed content
const wrapTabModules = (modules: BodyModuleObj[]) => {
  modules.forEach((module, index) => {
    if (module["map"] && (module["map"] as MapModule).tab) {
      const newModule = {
        tabs: { heading: "Map", content: module["map"] },
      }
      modules[index] = newModule
    } else if (module["faqs"] && (module["faqs"] as FaqsModule).tab) {
      const newModule = {
        tabs: { heading: "FAQs", content: module["faqs"] },
      }
      modules[index] = newModule
    }
  })
}

// group tabbed content
const groupTabModules = (modules: BodyModuleObj[]) => {
  let tabGroup: any = []
  modules.forEach((module, index) => {
    if (module["tabs"]) {
      tabGroup.push(module["tabs"])
      modules[index] = {}
    } else if (tabGroup.length > 0) {
      modules[index - 1] = { tabs: { tabs: [...tabGroup] } }
      modules[index] = module
      tabGroup = []
    }
  })
}
