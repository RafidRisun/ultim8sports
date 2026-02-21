import CardDetailRow from '@/src/components/CardDetailRow';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function SaleHistoryDetails() {
	const saleData = useLocalSearchParams().saleData;
	const [parsedSaleData, setParsedSaleData] = useState<any>(null);

	useEffect(() => {
		if (saleData) {
			try {
				const parsedData =
					typeof saleData === 'string' ? JSON.parse(saleData) : saleData;
				setParsedSaleData(parsedData);
				console.log('Parsed saleData:', parsedData);
			} catch (e) {
				console.error('Failed to parse saleData:', e);
			}
		}
	}, [saleData]);

	return (
		<Wrapper>
			<HeaderWithRoundBack title="Sale Details" back />
			<ScrollView style={tw`w-full`}>
				<View style={tw`flex-1 w-full gap-4 pb-50`}>
					<View style={tw`flex w-full items-center justify-center p-4`}>
						<Image
							source={{ uri: parsedSaleData?.image_url }}
							style={tw`w-60 rounded-md h-70`}
							contentFit="cover"
						/>
					</View>
					<Text
						style={tw`text-white font-poppinsMedium text-center text-lg px-4`}
					>
						{parsedSaleData?.card_title || 'Card Title Unavailable'}
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
										${parsedSaleData?.price || '0'}
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
							<CardDetailRow
								label="Current Market Value"
								content={`$${parsedSaleData?.price || '0'}`}
							/>
							<CardDetailRow
								label="Sale Date"
								content={parsedSaleData?.sold_date || 'Unknown'}
							/>
							<CardDetailRow
								label="Status"
								content={parsedSaleData?.status || 'Unknown'}
							/>
						</View>
					</RectangleGlassRow>
				</View>
			</ScrollView>
		</Wrapper>
	);
}
