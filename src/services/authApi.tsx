import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserLogin, UserRegister } from "../models/auth.model";
import { UserResponse } from "../models/response.model";
import { User, UserEdit } from "../models/user.model";
import { BASE_URL } from "../utils/api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Authentication", "Me"],

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

    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/api/users/logout",
        method: "POST",
      }),
    }),

    getMe: builder.query<UserResponse, void>({
      query: () => ({
        url: `/api/users/me`,
        method: "GET",
      }),
      providesTags: ["Me"],
    }),

    updateMe: builder.mutation<UserResponse, UserEdit>({
      query: (body) => ({
        url: "/api/users/update_me",
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Me"],
    }),
  }),
});

export const {
  useLazyGetMeQuery,
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useUpdateMeMutation,
} = authApi;
