import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import { blogPostApi } from "../services/blogPostApi";
import authReducer from "./auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { blogCommentsApi } from "../services/blogCommentsApi";
import { userApi } from "../services/userApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [blogPostApi.reducerPath]: blogPostApi.reducer,
    [blogCommentsApi.reducerPath]: blogCommentsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    auth: authReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      blogPostApi.middleware,
      blogCommentsApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
