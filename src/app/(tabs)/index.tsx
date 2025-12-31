import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text } from 'react-native';

export default function Home() {
	return (
		<Wrapper>
			<ScrollView>
				{Array.from({ length: 50 }, (_, i) => (
					<Text key={i} style={tw`text-white text-center my-2`}>
						Home Screen Line {i + 1}
					</Text>
				))}
			</ScrollView>
		</Wrapper>
	);
}
