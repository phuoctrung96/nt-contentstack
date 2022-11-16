/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from "react"

/****************************************************
    Site styles
****************************************************/
import "./src/scss/app.scss"

/****************************************************
    Redux
****************************************************/
import { Provider } from "react-redux"
import store from "./src/state/store"

// wrap app for global state context and redux
export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)

/****************************************************
	Page transition 
	- fix scroll jump on page transition
****************************************************/
export const shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps,
  getSavedScrollPosition,
}) => {
  const locationPath = location.pathname
  const prevLocationPath = prevRouterProps?.location?.pathname
  const savedPosition = getSavedScrollPosition(location) || [0, 0]

  // only scroll top if the page path has changed - not on query string update
  if (locationPath !== prevLocationPath) {
    window.scrollTo({
      top: savedPosition[1],
      left: savedPosition[0],
      behavior: "smooth",
    })
  }
  return false
}

/****************************************************
	Page change 
****************************************************/
export function onRouteUpdate({ location, prevLocation }) {}
