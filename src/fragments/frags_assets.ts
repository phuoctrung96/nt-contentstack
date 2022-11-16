import { graphql } from "gatsby"

export const query = graphql`
  fragment CmsAssetFields on Contentstack_assets {
    id
    title
    description
    filename
    url
    content_type
    internal {
      type
    }
  }

  fragment CmsImageFields on Contentstack_assets {
    ...CmsAssetFields
    dimension {
      height
      width
    }
  }
`
