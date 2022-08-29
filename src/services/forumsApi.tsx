import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ForumCategoriesResponse,
  ForumCategoryResponse,
  ForumResponse,
  ForumsByCategoryResponse,
} from "../models/forumResponse.model";
import { BASE_API } from "../utils/api";

export const forumsApi = createApi({
  reducerPath: "forumsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Forums", "Categories", "SubForums", "Category", "Forum"],

  endpoints: (builder) => ({
    getForumCategories: builder.query<ForumCategoriesResponse, void>({
      query: () => ({
        url: "/api/forum/categories",
        method: "GET",
      }),
      providesTags: ["Categories"],
    }),

    getForumsByCategoryId: builder.query<ForumsByCategoryResponse, string>({
      query: (category_id) => ({
        url: `/api/forum/categories/${category_id}/forums`,
        method: "GET",
      }),
      providesTags: ["Forums"],
    }),

    getSubForumsByForumId: builder.query<ForumsByCategoryResponse, string>({
      query: (forum_id) => ({
        url: `/api/forum/${forum_id}/sub-forums`,
        method: "GET",
      }),
      providesTags: ["SubForums"],
    }),

    getForumCategoryById: builder.query<ForumCategoryResponse, string>({
      query: (category_id) => ({
        url: `/api/forum/categories/${category_id}`,
        method: "GET",
      }),
      providesTags: ["Category"],
    }),

    getForumById: builder.query<ForumResponse, string>({
      query: (forum_id) => ({
        url: `/api/forum/${forum_id}`,
        method: "GET",
      }),
      providesTags: ["Forum"],
    }),
  }),
});

export const {
  useGetForumCategoriesQuery,
  useGetForumsByCategoryIdQuery,
  useGetSubForumsByForumIdQuery,
  useGetForumCategoryByIdQuery,
  useGetForumByIdQuery,
} = forumsApi;
