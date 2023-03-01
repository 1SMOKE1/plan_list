import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPlan } from '../../types/interfaces/IPlan';


export const planListApi = createApi({
  reducerPath: 'planList/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3500/'
  }),
  endpoints: (build) => ({
    plan: build.query<IPlan[], string>({
      query: (id: string) => ({
        url: 'plan',
        params: {
          q: id
        }
      })
    }),
    searchPlan: build.query<IPlan[], string>({
      query: (search: string) => ({
        url: 'plan/search',
        params: {
          q: search
        }
      })
    })
  })
})