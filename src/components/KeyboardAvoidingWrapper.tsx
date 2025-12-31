import React from 'react';
import {
	Dimensions,
	KeyboardAvoidingView,
	ScrollView,
	View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import tw from '../lib/tailwind';
import Wrapper from './Wrapper';

export default function KeyboardAvoidingWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const windowHeight = Dimensions.get('screen').height;
	const { top, bottom } = useSafeAreaInsets();
	return (
		<Wrapper>
			<KeyboardAvoidingView behavior="padding" style={tw`flex-1 w-full`}>
				<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
					<View
						style={[
							tw`flex-1 w-full gap-6 justify-center items-center`,
							{ height: windowHeight - top - bottom },
						]}
					>
						{children}
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</Wrapper>
	);
}
