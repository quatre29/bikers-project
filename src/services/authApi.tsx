import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserLogin, UserRegister } from "../models/auth.model";
import { UserResponse } from "../models/response.model";
import { User } from "../models/user.model";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090/",
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Authentication"],

  endpoints: (builder) => ({
    register: builder.mutation<UserResponse, UserRegister>({
      query: (registerDetails) => ({
        url: "/api/users/",
        method: "POST",
        body: registerDetails,
      }),
      invalidatesTags: ["Authentication"],
    }),

    login: builder.mutation<UserResponse, UserLogin>({
      query: (loginDetails) => ({
        url: "/api/users/login",
        method: "POST",
        body: loginDetails,
      }),
      invalidatesTags: ["Authentication"],
    }),

    getMe: builder.query<UserResponse, void>({
      query: () => ({
        url: `/api/users/me`,
        method: "GET",
      }),
    }),

    getUsers: builder.query<UserResponse[], void>({
      query: () => ({
        url: `/api/users`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetMeQuery,
  useLoginMutation,
  useRegisterMutation,
} = authApi;
