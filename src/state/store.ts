import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import ipAddressSlice from "./ipAddress"
import siteSlice from "./site"

const store = configureStore({
  reducer: {
    ipAddress: ipAddressSlice,
    site: siteSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type:
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
