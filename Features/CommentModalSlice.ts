import { createSlice } from '@reduxjs/toolkit'


export interface CommentModalState {
    isOpen: boolean
}

const initialState: CommentModalState = {
    isOpen: false
}

export const CommentSelectorSlice = createSlice({
    name: 'CommentModal',
    initialState,
    reducers: {
        OpenCommentModal: (state ) => {

            state.isOpen = true
        },
        CloseCommentModal: (state) => {
            state.isOpen = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { OpenCommentModal, CloseCommentModal } = CommentSelectorSlice.actions

export default CommentSelectorSlice.reducer