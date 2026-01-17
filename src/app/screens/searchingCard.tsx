import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function SearchingCard() {
	const { photoUri } = useLocalSearchParams();

	return (
		<Wrapper>
			<HeaderWithRoundBack title="" back={true} />
			<View style={tw`flex-1 flex-col items-center justify-start`}>
				<Image
					source={{ uri: photoUri as string }}
					style={tw`w-50 h-70 rounded-lg mt-8 border-4 border-purple-500`}
					contentFit="contain"
				/>
			</View>
		</Wrapper>
	);
}
