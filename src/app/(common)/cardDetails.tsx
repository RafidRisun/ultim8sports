import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export default function CardDetails() {
	const [selectedGraph, setSelectedGraph] = useState<'1M' | '3M' | '1Y'>('1M');
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Card Details" back share />
			<ScrollView style={tw`w-full`}>
				<View style={tw`flex-1 w-full gap-6 pb-20`}>
					<View style={tw`flex w-full items-center justify-center p-4`}>
						<Image
							source={require('@/assets/images/card1.jpg')}
							style={tw`w-60 rounded-md h-70`}
							contentFit="cover"
						/>
					</View>
					<View
						style={tw`flex flex-col gap-4 px-4 w-full items-center justify-center`}
					>
						<Text style={tw`text-white text-2xl font-poppinsMedium`}>
							Michael Jordan
						</Text>
						<View style={tw`flex flex-row gap-4`}>
							<Text style={tw`text-gray-300 text-sm font-poppinsSemiBold`}>
								1996 Fleer
							</Text>
							<View
								style={tw`w-1.5 h-1.5 bg-gray-300 rounded-full self-center`}
							/>
							<Text style={tw`text-gray-300 text-sm font-poppinsSemiBold`}>
								#57 Rookie
							</Text>
						</View>
						<View style={tw`flex px-6 py-2 bg-gray-600/60 rounded-full`}>
							<Text style={tw`text-white text-base font-poppins`}>
								PSA 9 MINT
							</Text>
						</View>
					</View>
					<RectangleGlassRow>
						<View style={tw`pt-14 pl-2 pb-4`}>
							<Text
								style={tw`text-white text-xs font-poppins absolute top-4 left-4`}
							>
								Price History
							</Text>
							<View
								style={tw`flex flex-row items-center absolute top-4 right-[-6]`}
							>
								<TouchableOpacity
									style={tw`flex p-2 ${selectedGraph === '1M' ? 'bg-gray-700 rounded-lg' : ''}`}
									onPress={() => setSelectedGraph('1M')}
								>
									<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
										1M
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`flex p-2 ${selectedGraph === '3M' ? 'bg-gray-700 rounded-lg' : ''}`}
									onPress={() => setSelectedGraph('3M')}
								>
									<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
										3M
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`flex p-2 ${selectedGraph === '1Y' ? 'bg-gray-700 rounded-lg' : ''}`}
									onPress={() => setSelectedGraph('1Y')}
								>
									<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
										1Y
									</Text>
								</TouchableOpacity>
							</View>
							<LineChart
								startFillColor={'#8C52FF'}
								startOpacity={0.7}
								endFillColor1={'#8C52FF'}
								endOpacity={0.1}
								color={'#8C52FF'}
								height={150}
								width={290}
								areaChart
								curved
								data={
									selectedGraph === '1M'
										? oneMonthData
										: selectedGraph === '3M'
											? threeMonthData
											: oneYearData
								}
								hideDataPoints
								spacing={68}
								noOfSections={4}
								yAxisColor="white"
								yAxisThickness={0}
								xAxisThickness={0}
								xAxisLabelTextStyle={{ color: 'gray' }}
								hideRules
								rulesType="solid"
								// rulesThickness={1}
								rulesColor="gray"
								yAxisTextStyle={{ color: 'gray' }}
								yAxisLabelSuffix="$"
								xAxisColor="lightgray"
							/>
						</View>
					</RectangleGlassRow>
					<View style={tw`flex flex-col w-full gap-4`}>
						<View style={tw`flex flex-row w-full items-center gap-4`}>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										COST BASIS
									</Text>
									<Text style={tw`text-white font-poppinsMedium text-lg`}>
										$12,200
									</Text>
								</View>
							</RectangleGlass>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										MARKET PRICE
									</Text>
									<Text style={tw`text-white font-poppinsMedium text-lg`}>
										$14,200
									</Text>
								</View>
							</RectangleGlass>
						</View>
						<View style={tw`flex flex-row w-full items-center gap-4`}>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										TOTAL PROFIT
									</Text>
									<Text style={tw`text-green-500 font-poppinsMedium text-lg`}>
										+$12,200
									</Text>
								</View>
							</RectangleGlass>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										ASKING PRICE
									</Text>
									<Text style={tw`text-white font-poppinsMedium text-lg`}>
										$20,200
									</Text>
								</View>
							</RectangleGlass>
						</View>
					</View>
				</View>
			</ScrollView>
		</Wrapper>
	);
}

const oneMonthData = [
	{ label: 'Week 1', value: 12000 },
	{ label: 'Week 2', value: 12500 },
	{ label: 'Week 3', value: 13000 },
	{ label: 'Week 4', value: 14000 },
];

const threeMonthData = [
	{ label: 'Jan', value: 11000 },
	{ label: 'Feb', value: 11500 },
	{ label: 'Mar', value: 13000 },
];

const oneYearData = [
	{ label: 'Jan', value: 10000 },
	{ label: 'Feb', value: 10500 },
	{ label: 'Mar', value: 11000 },
	{ label: 'Apr', value: 12000 },
	{ label: 'May', value: 12500 },
	{ label: 'Jun', value: 13000 },
	{ label: 'Jul', value: 13500 },
	{ label: 'Aug', value: 14000 },
	{ label: 'Sep', value: 14500 },
	{ label: 'Oct', value: 15000 },
	{ label: 'Nov', value: 15500 },
	{ label: 'Dec', value: 16000 },
];
