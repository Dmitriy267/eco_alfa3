import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const catsApi = createApi({
    reducerPath: 'catsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thecatapi.com/v1/',
    }),
    tagTypes: ['Cats'],
    endpoints: (builder) => ({
        getCats: builder.query({
            query: (num: string) =>
                `images/search?limit=${num}&breed_ids=abys&api_key=live_wKUvLHYdGljHV6YsMSUSCbiEC8Qc54fvG95Gt7vRgF4bCiaIFbXrDdiZWZkUZgxL`,
            providesTags: ['Cats'],
        }),
        deleteCats: builder.mutation({
            query: (id) => ({
                url: `images/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cats'],
        }),
    }),
});

export const { useGetCatsQuery, useDeleteCatsMutation } = catsApi;
