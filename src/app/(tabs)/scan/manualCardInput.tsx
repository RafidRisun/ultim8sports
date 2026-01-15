import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

export default function ManualCardInput() {
	//const height = useWindowDimensions().height;
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Add Card Detailssss" back />
			<View style={tw`flex-1 w-full gap-4`}>
				<View style={tw`flex w-full items-center justify-center p-4`}>
					<Image
						source={require('@/assets/images/card1.jpg')}
						style={tw`w-60 rounded-md h-70`}
						contentFit="cover"
					/>
				</View>
				{/* <Text
					style={tw`text-white font-poppinsMedium text-lg p-4 w-full text-center`}
				>
					2003 TOPPS CHROME REFRACTOR #111 LEBRON JAMES ROOKIE RC PSA 10
				</Text>
				<View style={tw`flex flex-col gap-1 mb-6`}>
					<MaskedView
						style={tw`h-4`}
						maskElement={
							<View
								style={{
									// Transparent background because mask is based off alpha channel.
									backgroundColor: 'transparent',
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Text
									style={{
										fontSize: 10,
										color: 'black',
										fontWeight: 'bold',
									}}
								>
									SOLD PRICE
								</Text>
							</View>
						}
					>
						<LinearGradient
							// Background Linear Gradient
							colors={['#FFFFFF', '#8C52FF']}
							style={{ flex: 1, height: '100%' }}
						/>
					</MaskedView>
					<MaskedView
						style={tw`h-8`}
						maskElement={
							<View
								style={{
									// Transparent background because mask is based off alpha channel.
									backgroundColor: 'transparent',
									flex: 1,
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Text
									style={{
										fontSize: 28,
										color: 'black',
										fontWeight: 'bold',
									}}
								>
									$23,450
								</Text>
							</View>
						}
					>
						<LinearGradient
							// Background Linear Gradient
							colors={['#FFFFFF', '#8C52FF']}
							style={{ flex: 1, height: '100%' }}
						/>
					</MaskedView>
				</View> */}
				<RectangleGlassRow>
					<View style={tw`flex flex-col w-full p-2`}>
						<View style={tw`flex flex-col gap-2 flex-1`}>
							<Text style={tw`text-white/90 text-xs font-poppinsLight`}>
								label
							</Text>
							<View
								style={tw`justify-center pl-2 w-full h-10 border border-purple-100 rounded-md`}
							>
								<TextInput
									style={tw`flex-1 h-full text-white p-0 font-poppins`}
								/>
							</View>
						</View>
					</View>
				</RectangleGlassRow>
			</View>
		</Wrapper>
	);
}
