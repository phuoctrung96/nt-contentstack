/****************************************************

    State: Site Info

****************************************************/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { PageHierarchy } from "../../models/nav"

import type { RootState, AppDispatch } from "../store"

interface SiteState {
  breadcrumbs?: PageHierarchy[]
}

const initialState: SiteState = {
  breadcrumbs: [],
}

// Slice
const slice = createSlice({
  name: "site",
  initialState,
  reducers: {
    setBreadcrumbs: (state, action) => {
      const { payload } = action
      state.breadcrumbs = payload
    },
  },
})

// Reducers
export default slice.reducer

// Selectors
export const siteSelector = (state: RootState) => state.site

// Actions
export const { setBreadcrumbs } = slice.actions
