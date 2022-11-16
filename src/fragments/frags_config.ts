import { graphql } from "gatsby"

export const query = graphql`
  fragment ConfigFields on Contentstack_Config {
    id
    code_id
    boolean
    text
    rich_text
    navigation {
      ...AllNavs
    }
    image {
      ...CmsImageFields
      gatsbyImageData(placeholder: BLURRED, quality: 95)
    }
    asset {
      ...CmsAssetFields
    }
    internal {
      type
    }
  }
`
