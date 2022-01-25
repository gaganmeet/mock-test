import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://flipkart-email-mock.now.sh/'

export const mailApi = createApi({
  reducerPath: 'mailApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMails: builder.query({
      query: () => '/',
    }),
    getBody: builder.query({
      query: (id) => `/?id=${id}`,
    }),
  }),
})

export const { useGetMailsQuery, useLazyGetBodyQuery } = mailApi
