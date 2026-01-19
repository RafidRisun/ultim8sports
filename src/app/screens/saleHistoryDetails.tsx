import CardDetailRow from '@/src/components/CardDetailRow';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function SaleHistoryDetails() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Sale Details" back />
			<ScrollView style={tw`w-full`}>
				<View style={tw`flex-1 w-full gap-4 pb-50`}>
					<View style={tw`flex w-full items-center justify-center p-4`}>
						<Image
							source={require('@/assets/images/card1.jpg')}
							style={tw`w-60 rounded-md h-70`}
							contentFit="cover"
						/>
					</View>
					<Text
						style={tw`text-white font-poppinsMedium text-center text-lg px-4`}
					>
						2003 TOPPS CHROME REFRACTOR #111 LEBRON JAMES ROOKIE RC PSA 10
					</Text>
					<View>
						<Text
							style={tw`text-white/90 text-xs font-poppinsLight w-full text-center`}
						>
							SOLD PRICE{' '}
						</Text>
						<MaskedView
							style={tw`flex-1 h-12`}
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
											fontSize: 36,
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
					</View>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-5 p-3`}>
							<CardDetailRow label="Current Market Value" content="$123,450" />
							<CardDetailRow label="Sale Date" content="Jan 15, 2024" />
							<CardDetailRow label="Listing Type" content="Auction" />
						</View>
					</RectangleGlassRow>
				</View>
			</ScrollView>
		</Wrapper>
	);
}
