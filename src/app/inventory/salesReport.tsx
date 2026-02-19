import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
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
						data={soldItemData}
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
											source={require('@/assets/images/card1.jpg')}
											style={tw`h-14 w-10 rounded-md`}
											contentFit="cover"
										/>
										<View style={tw`flex flex-col gap-1 justify-center`}>
											<Text style={tw`text-white font-poppinsSemiBold text-sm`}>
												{item.name}
											</Text>
											<Text style={tw`text-gray-300 font-poppins text-xs`}>
												{item.soldDate}
											</Text>
										</View>
									</View>
									<View style={tw`flex flex-col items-end`}>
										<Text style={tw`text-white font-poppins text-base`}>
											{item.soldPrice}
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

const soldItemData = [
	{
		name: 'Michael Jordan',
		soldPrice: '$5,250',
		marketValue: '+$100',
		soldDate: 'JAN 10,2025',
	},
	{
		name: 'LeBron James',
		soldPrice: '$4,800',
		marketValue: '+$150',
		soldDate: 'FEB 15,2025',
	},
	{
		name: 'Kobe Bryant',
		soldPrice: '$3,900',
		marketValue: '+$200',
		soldDate: 'MAR 20,2025',
	},
];
