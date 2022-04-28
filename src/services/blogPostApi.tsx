import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  BlogPostsResponse,
  BlogPostResponse,
  BlogPostRatingResponse,
  RateBlogPost,
} from "../models/response.model";

export const blogPostApi = createApi({
  reducerPath: "blogPostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090/",
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["BlogPosts", "BlogPost", "BlogPostRating"],

  endpoints: (builder) => ({
    //TODO: pagination query
    getAllBlogPosts: builder.query<BlogPostsResponse, void>({
      query: () => ({
        url: "/api/blog-posts",
        method: "GET",
      }),
      providesTags: ["BlogPosts"],
    }),

    //TODO: pagination query
    getAllNormalBlogPosts: builder.query<BlogPostsResponse, void>({
      query: () => ({
        url: "/api/blog-posts?pinned=false",
        method: "GET",
      }),
      providesTags: ["BlogPosts"],
    }),

    getAllPinnedBlogPosts: builder.query<BlogPostsResponse, void>({
      query: () => ({
        url: "/api/blog-posts?pinned=true",
        method: "GET",
      }),
      providesTags: ["BlogPosts"],
    }),

    getBlogPost: builder.query<BlogPostResponse, string | undefined>({
      query: (post_id) => ({
        url: `/api/blog-posts/${post_id}`,
        method: "GET",
      }),
      providesTags: ["BlogPost"],
    }),

    getMyBlogPostRating: builder.query<
      BlogPostRatingResponse,
      string | undefined
    >({
      query: (post_id) => ({
        url: `/api/blog-posts/${post_id}/my-rating`,
        method: "GET",
      }),
      providesTags: ["BlogPostRating"],
    }),

    rateBlogPost: builder.mutation<
      RateBlogPost,
      { rating: number; postId: string | undefined }
    >({
      query: ({ postId, rating }) => ({
        url: `/api/blog-posts/${postId}/rating`,
        method: "POST",
        body: { rating },
      }),
      invalidatesTags: ["BlogPostRating"],
    }),
  }),
});

export const {
  useGetAllBlogPostsQuery,
  useGetAllNormalBlogPostsQuery,
  useGetAllPinnedBlogPostsQuery,
  useGetBlogPostQuery,
  useGetMyBlogPostRatingQuery,
  useRateBlogPostMutation,
} = blogPostApi;
