import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TopHeader {
  isOpen: boolean
}

const initialState: TopHeader = {
  isOpen: true,
}

export const TopHeaderVisibleSlice = createSlice({
  name: 'TopHeader',
  initialState,
  reducers: {
    ShowTopHead: (state) => {

      state.isOpen = true
    },
   HideTopHead :(state) => {
    state.isOpen = false
   }
  },
})

// Action creators are generated for each case reducer function
export const { ShowTopHead , HideTopHead } = TopHeaderVisibleSlice.actions

export default TopHeaderVisibleSlice.reducer