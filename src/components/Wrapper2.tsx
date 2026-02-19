import React from 'react';
import { ScrollView, View } from 'react-native';
import tw from '../lib/tailwind';
import HeaderWithRoundBack from './HeaderWithRoundBack';
import Wrapper from './Wrapper';

export default function Wrapper2({ children }: { children: React.ReactNode }) {
	return (
		<Wrapper>
			<View style={tw`flex-1 w-full`}>
				<HeaderWithRoundBack title="Profile" />
				<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
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
