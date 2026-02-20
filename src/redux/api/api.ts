// import { storage } from '@/src/lib/mmkv_store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface BaseQueryArgs extends AxiosRequestConfig {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
	body?: any;
	headers?: Record<string, string>;
}

const baseQueryWithRath: BaseQueryFn<
	BaseQueryArgs,
	unknown,
	unknown
> = async args => {
	// const token = AsyncStorage.getItem('token');
	// const token = storage.getString('token');
	// const token = await SecureStore.getItemAsync('authToken');
	const token = await AsyncStorage.getItem('authToken');
	console.log('REDUX', token);
	//console.log('API REQUEST:', args);

	try {
		const result: AxiosResponse = await axios({
			baseURL: 'http://10.10.10.65:8010/api',
			...args,
			url: args.url,
			method: args.method,
			data: args.body,
			headers: {
				...args.headers,
				Authorization: token ? `Bearer ${token}` : '',
			},
		});
		if (typeof result?.data === 'string') {
			// if (!result.data.endsWith('}')) {
			const withCurly = (result.data += '}');
			return { data: JSON.parse(withCurly) };
			// }
		}
		if (typeof result?.data === 'object') {
			return { data: result?.data };
		}

		return { data: result?.data };
	} catch (error: any) {
		if (error.response?.data) {
			if (typeof error.response?.data === 'string') {
				const withCurly = (error.response.data += '}');
				return { error: JSON.parse(withCurly) };
			} else {
				return { error: error.response?.data };
			}
		}
		return {
			error: {
				status: error.response?.status || 500,
				data: error.message || 'Something went wrong',
			},
		};
	}
};

// Define the `createApi` with appropriate types
export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRath,
	endpoints: () => ({}),
	tagTypes: ['auth', 'profile', 'aiSearch', 'Cards'],
});
