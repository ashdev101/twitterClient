import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isOpen: boolean
}

const initialState: CounterState = {
  isOpen: false,
}

export const GifModalSlice = createSlice({
  name: 'GifModal',
  initialState,
  reducers: {
    OpenGifModal: (state) => {

      state.isOpen = true
    },
   CloseGifModal :(state) => {
    state.isOpen = false
   }
  },
})

// Action creators are generated for each case reducer function
export const { OpenGifModal , CloseGifModal } = GifModalSlice.actions

export default GifModalSlice.reducer