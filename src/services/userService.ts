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

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
  endpoints: (builder) => ({
    getPostsByAccount: builder.query<IGPost[], string>({
      query: (account) => {
        return `posts?account=${account}`;
      },
    }),
  }),
});

export const { useGetPostsByAccountQuery } = userApi;
