import { BlogCommentReq } from "../models/req.models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

import {
  BlogPostsComments,
  BlogComment,
  BlogCommentRes,
} from "../models/response.model";

export const blogCommentsApi = createApi({
  reducerPath: "blogCommentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090/",
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["BlogComments", "BlogComment"],

  endpoints: (builder) => ({
    postBlogComment: builder.mutation<BlogCommentRes, BlogCommentReq>({
      query: (body) => ({
        url: `/api/blog-posts/${body.post_id}/comments`,
        method: "POST",
        body: body.comment,
      }),
      invalidatesTags: ["BlogComments"],
    }),

    getBlogPostComments: builder.query<BlogPostsComments, string>({
      query: (post_id) => ({
        url: `/api/blog-posts/${post_id}/comments`,
        method: "GET",
      }),
      providesTags: ["BlogComments"],
    }),

    updateBlogComment: builder.mutation<BlogCommentRes, BlogCommentReq>({
      query: (body) => ({
        url: `/api/blog-posts/${body.post_id}/comments/${body.comment_id}`,
        method: "PATCH",
        body: body.comment,
      }),
      invalidatesTags: ["BlogComments"],
    }),

    deleteBlogComment: builder.mutation<
      void,
      { post_id: string; comment_id: string }
    >({
      query: ({ post_id, comment_id }) => ({
        url: `/api/blog-posts/${post_id}/comments/${comment_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["BlogComments"],
    }),
  }),
});

export const {
  useGetBlogPostCommentsQuery,
  usePostBlogCommentMutation,
  useDeleteBlogCommentMutation,
  useUpdateBlogCommentMutation,
} = blogCommentsApi;
