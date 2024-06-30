import { configureStore } from '@reduxjs/toolkit'
import counterslice  from './slices/counter/Counter'
export const store = configureStore({
  reducer: {
    counter : counterslice
  },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch