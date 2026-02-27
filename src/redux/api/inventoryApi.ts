import { api } from './api';

export const inventoryApi = api.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		addCard: builder.mutation<any, any>({
			query: formData => ({
				url: '/user/cards',
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData,
			}),
			invalidatesTags: ['inventory'],
		}),
		searchCard: builder.query<any, Params>({
			query: params => ({
				url: '/user/cards',
				method: 'GET',
				params: {
					card_store_type: params.card_store_type,
					search: params.search,
				},
			}),
			providesTags: ['inventory'],
		}),
		getCardDetails: builder.query<any, any>({
			query: params => ({
				url: `/user/cards/${params.id}`,
				method: 'GET',
				params: {
					filter: params.filter,
				},
			}),
			providesTags: ['inventory'],
		}),
	}),
});
export const {
	useAddCardMutation,
	useLazySearchCardQuery,
	useGetCardDetailsQuery,
} = inventoryApi;

type Params = {
	card_store_type: string;
	search: string;
};
