import React from "react"

import {
  jsonToHtml,
  IJsonToHtmlOptions,
} from "@contentstack/json-rte-serializer"

import { isEmptyRichText } from "../utils/utils_text"

interface RichTextProps {
  content: any
  options?: string
  cssClass?: string
  figcaption?: boolean
}

const defaultProps = {}

export const RichText: React.FC<RichTextProps> = props => {
  if (!props.content || isEmptyRichText(props.content)) return null

  if (typeof props.content === "string") return <>{props.content}</>

  if (props.figcaption)
    return (
      <figcaption
        dangerouslySetInnerHTML={{
          __html: jsonToHtml(props.content),
        }}
      />
    )

  return (
    <div
      className={props.cssClass || ""}
      dangerouslySetInnerHTML={{
        __html: jsonToHtml(props.content, renderOptions),
      }}
    />
  )
}

RichText.defaultProps = defaultProps

export default RichText

const renderOptions: IJsonToHtmlOptions = {
  customElementTypes: {
    // embed: (attrs, child, jsonBlock) => {
    //   console.log("embed - attrs: ", attrs)
    //   console.log("embed - child: ", child)
    //   console.log("embed - jsonBlock: ", jsonBlock)
    //   return `<p>EMBED</p>`
    // },

    reference: (attrs, child, jsonBlock) => {
      // fix unused props compilation error
      const attrsProps = attrs
      const childProps = child
      // console.log("reference - attrs: ", attrs)
      // console.log("reference - child: ", child)
      console.log("reference - jsonBlock: ", jsonBlock)

      /****************************************************
        Links
      ****************************************************/
      if (jsonBlock.attrs["type"] === "asset") {
        return `
          <a 
            href="${jsonBlock.attrs.href}" 
            target="${jsonBlock.attrs.target}"
          >${child}</a>
        `
      }

      if (jsonBlock.attrs["type"] === "entry") {
        return `
          <a 
            href="${jsonBlock.attrs.href}" 
            target="${jsonBlock.attrs.target}"
          >${child}</a>
        `
      }

      /****************************************************
        Images
      ****************************************************/
      if (jsonBlock.attrs["type"] === "asset") {
        const withHttps = (url: string) =>
          !/^https?:\/\//i.test(url) ? `https://${url}` : url

        const image = `
        <img 
          src="${jsonBlock.attrs["asset-link"]}" 
          alt="${jsonBlock.attrs["asset-alt"] || ""}" 
          width="${jsonBlock.attrs.width || ""}" 
        />`
        const link = jsonBlock.attrs.link
          ? `<a 
                href="${withHttps(jsonBlock.attrs.link)}" 
                target="${jsonBlock.attrs.target || "_self"}" 
                style="display: inline-block"
              >`
          : ""

        // inline image
        if (jsonBlock.attrs["inline"]) {
          const position = jsonBlock.attrs.position || "none"
          return `
            <figure style="display: inline-block; float: ${position}">
              ${link && `${link}`}
                ${image}
              ${link && `</a>`}
            </figure>
          `
        }

        // block image
        if (!jsonBlock.attrs["inline"]) {
          const position = jsonBlock.attrs.position || "left"
          const caption = jsonBlock.attrs["asset-caption"]
            ? `<figcaption>${jsonBlock.attrs["asset-caption"]}</figcaption>`
            : ""
          return `
            <div class="embed" style="text-align: ${position}">
              <figure style="display: inline-block">
                ${link && `${link}`}
                  ${image}
                ${link && `</a>`}
                ${caption}
              </figure>
            </div>
          `
        }
      }

      return ``
    },
  },

  customTextWrapper: {},
}
