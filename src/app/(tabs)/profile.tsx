import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';

export default function Profile() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Profile" />
			<View style={tw`flex flex-col items-center justify-start gap-5 mt-8`}>
				<RectangleGlassRow>
					<Text style={tw`text-white text-lg font-medium`}>
						Account Settings
					</Text>
				</RectangleGlassRow>
			</View>
		</Wrapper>
	);
}
