import React from 'react';
import {
	Dimensions,
	KeyboardAvoidingView,
	ScrollView,
	View,
} from 'react-native';
import tw from '../lib/tailwind';
import Wrapper from './Wrapper';

export default function KeyboardAvoidingWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const windowHeight = Dimensions.get('screen').height;
	return (
		<Wrapper>
			<KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
				<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
					<View
						style={[
							tw`flex-1 w-full p-4 gap-6 justify-center items-center`,
							{ height: windowHeight - 100 },
						]}
					>
						{children}
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</Wrapper>
	);
}
