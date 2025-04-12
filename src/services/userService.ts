import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

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
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getPostsByAccount: builder.query<IGPost[], string>({
      async queryFn(
        account
      ): Promise<{ data: IGPost[] } | { error: FetchBaseQueryError }> {
        try {
          const res = await fetch("/ig-post.json");
          const data: IGPost[] = await res.json();
          const filtered = data.filter((post) => post.account === account);
          return { data: filtered };
        } catch (err: any) {
          return {
            error: {
              status: 500,
              data: err.message || "Unknown error",
            },
          };
        }
      },
    }),
  }),
});

export const { useGetPostsByAccountQuery } = userApi;
