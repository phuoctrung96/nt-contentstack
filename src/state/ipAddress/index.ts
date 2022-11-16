/****************************************************

    State: IP Address

****************************************************/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

import type { RootState, AppDispatch } from "../store"

interface IpState {
  ip?: string
  status: "idle" | "loading" | "succeeded" | "failed"
  error?: string
}

const initialState: IpState = {
  ip: undefined,
  status: "idle",
  error: undefined,
}

// Slice
const slice = createSlice({
  name: "ipAddress",
  initialState,
  reducers: {
    setIpAddress: (state, action) => {
      const { payload } = action
      state.ip = payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getIpAddress.pending, state => {
        state.status = "loading"
      })
      .addCase(getIpAddress.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.ip = action.payload
      })
      .addCase(getIpAddress.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
      })
  },
})

// Reducers
export default slice.reducer

// Selectors
export const ipAddressSelector = (state: RootState) => state.ipAddress

// Actions
export const { setIpAddress } = slice.actions

// Thunks
export const getIpAddress = createAsyncThunk(
  "ipAddress/getIpAddress",
  async () => {
    const response = await axios.get("https://api.ipify.org")
    return response.data
  }
)
