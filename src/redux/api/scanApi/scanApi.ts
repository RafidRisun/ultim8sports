import { api } from '../api';

export const scanApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		aiSearch: builder.mutation<any, any>({
			query: formData => ({
				url: '/ai-search',
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData,
			}),
			invalidatesTags: ['aiSearch'],
		}),
		startScrape: builder.query<any, Params>({
			query: params => ({
				url: '/start-scrape',
				method: 'GET',
				params: {
					search_title: params.search_title,
				},
			}),
			providesTags: ['aiSearch'],
		}),
	}),
});
export const { useAiSearchMutation, useLazyStartScrapeQuery } = scanApi;

type Params = {
	search_title: string;
};
