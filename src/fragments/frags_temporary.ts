import { graphql } from "gatsby"

export const query = graphql`
  fragment BannerFields on Contentstack_banner {
    id
    content
    buttons {
      ...ButtonFields
    }
    image {
      ...CmsImageFields
      gatsbyImageData(placeholder: BLURRED, quality: 95)
    }
    internal {
      type
    }
  }

  fragment ButtonFields on Contentstack_button {
    id
    label
    style
    css_class
    link {
      ...LinkFields
    }
    internal {
      type
    }
  }

  fragment ContentFields on Contentstack_content {
    id
    body {
      modular_blocks {
        text_area {
          content
        }
        #
        #
        # Full modular block GraphQL goes here
        #
        #
      }
    }
    custom
    internal {
      type
    }
  }

  fragment BadgeFields on Contentstack_sidebar_badge {
    id
    url
    image {
      ...CmsImageFields
      gatsbyImageData(placeholder: BLURRED, quality: 95)
    }
    solid
    text
    internal {
      type
    }
  }

  fragment DealsListingFields on Contentstack_Deal_Listing {
    id
    code_id
    heading
    intro
    ordering
    number_of_open_pages
    view_more_deals
    include_tags {
      ...TagFields
    }
    exclude_tags {
      ...TagFields
    }
    tag_query {
      current_query
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
        nt_tags {
          nt_tags {
            ...TagFields
          }
          operator
        }
        operator {
          operator
        }
      }
    }
    internal {
      type
    }
  }

  fragment LinkFields on Contentstack_ntlink {
    id
    link_id
    visual {
      text
      link_image {
        ...CmsImageFields
      }
      icon
      link_class
      link_icon_svg_code
      short_description
      breadcrumb
      read_more_text
    }
    link {
      url
      asset {
        ...CmsAssetFields
      }
      item
      new_window
    }
    internal {
      type
    }
  }

  fragment TagFields on Contentstack_Tag {
    id
    taxonomy
    display_name
    # tag_name
    order
    adobe_tracking
    internal {
      type
    }
  }
`
