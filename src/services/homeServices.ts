import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IGPost = {
  id: number;
  location: string;
  account: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

type IGStory = {
  id: number;
  name: string;
  avatar: string;
};

const isDev = process.env.NODE_ENV === "development";
const baseUrl = isDev ? "http://localhost:3004/" : "";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getIGStory: builder.query<IGStory[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return isDev ? `stories/${id}` : `ig-story.json`;
        }
        return isDev ? "stories" : "ig-story.json";
      },
    }),
    getIGPost: builder.query<IGPost[], number | "all">({
      query: (id) => {
        if (id !== "all") {
          return isDev ? `posts/${id}` : `ig-post.json`;
        }
        return isDev ? "posts" : "ig-post.json";
      },
    }),
  }),
});

export const { useGetIGStoryQuery, useGetIGPostQuery } = homeApi;
