import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useGetSalesRecordQuery } from '@/src/redux/api/salesApi';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

export default function SalesReport() {
	const router = useRouter();
	const [selectedFilter, setSelectedFilter] = React.useState<
		'1M' | '3M' | '1Y' | 'ALL'
	>('1M');

	const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;
	const { data: salesRecordData, isLoading, error } = useGetSalesRecordQuery();

	if (isLoading) {
		return (
			<Wrapper>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<ActivityIndicator size="large" color="#fff" />
				</View>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<HeaderWithRoundBack title="Sales Report" back={true} />
			<View style={tw`flex-1 flex-col items-center justify-start gap-2`}>
				<View style={tw`flex w-full items-center justify-center py-2`}>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View style={tw`flex flex-row items-center justify-center gap-2`}>
							<TouchableOpacity
								style={tw`flex p-2 ${selectedFilter === '1M' ? 'bg-gray-700/65 rounded-lg' : ''}`}
								onPress={() => setSelectedFilter('1M')}
							>
								<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
									Last 30 Days
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`flex p-2 ${selectedFilter === '3M' ? 'bg-gray-700/65 rounded-lg' : ''}`}
								onPress={() => setSelectedFilter('3M')}
							>
								<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
									Last 3 Months
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`flex p-2 ${selectedFilter === '1Y' ? 'bg-gray-700/65 rounded-lg' : ''}`}
								onPress={() => setSelectedFilter('1Y')}
							>
								<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
									Last 1 Year
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`flex p-2 ${selectedFilter === 'ALL' ? 'bg-gray-700/65 rounded-lg' : ''}`}
								onPress={() => setSelectedFilter('ALL')}
							>
								<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
									All Time
								</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</View>
				<View style={tw`flex flex-row w-full items-center gap-2`}>
					<RectangleGlass>
						<View style={tw`flex flex-col w-full items-start gap-2`}>
							<Text style={tw`text-xs font-poppinsLight text-white`}>
								TOTAL INVESTED
							</Text>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								$12,200
							</Text>
						</View>
					</RectangleGlass>
					<RectangleGlass>
						<View style={tw`flex flex-col w-full items-start gap-2`}>
							<Text style={tw`text-xs font-poppinsLight text-white`}>
								GROSS SALES
							</Text>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								$13,200
							</Text>
						</View>
					</RectangleGlass>
				</View>
				<RectangleGlassRow>
					<View style={tw`flex flex-col w-full items-start gap-2 px-2 py-1`}>
						<Text style={tw`text-xs font-poppinsLight text-white`}>
							TOTAL PROFIT
						</Text>
						<View style={tw`flex flex-row items-center gap-4`}>
							<Text style={tw`text-green-500 font-poppinsMedium text-lg`}>
								$12,200
							</Text>
							<View style={tw`flex px-2 py-1 bg-green-600/20 rounded-full`}>
								<Text style={tw`text-green-400 font-poppinsMedium text-xs`}>
									+8.2%
								</Text>
							</View>
						</View>
					</View>
				</RectangleGlassRow>
				<View style={tw`flex flex-col w-full pb-40 py-4 gap-4`}>
					<Text style={tw`text-white font-poppinsMedium text-lg`}>
						YOUR SOLD ITEMS
					</Text>
					<FlatList
						data={salesRecordData.data}
						keyExtractor={(_, index) => index.toString()}
						contentContainerStyle={tw`flex flex-col gap-4 pb-30`}
						renderItem={({ item }) => (
							<RectangleGlassRow>
								<TouchableOpacity
									style={tw`flex flex-row items-center justify-between w-full gap-4 pr-2`}
									onPress={() => {
										router.push('/inventory/saleRecord');
									}}
								>
									<View style={tw`flex flex-row gap-4`}>
										<Image
											source={{ uri: baseUrl + item.card_search.image }}
											style={tw`h-14 w-10 rounded-md`}
											contentFit="cover"
										/>
										<View style={tw`flex flex-col gap-1 justify-center`}>
											<Text
												style={tw`text-white font-poppinsSemiBold max-w-47 text-sm`}
											>
												{item.card_search.search_title}
											</Text>
											<Text style={tw`text-gray-300 font-poppins text-xs`}>
												{item.sold_date}
											</Text>
										</View>
									</View>
									<View style={tw`flex flex-col items-end`}>
										<Text style={tw`text-white font-poppins text-base`}>
											{item.sold_price}
										</Text>
										<Text style={tw`text-green-500 font-poppins text-sm`}>
											{item.marketValue}
										</Text>
									</View>
								</TouchableOpacity>
							</RectangleGlassRow>
						)}
					/>
				</View>
			</View>
		</Wrapper>
	);
}
