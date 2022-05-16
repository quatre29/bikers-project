import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserResponse } from "../models/response.model";
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
  tagTypes: ["User", "Users"],

  endpoints: (builder) => ({
    getUserById: builder.query<UserResponse, string>({
      query: (user_id) => ({
        url: `/api/users/${user_id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
