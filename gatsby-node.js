/******************************************************
	Build pages from CMS
******************************************************/
const path = require("path")

const contentPage = path.resolve("./src/templates/ContentPage.tsx")
const articlePage = path.resolve("./src/templates/ArticlePage.tsx")
const itineraryPage = path.resolve("./src/templates/ItineraryPage.tsx")

/******************************************************
	Add ATDW products to graphQL data layer
******************************************************/
const fetch = require("node-fetch")

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const response = await fetch(
    `https://atdw-products.tourismnt.workers.dev/?token=ac9e516bde8c49db8023601bac8225fc`
  )

  const data = await response.json()
  data.forEach(item => {
    const tags = [
      "All",
      item.region.replace("and", "&"),
      item.subregion,
      ...item.verticalClassifications,
    ].filter(x => x !== "Not found")
    createNode({
      id: item.productId,
      ...item,
      tags: tags,
      internal: {
        type: "ATDWProducts",
        contentDigest: createContentDigest(item),
      },
    })
  })
}

/******************************************************
	make the URL pretty
  - add trailing slash
	- remove double slashes (but not protocol eg https://)
	- replace spaces with hyphens
	- remove double hyphens
	- make lowercase
******************************************************/
const getPrettyURL = url => {
  if (!url) return ""
  return (url + "/")
    .replace(/(https?:\/\/)|(\/){2,}/g, "$1$2")
    .replace(/ /g, "-")
    .replace(/-+/g, "-")
    .toLowerCase()
}

/******************************************************
	build page path from parent pages
******************************************************/
const getPagePath = page => {
  if (page?.parent_page?.length)
    return [...getPagePath(page.parent_page[0]), { id: page.id, url: page.url }]
  return [{ id: page.id, url: page.url }]
}

/******************************************************
	build page URL from page path
******************************************************/
const getPageUrl = page => {
  if (page)
    return getPrettyURL(
      getPagePath(page)
        .map(x => x.url)
        .filter(Boolean)
        .join("/")
    )
  return ""
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  try {
    return await new Promise((resolve, reject) => {
      graphql(`
        {
          allContentstackPage(filter: { title: { ne: "do not delete" } }) {
            nodes {
              id
              url
              parent_page {
                ...PageParentFields
              }
              updated_at
            }
          }

          allContentstackArticle(filter: { title: { ne: "do not delete" } }) {
            nodes {
              id
              url
              parent_page {
                ...PageParentFields
              }
              updated_at
            }
          }

          allContentstackItinerary(filter: { title: { ne: "do not delete" } }) {
            nodes {
              id
              url
              parent_page {
                ...PageParentFields
              }
              updated_at
            }
          }
        }

        fragment PageSlugFields on Contentstack_page {
          id
          url
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
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Content pages
        result.data.allContentstackPage.nodes.forEach(node => {
          if (!node.url) return null
          createPage({
            path: getPageUrl(node),
            component: contentPage,
            context: {
              pageId: node.id,
              updatedAt: node.updatedAt,
            },
          })
        })

        // Article pages
        result.data.allContentstackArticle.nodes.forEach(node => {
          if (!node.url) return null
          createPage({
            path: getPageUrl(node),
            component: articlePage,
            context: {
              pageId: node.id,
              updatedAt: node.updatedAt,
            },
          })
        })

        // Itinerary pages
        result.data.allContentstackItinerary.nodes.forEach(node => {
          if (!node.url) return null
          createPage({
            path: getPageUrl(node),
            component: itineraryPage,
            context: {
              pageId: node.id,
              updatedAt: node.updatedAt,
            },
          })
        })

        resolve()
      })
    })
  } catch (error) {
    console.log(error)
    reject()
  }
}
