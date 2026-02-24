import { iconSearch } from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useLazySearchCardQuery } from '@/src/redux/api/inventoryApi';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
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
	id: number;
	card_name: string;
	search_title: string;
	asking_price: string;
	image: string;
	year: string;
	set_name: string;
	condition: string | null;
	number: string | null;
};

export default function SearchCard() {
	const router = useRouter();
	// const scrapedData = useLocalSearchParams().scrapeData;
	// const [parsedScrapeData, setParsedScrapeData] = useState<any>(null);
	const [searchQuery, setSearchQuery] = useState('');
	// const [isScrapeLoading, setIsScrapeLoading] = useState(false);
	const [data, setData] = useState<Data[]>([]);

	const [searchInventory, { isLoading: isSearchLoading }] =
		useLazySearchCardQuery();

	async function handleSearch() {
		const params = {
			card_store_type: 'Inventory',
			search: searchQuery,
		};
		try {
			const response = await searchInventory(params).unwrap();
			// console.log('Search Inventory Params:', params);
			// console.log('Search Inventory Result:', response);
			if (response?.data) {
				setData(response.data);
				// console.log('Search Inventory Data:', data);
			} else {
				Alert.alert('No Results', 'No cards found matching your search.');
			}
		} catch (error) {
			console.error('Search Inventory Error:', error);
			Alert.alert('Error', 'Failed to search inventory. Please try again.');
		}
	}

	return (
		<Wrapper>
			<HeaderWithRoundBack title="Search Card" back />
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
						onPress={handleSearch}
					>
						<Text style={tw`text-white font-poppinsMedium`}>Search</Text>
					</TouchableOpacity>
				</View>
				<Text style={tw`text-white font-poppinsMedium text-lg`}>
					Top Results
				</Text>
				{isSearchLoading ? (
					<Text style={tw`text-white font-poppinsMedium text-center mt-4`}>
						Loading...
					</Text>
				) : (
					<FlatList
						data={data}
						keyExtractor={(item, index) => index.toString()}
						contentContainerStyle={tw`flex flex-col gap-4 pb-30`}
						renderItem={({ item }) => (
							<RectangleGlassRow key={item.id}>
								<TouchableOpacity
									style={tw`flex flex-row items-center justify-between w-full gap-4 pr-2`}
									onPress={() =>
										router.push({
											pathname: '/scan/manualCardInput',
											params: {
												item: JSON.stringify(item),
											},
										})
									}
								>
									<View style={tw`flex flex-row flex-1 gap-4`}>
										<Image
											source={{
												uri: 'http://10.10.10.65:8010' + item.image,
											}}
											style={tw`h-14 w-10 rounded-md`}
											contentFit="cover"
										/>
										<View style={tw`flex flex-col gap-1 justify-center flex-1`}>
											<Text style={tw`text-white font-poppinsSemiBold text-xs`}>
												{item.card_name} {item.set_name} {item.number}{' '}
												{item.year}
											</Text>
											<Text style={tw`text-white font-poppins text-base`}>
												${item.asking_price}
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
