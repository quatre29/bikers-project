import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BlogBookmarksRes,
  UserResponse,
  UsersResponse,
} from "../models/response.model";
import { User } from "../models/user.model";
import { BASE_URL } from "../utils/api";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
  }),
});

export const { useGetUserByIdQuery, useGetUsersBySearchQuery } = userApi;
