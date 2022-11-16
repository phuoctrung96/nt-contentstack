/****************************************************

	Utilities - Text

****************************************************/
import {
  jsonToHtml,
  htmlToJson,
  IAnyObject,
} from "@contentstack/json-rte-serializer"

/******************************************************
	Generate key
******************************************************/
export const generateKey = (prefix: string = "") => {
  const now = new Date()
  const guid = (now.getTime() * Math.random()).toString(36).split(".")[0]

  return prefix ? `${prefix}_${guid}` : guid
}

/******************************************************
	Does the Rich Text field actually have content
******************************************************/
export const hasRichTextContent = (content: any | undefined): boolean => {
  return !!getPlainText(content)?.length
}

/******************************************************
	Is the Rich Text field actually empty
******************************************************/
export const isEmptyRichText = (content: any | undefined): boolean => {
  return !hasRichTextContent(content)
}

/******************************************************
	Get the plain text from a rich text field
******************************************************/
export const getPlainText = (content: any | undefined): string | undefined => {
  if (typeof content === "string") return content
  if (typeof window !== "undefined" && content) {
    // create markers for lists
    const html = jsonToHtml(content)
      .replace(/<li>/g, "<li>• ")
      .replace(/<\/li>/g, " </li>")

    // create a div to wrap the html and then use the browser's parser to get the plain text content
    let div = window?.document.createElement("div")
    div.innerHTML = html

    return (div.textContent || div.innerText || "").trim()
  }

  return undefined
}

/******************************************************
	Turn a HTML string to JSON
******************************************************/
export const getHtmlJson = (content: string | undefined): IAnyObject | null => {
  const htmlDomBody = new DOMParser().parseFromString(
    content || "",
    "text/html"
  ).body
  return htmlToJson(htmlDomBody)
}
