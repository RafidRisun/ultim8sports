import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function PrivacyPolicy() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Privacy Policy" back />
			<ScrollView style={tw`flex-1 w-full`}>
				<View style={tw`flex-1 w-full mt-6 gap-4`}>
					<Text
						style={tw`text-white/90 text-justify text-base font-poppinsRegular`}
					>
						It is a long established fact that a reader will be distract by the
						readable content of a page the when looking at its layout. The point
						of using a Lorem Ipsum is that it has a more-or-less and normal
						distribution of letters, as opposed to the using &quot;Content here,
						content here&quot;, making it look like readable English. Many
						desktop then publishing packages and web page editors for now use
					</Text>
					<Text
						style={tw`text-white/90 text-justify text-base font-poppinsRegular`}
					>
						Lorem Ipsum as their default model & text. It is a long established
						fact that a reader will be distract by the readable content of a
						page the when looking at its layout. The point of using a Lorem
						Ipsum is that it has a more-or-less and normal distribution of
						letters, as opposed to the using &quot;Content here, content
						here&quot;, making it look like readable English.
					</Text>
					<Text
						style={tw`text-white/90 text-justify text-base font-poppinsRegular`}
					>
						Many desktop then publishing packages and web page editors for now
						use Lorem Ipsum as their default model & text. It is a long
						established fact that a reader will be distract by the readable
						content of a page the when looking at its layout. The point of using
						a Lorem Ipsum is that it has a more normal and distribution.
					</Text>
				</View>
			</ScrollView>
		</Wrapper>
	);
}
