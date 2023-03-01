import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const planListApi = createApi({
  reducerPath: 'planList/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3500/'
  }),
  endpoints: (build) => ({
    plan: build.query<any, string>({
      query: (id: string) => ({
        url: 'plan',
        params: {
          q: id
        }
      })
    })
  })
})