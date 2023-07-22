import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from "../../helpers/constants";
import { getCookie } from "../../helpers/cookies";
import { UserParser, userListParser } from './userParser';

const userApis = createApi({
    reducerPath: 'userApis',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        prepareHeaders: (headers, { getState }) => {
            const token = getCookie("token");
            if (token) {
                headers.set('Authorization', `${token}`)
            }
            return headers;
        }
    }),
    keepUnusedDataFor: 0,
    tagTypes: ["User"],
    endpoints: build => ({
        getUserList: build.query({
            query: (payload) => ({
                url: process.env.REACT_APP_USER_READ_URL,
                method: "GET",
                body: payload
            }),
            transformResponse: (response) => userListParser(response),
            providesTags: ['User'],
            keepUnusedDataFor: 5,
        }),
        addNewUser: build.mutation({
            query: (payload) => ({
                url: process.env.REACT_APP_USER_CREATE_URL,
                method: "POST",
                body: payload
            }),
            transformResponse: (response) => UserParser(response),
            invalidatesTags: ['User'],
        }),
        updateUser: build.mutation({
            query: (payload) => ({
                url: process.env.REACT_APP_USER_UPDATE_URL,
                method: "PUT",
                body: payload
            }),
            transformResponse: (response) => UserParser(response),
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useGetUserListQuery, useAddNewUserMutation, useUpdateUserMutation } = userApis;
export default userApis;