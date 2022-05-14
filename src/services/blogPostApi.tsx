import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BlogCommentReq, BlogPostReq } from "../models/req.models";
import {
  BlogPostsResponse,
  BlogPostResponse,
  BlogPostRatingResponse,
  RateBlogPost,
  BlogPostBookmarks,
  BlogPostsComments,
  BlogComment,
  BlogCommentRes,
} from "../models/response.model";
import { BlogPostCreation, BlogPostUpdate } from "../models/state.model";

export const blogPostApi = createApi({
  reducerPath: "blogPostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090/",
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: [
    "BlogPosts",
    "BlogPost",
    "BlogPostRating",
    "BlogComments",
    "BlogComment",
    "Bookmarks",
  ],

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

    createBlogPost: builder.mutation<BlogPostResponse, BlogPostReq>({
      query: (body) => ({
        url: `/api/blog-posts`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["BlogPosts"],
    }),

    getBookmarksByPost: builder.query<
      BlogPostBookmarks,
      string | number | undefined
    >({
      query: (post_id) => ({
        url: `/api/blog-posts/${post_id}/bookmarks`,
        method: "GET",
      }),
      providesTags: ["Bookmarks"],
    }),

    pinBlogPost: builder.mutation<
      BlogPostResponse,
      {
        post_id: string | number | undefined;
        body: { pinned: boolean | undefined };
      }
    >({
      query: (body) => ({
        url: `/api/blog-posts/${body.post_id}/pin`,
        method: "PATCH",
        body: body.body,
      }),
      invalidatesTags: ["BlogPosts", "BlogPost"],
    }),

    deleteBlogPost: builder.mutation<void, string | number | undefined>({
      query: (post_id) => ({
        url: `/api/blog-posts/${post_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BlogPosts"],
    }),

    updateBlogPost: builder.mutation<BlogPostResponse, BlogPostUpdate>({
      query: (body) => ({
        url: `/api/blog-posts/${body.post_id}/edit`,
        method: "PATCH",
        body: body.body,
      }),
      invalidatesTags: ["BlogPosts", "BlogPost"],
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
  useCreateBlogPostMutation,
  useGetBookmarksByPostQuery,
  usePinBlogPostMutation,
  useDeleteBlogPostMutation,
  useUpdateBlogPostMutation,
} = blogPostApi;
