import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ForumTopicResponse,
  ForumTopicsResponse,
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
  tagTypes: ["Topic", "Topics"],

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
  }),
});

export const { useGetTopicsByForumIdQuery, useGetTopicByIdQuery } =
  forumTopicsApi;
