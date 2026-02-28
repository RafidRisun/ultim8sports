import { api } from './api';

export const salesApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		getSalesRecord: builder.query<any, void>({
			query: () => ({
				url: '/user/get-sale-records',
				method: 'GET',
			}),
			providesTags: ['sales'],
		}),
	}),
});
export const { useGetSalesRecordQuery } = salesApi;
