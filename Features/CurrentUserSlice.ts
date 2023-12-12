import { User } from '@/gql/graphql'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    currentUser: {
        id : string  | undefined ,
        email : string | undefined
    }
}

const initialState: UserState = {

    currentUser: {
        
        id: undefined,
        email : undefined

    }
}

export const CurrentUserSlice = createSlice({
    name: 'CurrentUser',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<Partial<User>>) => {

            state.currentUser.id = action.payload.id
            state.currentUser.email = action.payload.email
        },
        clearCurrentUser: (state) => {
            state.currentUser = {
                email: undefined,
                id: '',
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrentUser, clearCurrentUser } = CurrentUserSlice.actions

export default CurrentUserSlice.reducer