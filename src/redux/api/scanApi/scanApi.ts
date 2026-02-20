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
					year: params.year,
					condition: params.condition,
					number: params.number,
					search_title: params.search_title,
				},
			}),
			providesTags: ['aiSearch'],
		}),
		addCard: builder.mutation<any, any>({
			query: formData => ({
				url: '/user/cards',
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData,
			}),
			invalidatesTags: ['Cards'],
		}),
	}),
});
export const {
	useAiSearchMutation,
	useLazyStartScrapeQuery,
	useAddCardMutation,
} = scanApi;

type Params = {
	year: number;
	condition: string;
	number: string;
	search_title: string;
};
