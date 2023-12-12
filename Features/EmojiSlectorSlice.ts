import { createSlice } from '@reduxjs/toolkit'


export interface EmojiState {
    isEmojiOpen: boolean
}

const initialState: EmojiState = {
    isEmojiOpen: false
}

export const EmojiSelectorSlice = createSlice({
    name: 'SelectEmoji',
    initialState,
    reducers: {
        OpenEmojiSelector: (state ) => {

            state.isEmojiOpen = true
        },
        CloseEmojiSelector: (state) => {
            state.isEmojiOpen = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { OpenEmojiSelector, CloseEmojiSelector } = EmojiSelectorSlice.actions

export default EmojiSelectorSlice.reducer