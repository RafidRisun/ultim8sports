import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';

export default function ManualCardInput() {
	const height = useWindowDimensions().height;
	return (
		<Wrapper>
			<HeaderWithRoundBack title="" back />
			<View style={tw`flex-1 w-full`}>
				<View style={tw`flex w-full items-center justify-center p-4`}>
					<Image
						source={require('@/assets/images/card1.jpg')}
						style={[tw`w-full rounded-xl `, { height: height / 3 }]}
						contentFit="contain"
					/>
				</View>
				<Text
					style={tw`text-white font-poppinsSemiBold text-lg p-4 w-full text-center`}
				>
					2003 TOPPS CHROME REFRACTOR #111 LEBRON JAMES ROOKIE RC PSA 10
				</Text>
			</View>
		</Wrapper>
	);
}
