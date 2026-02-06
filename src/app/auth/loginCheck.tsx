import Wrapper from '@/src/components/Wrapper';
import { useValidateTokenQuery } from '@/src/redux/api/authApi/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function LoginCheck() {
	const router = useRouter();
	const [token, setToken] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			const t = await AsyncStorage.getItem('authToken');
			setToken(t);
		})();
	}, []);

	const { data: validateToken, isLoading } = useValidateTokenQuery(
		token ?? '',
		{
			skip: !token,
		},
	);

	useEffect(() => {
		if (token === null) return; // still loading token
		if (!isLoading) {
			if (validateToken?.status === true) {
				router.replace('/(tabs)');
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
