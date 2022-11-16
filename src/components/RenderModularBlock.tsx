import React from "react"

const TextArea = React.lazy(() => import("./ModularBlocks/TextArea/TextArea"))
const Gallery = React.lazy(() => import("./ModularBlocks/Gallery/Gallery"))
const BannerCarousel = React.lazy(
  () => import("./ModularBlocks/BannerCarousel/BannerCarousel")
)
const Audio = React.lazy(() => import("./ModularBlocks/Audio/Audio"))
const Instagram = React.lazy(
  () => import("./ModularBlocks/Instagram/Instagram")
)
const Quote = React.lazy(() => import("./ModularBlocks/Quote/Quote"))
const Stackla = React.lazy(() => import("./ModularBlocks/Stackla/Stackla"))
const Accordion = React.lazy(
  () => import("./ModularBlocks/Accordion/Accordion")
)
const LinkItem = React.lazy(() => import("./ModularBlocks/LinkItem/LinkItem"))
const LinkRow = React.lazy(() => import("./ModularBlocks/LinkRow/LinkRow"))
const DealsOffers = React.lazy(
  () => import("./ModularBlocks/DealsOffers/DealsOffers")
)
const SearchBook = React.lazy(
  () => import("./ModularBlocks/SearchBook/SearchBook")
)
const EditorialListing = React.lazy(
  () => import("./ModularBlocks/EditorialListing/EditorialListing")
)
const MiniMap = React.lazy(() => import("./ModularBlocks/MiniMap/MiniMap"))
const ArticleListing = React.lazy(
  () => import("./ModularBlocks/ArticleListing/ArticleListing")
)
const DynamicListing = React.lazy(
  () => import("./ModularBlocks/DynamicListing/DynamicListing")
)
const ButtonRow = React.lazy(
  () => import("./ModularBlocks/ButtonRow/ButtonRow")
)
const VideoPlayer = React.lazy(
  () => import("./ModularBlocks/VideoPlayer/VideoPlayer")
)
const Map = React.lazy(() => import("./ModularBlocks/Map/Map"))
const Faqs = React.lazy(() => import("./ModularBlocks/Faqs/Faqs"))
//
const Tabs = React.lazy(() => import("./ModularBlocks/Tabs/Tabs"))

import * as m from "../models/modules"

interface Props {
  block: m.BodyModuleObj
}

const defaultProps = {}

export const RenderModularBlock: React.FC<Props> = props => {
  // console.log("RenderModularBlock: ", props.block)
  if (!props.block) return null

  return (
    <React.Suspense fallback="Loading...">
      {/* Text Area */}
      {props.block["text_area"] && (
        <TextArea {...(props.block["text_area"] as m.TextAreaModule)} />
      )}

      {/* Gallery */}
      {props.block["gallery"] && (
        <Gallery {...(props.block["gallery"] as m.GalleryModule)} />
      )}

      {/* Banner Carousel */}
      {props.block["banner_carousel"] && (
        <BannerCarousel
          {...(props.block["banner_carousel"] as m.BannerModule)}
        />
      )}

      {/* Audio */}
      {props.block["audio"] && (
        <Audio {...(props.block["audio"] as m.AudioModule)} />
      )}

      {/* Instagram */}
      {props.block["instagram"] && (
        <Instagram {...(props.block["instagram"] as m.InstagramModule)} />
      )}

      {/* Quote */}
      {props.block["quote"] && (
        <Quote {...(props.block["quote"] as m.QuoteModule)} />
      )}

      {/* Stackla */}
      {props.block["stackla"] && (
        <Stackla {...(props.block["stackla"] as m.StacklaModule)} />
      )}

      {/* Accordion */}
      {props.block["accordion"] && (
        <Accordion {...(props.block["accordion"] as m.AccordionModule)} />
      )}

      {/* Link Item */}
      {props.block["link"] && (
        <LinkItem {...(props.block["link"] as m.LinkModule)} />
      )}

      {/* Link Row */}
      {props.block["link_row"] && (
        <LinkRow {...(props.block["link_row"] as m.LinkRowModule)} />
      )}

      {/* Deals and Offers */}
      {props.block["deals_and_offers"] && (
        <DealsOffers
          {...(props.block["deals_and_offers"] as m.DealsOffersModule)}
        />
      )}

      {/* Deals Page Listing */}
      {props.block["deals_page_listing"] && (
        <DealsOffers
          {...(props.block["deals_page_listing"] as m.DealsOffersModule)}
          pageListing
        />
      )}

      {/* Search and Book */}
      {props.block["search_and_book"] && (
        <SearchBook
          {...(props.block["search_and_book"] as m.SearchBookModule)}
        />
      )}

      {/* Editorial Listing */}
      {props.block["editorial_listing"] && (
        <EditorialListing
          {...(props.block["editorial_listing"] as m.EditorialModule)}
        />
      )}

      {/* Minimap */}
      {props.block["minimap"] && (
        <MiniMap {...(props.block["minimap"] as m.MiniMapModule)} />
      )}

      {/* Article Listing */}
      {props.block["article_listing"] && (
        <ArticleListing
          {...(props.block["article_listing"] as m.ArticleListingModule)}
        />
      )}

      {/* Dynamic Listing */}
      {props.block["dynamic_listing"] && (
        <DynamicListing
          {...(props.block["dynamic_listing"] as m.DynamicListingModule)}
        />
      )}

      {/* Button Row */}
      {props.block["button_row"] && (
        <ButtonRow {...(props.block["button_row"] as m.ButtonRowModule)} />
      )}

      {/* Video Player */}
      {props.block["video_player"] && (
        <VideoPlayer {...(props.block["video_player"] as m.VideoModule)} />
      )}

      {/* Map */}
      {props.block["map"] && <Map {...(props.block["map"] as m.MapModule)} />}

      {/* FAQs */}
      {props.block["faqs"] && (
        <Faqs {...(props.block["faqs"] as m.FaqsModule)} />
      )}

      {/* Tabbed Content */}
      {props.block["tabs"] && (
        <Tabs {...(props.block["tabs"] as m.TabsModule)} />
      )}
    </React.Suspense>
  )

  return null
}

RenderModularBlock.defaultProps = defaultProps

export default RenderModularBlock
