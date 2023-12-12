import { configureStore } from '@reduxjs/toolkit'
import PostModalReducer from '../PostModalSlice'
import GifModalReducer from '../GifModalSlice'
import GifSelectReducer from '../GifSelectSlice'
import EmojiSelectorReducer from '../EmojiSlectorSlice'
import TopHeaderReducer from '../TopHeaderVisible'
import CommentModalReducer from '../CommentModalSlice'
import CurrentUserReducer from '../CurrentUserSlice'

export const store = configureStore({
  reducer: {
    PostModal : PostModalReducer ,
    GifModal : GifModalReducer,
    SelectGif  : GifSelectReducer,
    SelectEmoji : EmojiSelectorReducer,
    TopHeader : TopHeaderReducer ,
    CommentModal : CommentModalReducer ,
    CurrentUser : CurrentUserReducer
  },
})


export type RootState = ReturnType<typeof store.getState>



export type AppDispatch = typeof store.dispatch