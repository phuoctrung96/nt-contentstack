import { graphql } from "gatsby"

export const query = graphql`
  fragment MenuFields on Contentstack_menu {
    id
    heading
    items
    layout
    menu_image {
      ...CmsImageFields
    }
    more_link
    internal {
      type
    }
  }
`
