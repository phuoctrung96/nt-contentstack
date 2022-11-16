import React, { useEffect } from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import { useDispatch } from "react-redux"
import { setBreadcrumbs } from "../state/site"

import Seo from "../components/Seo"
import Hero from "../components/Hero/Hero"
import PageIntro from "../components/PageIntro"
import RenderModularBlock from "../components/RenderModularBlock"
import Author from "../components/Author/Author"

import { buildBreadcrumbs, getPrettyURL } from "../utils/utils_links"
import { getFirstArrayItem } from "../utils/utils_arrays"
import { processModules } from "../utils/utils_modules"
import { ContentPageModel } from "../models/pages"
import { SeoDataModel } from "../models/common"
import { TextAreaModule } from "../models/modules"

const defaultProps = {}

export const ContentPage: React.FC<ContentPageModel> = props => {
  // page data
  const page: ContentPageModel = get(
    props,
    "data.page"
  ) as any as ContentPageModel
  console.log("ContentPage: ", page)

  // redux
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setBreadcrumbs(buildBreadcrumbs(page)))
  }, [])

  // SEO Fields
  const seoData: SeoDataModel = {
    slug: getPrettyURL(page),
    metaTitle: page.seo?.meta_title || page.heading,
    metaTitlePipe: undefined,
    metaDescription: page.seo?.meta_description || page.intro,
    metaKeywords: page.seo?.keywords,
    shareImage:
      page.seo?.share_image || getFirstArrayItem(page.hero_image?.banners),
    shareTitle: page.seo?.social_share_title,
    shareDescription: page.seo?.social_share_description,
  }

  // add intro text to first module if it is a text area
  let showIntroBlock = true
  const firstBodyBlock = page.body?.modular_blocks[0]
  if (firstBodyBlock && firstBodyBlock["text_area"]) {
    let module = firstBodyBlock["text_area"] as TextAreaModule
    module.intro = page.intro
    showIntroBlock = false
  }

  // process modular blocks
  const body = processModules(page.body)

  return (
    <div className="contentPage">
      <Seo {...seoData} />

      <Hero
        heading={page.heading}
        subheading={page.subheading}
        hero_image={page.hero_image}
      />

      {/*  Intro */}
      {showIntroBlock && page.intro && <PageIntro intro={page.intro} />}

      {/* Content */}
      {body.map((modularBlock, index) => {
        return (
          <RenderModularBlock key={`modBlock_${index}`} block={modularBlock} />
        )
      })}

      {/* Author */}
      {page.author?.length > 0 && <Author {...page.author[0]} />}
    </div>
  )
}

ContentPage.defaultProps = defaultProps

export default ContentPage

/******************************************************
	Data
******************************************************/
export const query = graphql`
  query ContentPageByID($pageId: String!) {
    page: contentstackPage(id: { eq: $pageId }) {
      id
      url
      parent_page {
        ...PageParentFields
      }
      gathercontent_settings {
        gathercontent_id
        last_imported
        atdw_id
        sitecore_id
      }
      heading
      subheading
      hero_image {
        rotate_headings
        small_height
        banners {
          banner {
            image {
              file {
                ...CmsImageFields
                gatsbyImageData(
                  width: 1920
                  layout: FULL_WIDTH
                  placeholder: NONE
                  quality: 80
                )
              }
              link {
                alt_text
                url
              }
            }
            video
            image_override
            content_override
            content
            button_text
            button_link
            button_target
            caption
            caption_link
            caption_target
            small
            darken
            render_h1
          }
        }
      }
      intro
      badge {
        ...BadgeFields
      }
      body {
        modular_blocks {
          # text_area
          text_area {
            content
          }
          # gallery
          gallery {
            layout
            images {
              image {
                file {
                  ...CmsImageFields
                  gatsbyImageData(
                    width: 1170
                    placeholder: BLURRED
                    quality: 80
                  )
                }
                imageSize1: file {
                  ...CmsImageFields
                  gatsbyImageData(width: 370, placeholder: BLURRED, quality: 80)
                }
                imageSize2: file {
                  ...CmsImageFields
                  gatsbyImageData(width: 570, placeholder: BLURRED, quality: 80)
                }
                imageSize3: file {
                  ...CmsImageFields
                  gatsbyImageData(width: 770, placeholder: BLURRED, quality: 80)
                }
                link {
                  alt_text
                  url
                }
              }
              caption
              caption_link
              caption_target
            }
          }
          # banner_carousel
          banner_carousel {
            rotate_headings
            small_height
            banners {
              image {
                file {
                  ...CmsImageFields
                  gatsbyImageData(
                    width: 1920
                    layout: FULL_WIDTH
                    placeholder: NONE
                    quality: 80
                  )
                }
                link {
                  alt_text
                  url
                }
              }
              video
              image_override
              content_override
              content
              button_text
              button_link
              button_target
              caption
              caption_link
              caption_target
              small
              darken
              render_h1
            }
          }
          # audio
          audio {
            audio {
              ...AudioFields
            }
          }
          # instagram
          instagram {
            url
          }
          # quote
          quote {
            quote
            author
            image {
              file {
                ...CmsImageFields
                gatsbyImageData(width: 200, placeholder: BLURRED, quality: 80)
              }
              link {
                alt_text
                url
              }
            }
          }
          # stackla
          stackla {
            stackla_filter
            layout
            show_more
            show_spinner
            items_per_page
            limit
            heading
            introduction
          }
          # accordion
          accordion {
            first_open
            accordion_items {
              heading
              content
            }
          }
          # link
          linkitem {
            link {
              ...LinkFields
            }
            breadcrumb
            heading
            intro
            image {
              file {
                ...CmsImageFields
                gatsbyImageData(placeholder: BLURRED, quality: 95)
              }
              link {
                alt_text
                url
              }
            }
          }
          # link_row
          link_row {
            links {
              link {
                ...LinkFields
              }
              content
              image {
                file {
                  ...CmsImageFields
                  gatsbyImageData(placeholder: BLURRED, quality: 95)
                }
                link {
                  alt_text
                  url
                }
              }
            }
          }
          # deals_and_offers
          deals_and_offers {
            listing {
              ...DealsListingFields
            }
          }
          # deals_page_listing
          deals_page_listing {
            listing {
              ...DealsListingFields
            }
          }
          # search_and_book
          search_and_book {
            display
          }
          # editorial_listing
          editorial_listing {
            heading
            intro_paragraph
            layout
            breadcrumbs
            add_highlight
            show_operator_links
            include_links_at_start
            include_immediate_children
            manual_location
            nearby_within_radius
            keywords
            include_items
            exclude_items
            set {
              group {
                set {
                  operator {
                    operator
                  }
                  nt_tags {
                    nt_tags {
                      ...TagFields
                    }
                    operator
                  }
                }
              }
              operator {
                operator
              }
              nt_tags {
                nt_tags {
                  ...TagFields
                }
                operator
              }
            }
          }
          # minimap
          minimap {
            pin_position {
              x
              y
            }
            position {
              x
              y
            }
            starting_position
            highlight_regions
            zoom2
            zoom3
            view_larger_map_link
          }
          # article_listing
          article_listing {
            heading
            intro_paragraph
            read_more_url
            enable_smart_display_for_itineraries
            enable_smart_display_for_articles
            include_items
            exclude_items
            set {
              group {
                set {
                  operator {
                    operator
                  }
                  nt_tags {
                    nt_tags {
                      ...TagFields
                    }
                    operator
                  }
                }
              }
              operator {
                operator
              }
              nt_tags {
                nt_tags {
                  ...TagFields
                }
                operator
              }
            }
          }
          # dynamic_listing
          dynamic_listing {
            heading
            intro_paragraph
            breadcrumbs
            manual_location
            nearby_within_radius
            keywords
            add_highlight
            show_operator_links
            show_map_list_toggle
            show_map_by_default
            show_region_selector
            display_manual_selection_only
            map
            show_keyword_search
            show_tabs
            show_sub_filters
            initial_number_of_rows
            number_of_rows_per_page
            order_by
            disable_add_to_trip
            include_links_at_start
            include_immediate_children
            include_items
            exclude_items
            set {
              group {
                set {
                  operator {
                    operator
                  }
                  nt_tags {
                    nt_tags {
                      ...TagFields
                    }
                    operator
                  }
                }
              }
              operator {
                operator
              }
              nt_tags {
                nt_tags {
                  ...TagFields
                }
                operator
              }
            }
          }
          # button_row
          button_row {
            heading
            intro_paragraph
            links {
              text
              highlight
              style
              url
              asset {
                ...CmsAssetFields
              }
              item
              new_window
            }
          }
          # video_player
          video_player {
            heading
            intro_paragraph
            random_order
            videos {
              ...VideoFields
            }
          }
          # map
          map {
            heading
            intro_paragraph
            tab
            lazy_load
            map_id_prefix
            markers
            default_markers
            map_centre {
              latitude
              longitude
            }
            drive_routes
            flight_paths
            default_drive_route
            default_flight_path
            collapse_legend
            show_active_item
          }
          # faqs
          faqs {
            tab
            faqs {
              title
              content
            }
          }
        }
      }
      author {
        ...AuthorFields
      }
      publish_date
      blocks {
        ...AllBlocks
      }
      overrides {
        listing_title
        listing_image {
          ...CmsImageFields
          gatsbyImageData(placeholder: BLURRED, quality: 95)
        }
        menu_title
      }
      seo {
        meta_title
        meta_description
        keywords
        share_image {
          ...CmsImageFields
          gatsbyImageData(placeholder: BLURRED, quality: 95)
        }
        social_share_title
        social_share_description
        hidden
      }
      developer_fields {
        body_classes
        code_to_appear_before_close_head_
        code_to_appear_before_close_body_
      }
      nt_tags {
        ...TagFields
      }
      internal {
        type
      }
    }
  }

  fragment PageParentFields on Contentstack_page {
    ...PageSlugFields
    parent_page {
      ...PageSlugFields
      parent_page {
        ...PageSlugFields
        parent_page {
          ...PageSlugFields
          parent_page {
            ...PageSlugFields
          }
        }
      }
    }
  }

  fragment PageSlugFields on Contentstack_page {
    id
    url
    heading
    subheading
  }
`
