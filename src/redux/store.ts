import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./AppReducers/WalletReducer";

export const store = configureStore({
  reducer: {
    walletReducer: walletReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
