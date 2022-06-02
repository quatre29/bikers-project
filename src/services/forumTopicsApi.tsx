import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ForumTopicResponse,
  ForumTopicsResponse,
  ReplyBody,
  TopicRepliesResponse,
  TopicReplyResponse,
} from "../models/forumTopics.model";

export const forumTopicsApi = createApi({
  reducerPath: "forumTopicsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9090/",
    prepareHeaders(headers) {
      return headers;
    },
    credentials: "include",
  }),
  tagTypes: ["Topic", "Topics", "Replies"],

  endpoints: (builder) => ({
    getTopicById: builder.query<ForumTopicResponse, string>({
      query: (topic_id) => ({
        url: `/api/forum/_/topics/${topic_id}`,
        method: "GET",
      }),
      providesTags: ["Topic"],
    }),

    getTopicsByForumId: builder.query<ForumTopicsResponse, string>({
      query: (forum_id) => ({
        url: `/api/forum/${forum_id}/topics`,
        method: "GET",
      }),
      providesTags: ["Topics"],
    }),

    getTopicReplies: builder.query<TopicRepliesResponse, string>({
      query: (topic_id) => ({
        url: `/api/forum-replies/${topic_id}/replies`,
        method: "GET",
      }),
      providesTags: ["Replies"],
    }),

    addNewReply: builder.mutation<TopicReplyResponse, ReplyBody>({
      query: (body) => ({
        url: `/api/forum-replies`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Replies"],
    }),

    editReply: builder.mutation<
      TopicReplyResponse,
      { reply_id: string; body: string }
    >({
      query: ({ body, reply_id }) => ({
        url: `/api/forum-replies/${reply_id}`,
        method: "PATCH",
        body: { body },
      }),
      invalidatesTags: ["Replies"],
    }),

    deleteReply: builder.mutation<void, string>({
      query: (reply_id) => ({
        url: `/api/forum-replies/${reply_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Replies"],
    }),
  }),
});

export const {
  useGetTopicsByForumIdQuery,
  useGetTopicByIdQuery,
  useGetTopicRepliesQuery,
  useAddNewReplyMutation,
  useEditReplyMutation,
  useDeleteReplyMutation,
} = forumTopicsApi;
