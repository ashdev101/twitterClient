import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    selectedGif: string
}

const initialState: CounterState = {
    selectedGif: "",
}

export const GifSelectSlice = createSlice({
    name: 'SelectGif',
    initialState,
    reducers: {
        SelecteGif: (state, action: PayloadAction<string>) => {

            state.selectedGif = action.payload
        },
        ClearGif: (state) => {
            state.selectedGif = ""
        }
    },
})

// Action creators are generated for each case reducer function
export const { SelecteGif, ClearGif } = GifSelectSlice.actions

export default GifSelectSlice.reducer