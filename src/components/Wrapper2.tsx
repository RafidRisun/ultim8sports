import { router, usePathname } from 'expo-router';
import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import tw from '../lib/tailwind';
import HeaderWithRoundBack from './HeaderWithRoundBack';
import Wrapper from './Wrapper';

export default function Wrapper2({ children }: { children: React.ReactNode }) {
	const [refreshing, setRefreshing] = React.useState(false);
	const pathname = usePathname();

	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setTimeout(() => {
			router.replace(pathname as any);
			setRefreshing(false);
		}, 1000);
	}, [pathname]);

	return (
		<Wrapper>
			<View style={tw`flex-1 w-full`}>
				<HeaderWithRoundBack title="Profile" />
				<ScrollView
					style={tw`w-full`}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
					}
				>
					<View
						style={tw`flex flex-col items-center justify-start gap-5 mt-4 pb-30`}
					>
						{children}
					</View>
				</ScrollView>
			</View>
		</Wrapper>
	);
}
