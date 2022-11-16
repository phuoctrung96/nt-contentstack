import { graphql } from "gatsby"

export const query = graphql`
  fragment AllNavs on Node {
    ... on Contentstack_menu {
      ...MenuFields
    }
  }

  fragment AllBlocks on Node {
    ... on Contentstack_banner {
      ...BannerFields
    }
    ... on Contentstack_content {
      ...ContentFields
    }
  }
`
