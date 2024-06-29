import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoslice";
import { baseApi } from "./api/api";

export const store = configureStore({
  reducer: {
    todos: todoReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
