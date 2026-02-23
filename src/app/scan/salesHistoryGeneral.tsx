import { iconSearch } from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useLazyStartScrapeQuery } from '@/src/redux/api/scanApi/scanApi';
import { Image } from 'expo-image';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
	Alert,
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

type Data = {
	value: number;
};

export default function SalesHistoryGeneral() {
	const router = useRouter();
	const scrapedData = useLocalSearchParams().scrapeData;
	const [parsedScrapeData, setParsedScrapeData] = useState<any>(null);
	const [searchQuery, setSearchQuery] = useState('');
	const [isScrapeLoading, setIsScrapeLoading] = useState(false);
	const [data, setData] = useState<Data[]>([]);

	const [triggerScrape, { isLoading }] = useLazyStartScrapeQuery();

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

	async function handleTriggerScrape() {
		setIsScrapeLoading(true);
		try {
			const search_title = searchQuery.trim();
			const scrapeResult = await triggerScrape({ search_title }).unwrap();
			console.log('Scrape Result:', scrapeResult);
			if (
				scrapeResult &&
				scrapeResult.data &&
				scrapeResult.data.total_count > 0
			) {
				try {
					const parsed =
						typeof scrapeResult === 'string'
							? JSON.parse(scrapeResult)
							: scrapeResult;
					setParsedScrapeData(parsed);
					// console.log('Received scrapeData:', parsed);
					const chartData: Data[] = parsed.data.ebay_response
						.map((item: any) => {
							const price = parseFloat(item.price);
							if (isNaN(price)) return null;
							return { value: price };
						})
						.filter((item: Data | null): item is Data => item !== null);
					setData(chartData);
					// console.log('Chart Data:', chartData);
					// console.log('Chart Data Length:', chartData.length);
					setIsScrapeLoading(false);
				} catch (e) {
					console.error('Failed to parse scrapeData:', e);
					setParsedScrapeData(null);
					setIsScrapeLoading(false);
				}
			}
			if (scrapeResult?.data?.total_count === 0) {
				Alert.alert(
					'No market data found',
					'We were unable to find any market data for this card. Please check the details and try again.',
				);
				setData([]);
				setIsScrapeLoading(false);
			}
		} catch (scrapeError) {
			console.error('Scrape Error:', scrapeError);
		}
	}

	return (
		<Wrapper>
			<HeaderWithRoundBack title="Sales History" back />
			<View style={tw`flex-1 w-full gap-4 pt-4`}>
				<View
					style={tw`flex flex-row w-full items-center border border-white/50 rounded-lg gap-3 px-4 py-1`}
				>
					<SvgXml xml={iconSearch} />
					<TextInput
						placeholder="Search players, teams, leagues..."
						style={tw`flex-1 text-white font-poppinsLight`}
						placeholderTextColor={'#989898'}
						value={searchQuery}
						onChangeText={text => {
							setSearchQuery(text);
						}}
					/>
					<TouchableOpacity
						style={tw`px-4 py-1 bg-purple-600/40 border border-white/50 rounded-md items-center`}
						onPress={handleTriggerScrape}
					>
						<Text style={tw`text-white font-poppinsMedium`}>Search</Text>
					</TouchableOpacity>
				</View>
				<Text style={tw`text-white font-poppinsMedium text-lg`}>
					Top Results
				</Text>
				{isScrapeLoading ? (
					<Text style={tw`text-white font-poppinsMedium text-center mt-4`}>
						Loading...
					</Text>
				) : (
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
				)}
			</View>
		</Wrapper>
	);
}
