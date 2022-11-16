/****************************************************

	Utilities - Images

****************************************************/
import { CmsImage } from "../models/common"

/****************************************************
	get alt text
****************************************************/
// export const getAltText = (
//   item?: MediaModel | CmsImage
// ): string | undefined => {
//   if (!item) return undefined
//   return item.hasOwnProperty("alt_text")
//     ? getImageAltText(item as MediaModel)
//     : getAssetAltText(item as CmsImage)
// }

// const getImageAltText = (item?: MediaModel): string | undefined => {
//   return item?.alt_text || getAssetAltText((item as MediaModel)?.image)
// }

export const getAssetAltText = (item?: CmsImage): string => {
  return item?.description || item?.title || ""
}

export {}
