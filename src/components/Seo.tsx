import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { SITE_LANG } from "../utils/constants"
import { getPrettyURL } from "../utils/utils_links"
import { CmsImage, SeoDataModel } from "../models/common"

export interface SeoProps extends SeoDataModel {
  children?: JSX.Element[] | string
}

const defaultProps = {}

const Seo: React.FC<SeoProps> = props => {
  const query = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  // gatsby-config values
  const siteTitle: string = query.site.siteMetadata?.title
  const siteDescription: string = query.site.siteMetadata?.description
  const siteUrl: string = query.site.siteMetadata?.siteUrl
  const siteAuthor: string = query.site.siteMetadata?.author

  // CMS config values
  const seoTitle: string = query.seoTitle?.text
  const seoTitlePipe: string = query.seoTitlePipe?.text
  const seoDescription: string = query.seoDescription?.text
  const seoShareImage: CmsImage = query.shareImage?.image

  // SEO values
  const title: string = props.metaTitle || seoTitle || siteTitle || ""
  const titlePipe: string | undefined = props.metaTitlePipe || seoTitlePipe
  const description: string =
    props.metaDescription || seoDescription || siteDescription || ""
  const shareTitle: string = props.shareTitle || title
  const shareDescription: string = props.shareDescription || description
  const shareImage: CmsImage | undefined = props.shareImage
  // const canonicalLink: string =
  //   props.slug === "/" ? siteUrl : getPrettyURL(siteUrl + "/" + props.slug)

  // page language
  let lang = "en"

  return (
    <Helmet htmlAttributes={{ lang: lang }}>
      <title>{titlePipe ? `${title} | ${titlePipe}` : title}</title>
      <meta name="description" content={description} />

      {/* open graph */}
      <meta property="og:title" content={shareTitle} />
      <meta property="og:description" content={shareDescription} />
      <meta property="og:type" content="website" />

      {/* twitter */}
      <meta
        name="twitter:card"
        content={seoShareImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:creator" content={siteAuthor || ``} />
      <meta name="twitter:title" content={shareTitle} />
      <meta name="twitter:description" content={shareDescription} />

      {/* share image */}
      {seoShareImage && (
        <>
          <meta property="og:image" name="image" content={shareImage?.url} />
          <meta name="twitter:image" content={shareImage?.url} />
          <meta property="og:image:type" content={shareImage?.content_type} />
          <meta
            property="og:image:alt"
            content={shareImage?.description || shareImage?.title}
          />
          <meta
            property="og:image:width"
            content={shareImage?.dimension.width?.toString()}
          />
          <meta
            property="og:image:height"
            content={shareImage?.dimension.height?.toString()}
          />
        </>
      )}

      {/* canonical link */}
      {/* <link rel="canonical" href={canonicalLink} /> */}

      {/* alternate lang links */}
      {props.slug === "/" &&
        SITE_LANG.map(lang => (
          <link
            key={"mang_${lang}"}
            rel="alternate"
            hrefLang={lang.href}
            href={getPrettyURL(siteUrl + lang.url)}
          />
        ))}

      {/* other */}
      {props.children}
    </Helmet>
  )
}

Seo.defaultProps = defaultProps

export default Seo
