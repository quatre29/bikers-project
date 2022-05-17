import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BlogBookmarksRes,
  UserResponse,
  UsersResponse,
} from "../models/response.model";
import { User } from "../models/user.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090/",
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["User", "Users", "SearchedUsers", "MyBookmarks"],

  endpoints: (builder) => ({
    getUserById: builder.query<UserResponse, string>({
      query: (user_id) => ({
        url: `/api/users/${user_id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getUsersBySearch: builder.query<UsersResponse, string>({
      query: (queryString) => ({
        url: `/api/users/partial_name/${queryString}`,
        method: "GET",
      }),
      providesTags: ["SearchedUsers"],
    }),

    getMyBookmarks: builder.query<BlogBookmarksRes, void>({
      query: () => ({
        url: "/api/users/my_bookmarks",
        method: "GET",
      }),
      providesTags: ["MyBookmarks"],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetUsersBySearchQuery,
  useGetMyBookmarksQuery,
} = userApi;
