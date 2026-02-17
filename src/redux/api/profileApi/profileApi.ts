import { api } from '../api';

export const profileApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		updateProfile: builder.mutation<any, any>({
			query: formData => ({
				url: '/personalization',
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData,
			}),
			invalidatesTags: ['profile'],
		}),
		getProfile: builder.query<any, void>({
			query: () => ({
				url: '/get-profile',
				method: 'GET',
			}),
			providesTags: ['profile'],
		}),
	}),
});
export const { useUpdateProfileMutation, useGetProfileQuery } = profileApi;
