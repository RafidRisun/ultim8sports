import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function IdentifyFailed() {
	const router = useRouter();
	return (
		<Wrapper>
			<HeaderWithRoundBack title="" back={true} />
			<View style={tw`flex-1 w-full items-center justify-center gap-16 p-4`}>
				<Image
					source={require('@/assets/images/failed.png')}
					style={tw`w-70 h-70 `}
					contentFit="contain"
				/>
				<View style={tw`flex flex-col items-center gap-2`}>
					<Text style={tw`text-purple-300 text-lg font-poppinsSemiBold`}>
						We could not identify the card
					</Text>
					<Text style={tw`text-white/70 text-center font-poppins`}>
						Try scanning the card again or enter the details manually.
					</Text>
				</View>
				<View style={tw`flex flex-col w-full gap-2`}>
					<RoundedLitButton
						text="Scan Again"
						action={() => {
							router.replace('/screens/scanCard');
						}}
					/>
					<BrightRoundedButton
						text="Enter Manually"
						action={() => {
							router.push('/screens/manualCardInput');
						}}
					/>
				</View>
			</View>
		</Wrapper>
	);
}
