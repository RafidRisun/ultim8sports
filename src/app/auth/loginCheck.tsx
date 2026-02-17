import Wrapper from '@/src/components/Wrapper';
import { useValidateTokenQuery } from '@/src/redux/api/authApi/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function LoginCheck() {
	const router = useRouter();
	const [token, setToken] = useState<string | null | undefined>(undefined);

	// useEffect(() => {
	// 	(async () => {
	// 		const t = await AsyncStorage.getItem('authToken');
	// 		setToken(t);
	// 	})();
	// }, []);

	useEffect(() => {
		async function loadToken() {
			const t = await AsyncStorage.getItem('authToken');
			setToken(t);
		}

		loadToken();
	}, []);

	const { data: validateToken, isLoading } = useValidateTokenQuery(
		token ?? '',
		{
			skip: !token,
		},
	);

	async function storeAvatar(avatarUrl?: string | null) {
		try {
			if (avatarUrl) {
				await AsyncStorage.setItem('user_avatar', avatarUrl);
			} else {
				await AsyncStorage.removeItem('user_avatar');
			}
		} catch (e) {
			console.error('Failed to store avatar:', e);
		}
	}

	useEffect(() => {
		// `undefined` means token is still being loaded; `null` means loaded but not present
		if (token === undefined) return; // still loading token

		if (!isLoading) {
			if (validateToken?.status === true) {
				// console.log(validateToken?.data?.avatar);
				storeAvatar(validateToken?.data?.avatar_url).then(() => {
					router.replace('/(tabs)');
				});
			} else {
				router.replace('/auth');
			}
		}
	}, [token, isLoading, validateToken, router]);

	return (
		<Wrapper>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size="large" color="#fff" />
			</View>
		</Wrapper>
	);
}
