import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserLogin, UserRegister } from "../models/auth.model";
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

  endpoints: (builder) => ({
    register: builder.mutation<User, UserRegister>({
      query: (registerDetails) => ({
        url: "/api/users/",
        method: "POST",
        body: registerDetails,
      }),
    }),

    login: builder.mutation<User, UserLogin>({
      query: (loginDetails) => ({
        url: "/api/users/login",
        method: "POST",
        body: loginDetails,
      }),
    }),

    getUserById: builder.query<User, string>({
      query: (user_id) => `/api/users/${user_id}`,
    }),
  }),
});

export const { useGetUserByIdQuery, useLoginMutation, useRegisterMutation } =
  authApi;
