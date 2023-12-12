import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isOpen: boolean
}

const initialState: CounterState = {
  isOpen: false,
}

export const PostModalSlice = createSlice({
  name: 'PostModal',
  initialState,
  reducers: {
    OpenPostModal: (state) => {

      state.isOpen = true
    },
   ClosePostModal :(state) => {
    state.isOpen = false
   }
  },
})

// Action creators are generated for each case reducer function
export const { OpenPostModal , ClosePostModal } = PostModalSlice.actions

export default PostModalSlice.reducer