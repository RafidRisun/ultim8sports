import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export default function SalesHistory() {
	const router = useRouter();
	const scrapedData = useLocalSearchParams().scrapeData;
	const [parsedScrapeData, setParsedScrapeData] = React.useState<any>(null);

	useEffect(() => {
		if (scrapedData) {
			try {
				const parsedData =
					typeof scrapedData === 'string'
						? JSON.parse(scrapedData)
						: scrapedData;
				setParsedScrapeData(parsedData);
				console.log('Parsed scrapedData:', parsedData);
			} catch (e) {
				console.error('Failed to parse scrapedData:', e);
			}
		}
	}, [scrapedData]);

	return (
		<Wrapper>
			<HeaderWithRoundBack title="Sales History" back />
			<View style={tw`flex-1 w-full gap-4 pt-4`}>
				{/* <View
					style={tw`flex flex-row w-full items-center border border-white/50 rounded-lg gap-3 px-4 py-1`}
				>
					<SvgXml xml={iconSearch} />
					<TextInput
						placeholder="Search players, teams, leagues..."
						style={tw`flex-1 text-white font-poppinsLight`}
						placeholderTextColor={'#989898'}
					/>
				</View> */}
				<Text style={tw`text-white font-poppinsMedium text-lg`}>
					Top Results
				</Text>
				<FlatList
					data={parsedScrapeData?.data?.ebay_response || []}
					keyExtractor={(item, index) => index.toString()}
					contentContainerStyle={tw`flex flex-col gap-4 pb-30`}
					renderItem={({ item }) => (
						<RectangleGlassRow key={item}>
							<TouchableOpacity
								style={tw`flex flex-row items-center justify-between w-full gap-4 pr-2`}
								onPress={() =>
									router.push({
										pathname: '/scan/saleHistoryDetails',
										params: { saleData: JSON.stringify(item) },
									})
								}
							>
								<View style={tw`flex flex-row flex-1 gap-4`}>
									<Image
										source={{ uri: item.image_url }}
										style={tw`h-14 w-10 rounded-md`}
										contentFit="cover"
									/>
									<View style={tw`flex flex-col gap-1 justify-center flex-1`}>
										<Text style={tw`text-white font-poppinsSemiBold text-xs`}>
											{item.card_title}
										</Text>
										<Text style={tw`text-white font-poppins text-base`}>
											${item.price}
										</Text>
									</View>
								</View>
							</TouchableOpacity>
						</RectangleGlassRow>
					)}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</Wrapper>
	);
}
