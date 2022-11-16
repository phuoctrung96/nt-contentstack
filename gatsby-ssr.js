/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import React from "react"
import { Provider } from "react-redux"

import store from "./src/state/store"

/****************************************************
    Wrap app for redux
****************************************************/
export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>
}

export const onRenderBody = () => {}
