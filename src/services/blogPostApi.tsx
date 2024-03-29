import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BlogCommentReq, BlogPostReq } from "../models/req.models";
import {
  BlogPostsResponse,
  BlogPostResponse,
  BlogPostRatingResponse,
  RateBlogPost,
  BlogPostsComments,
  BlogComment,
  BlogCommentRes,
  BlogBookmarksRes,
} from "../models/response.model";
import { BlogPostCreation, BlogPostUpdate } from "../models/state.model";
import { BASE_URL } from "../utils/api";

export const blogPostApi = createApi({
  reducerPath: "blogPostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: [
    "BlogPosts",
    "BlogPostsByTag",
    "BlogPost",
    "BlogPostRating",
    "BlogComments",
    "BlogComment",
    "Bookmarks",
    "SearchedBlogPosts",
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

    getSearchedBlogPosts: builder.query<BlogPostsResponse, string>({
      query: (queryStr) => ({
        url: `/api/blog-posts/partial_name/${queryStr}`,
        method: "GET",
      }),
      providesTags: ["SearchedBlogPosts"],
    }),

    getBlogPostsByTag: builder.query<BlogPostsResponse, string>({
      query: (tag) => ({
        url: `/api/blog-posts?tag=${tag}`,
        method: "GET",
      }),
      providesTags: ["BlogPostsByTag"],
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
      BlogBookmarksRes,
      string | number | undefined
    >({
      query: (post_id) => ({
        url: `/api/blog-posts/${post_id}/bookmarks`,
        method: "GET",
      }),
      providesTags: ["Bookmarks"],
    }),

    getMyBookmarks: builder.query<BlogBookmarksRes, void>({
      query: () => ({
        url: "/api/users/my_bookmarks",
        method: "GET",
      }),
      providesTags: ["Bookmarks"],
    }),

    bookmarkPost: builder.mutation<BlogBookmarksRes, string>({
      query: (post_id) => ({
        url: `/api/blog-posts/${post_id}/bookmarks`,
        method: "POST",
      }),
      invalidatesTags: ["BlogPost", "Bookmarks"],
    }),

    unBookmarkPost: builder.mutation<BlogBookmarksRes, string>({
      query: (post_id) => ({
        url: `/api/blog-posts/${post_id}/bookmarks`,
        method: "DELETE",
      }),
      invalidatesTags: ["BlogPost", "Bookmarks"],
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
  useBookmarkPostMutation,
  useUnBookmarkPostMutation,
  useGetBlogPostsByTagQuery,
  useGetSearchedBlogPostsQuery,
  useGetMyBookmarksQuery,
} = blogPostApi;
