import {
	iconAlert,
	iconDollarSign,
	iconGreenArrow,
	iconRedArrow,
	iconTrashGradient,
} from '@/assets/icon';
import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useGetCardDetailsQuery } from '@/src/redux/api/inventoryApi';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
	ActivityIndicator,
	ScrollView,
	Switch,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { SvgXml } from 'react-native-svg';

export default function CardDetails() {
	const [selectedGraph, setSelectedGraph] = useState<
		'daily' | 'weekly' | 'monthly' | 'yearly'
	>('monthly');
	const [priceAlert, setPriceAlert] = useState(false);
	const togglePriceAlertSwitch = () =>
		setPriceAlert(previousState => !previousState);
	const [profitTarget, setProfitTarget] = useState('');
	const [stopLoss, setStopLoss] = useState('');
	const router = useRouter();

	// const postId = useLocalSearchParams().postId;
	const postId = '18';

	const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

	const {
		data: cardDetails,
		isLoading,
		error,
	} = useGetCardDetailsQuery({ id: postId, filter: selectedGraph });

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
			<HeaderWithRoundBack title="Card Details" back share />
			<ScrollView style={tw`w-full`}>
				<View style={tw`flex-1 w-full gap-6 pb-20`}>
					<View style={tw`flex w-full items-center justify-center p-4`}>
						<Image
							source={{ uri: `${baseUrl}${cardDetails?.data?.card_image_url}` }}
							style={tw`w-60 rounded-md h-70`}
							contentFit="cover"
						/>
					</View>
					<View
						style={tw`flex flex-col gap-4 px-4 w-full items-center justify-center`}
					>
						<Text style={tw`text-white text-2xl font-poppinsMedium`}>
							{cardDetails?.data?.card_name || 'N/A'}
						</Text>
						<View style={tw`flex flex-row gap-4`}>
							<Text style={tw`text-gray-300 text-sm font-poppinsSemiBold`}>
								{cardDetails?.data?.year || 'N/A'}{' '}
								{cardDetails?.data?.set_name || 'N/A'}
							</Text>
							<View
								style={tw`w-1.5 h-1.5 bg-gray-300 rounded-full self-center`}
							/>
							<Text style={tw`text-gray-300 text-sm font-poppinsSemiBold`}>
								{cardDetails?.data?.number || 'N/A'}
							</Text>
						</View>
						<View style={tw`flex px-6 py-2 bg-gray-600/60 rounded-full`}>
							<Text style={tw`text-white text-base font-poppins`}>
								{cardDetails?.data?.condition || 'N/A'}
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
									style={tw`flex p-2 ${selectedGraph === 'daily' ? 'bg-gray-700 rounded-lg' : ''}`}
									onPress={() => setSelectedGraph('daily')}
								>
									<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
										Daily
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`flex p-2 ${selectedGraph === 'weekly' ? 'bg-gray-700 rounded-lg' : ''}`}
									onPress={() => setSelectedGraph('weekly')}
								>
									<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
										Weekly
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`flex p-2 ${selectedGraph === 'monthly' ? 'bg-gray-700 rounded-lg' : ''}`}
									onPress={() => setSelectedGraph('monthly')}
								>
									<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
										Monthly
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={tw`flex p-2 ${selectedGraph === 'yearly' ? 'bg-gray-700 rounded-lg' : ''}`}
									onPress={() => setSelectedGraph('yearly')}
								>
									<Text style={tw`text-white text-xs font-poppinsSemiBold`}>
										Yearly
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
								data={cardDetails?.data?.chart_data?.chart_data}
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
										{cardDetails?.data?.cost_basis
											? `$${cardDetails.data.cost_basis}`
											: 'N/A'}
									</Text>
								</View>
							</RectangleGlass>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										MARKET PRICE
									</Text>
									<Text style={tw`text-white font-poppinsMedium text-lg`}>
										{cardDetails?.data?.market_price
											? `$${cardDetails.data.market_price}`
											: 'N/A'}
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
									<Text
										style={tw`${cardDetails?.data?.total_profit?.status === 'Up' ? 'text-green-500' : 'text-red-500'} font-poppinsMedium text-lg`}
									>
										{cardDetails?.data?.total_profit?.total_profit}
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
					<RectangleGlass>
						<View
							style={tw`flex flex-row w-full items-center justify-between gap-2`}
						>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconAlert} />
								</View>
								<View style={tw`flex flex-col`}>
									<Text style={tw`text-white font-poppinsMedium text-sm`}>
										Price Alert
									</Text>
									<Text
										style={tw`${priceAlert ? 'text-green-500' : 'text-gray-300'} font-poppinsMedium text-xs`}
									>
										{priceAlert ? 'ACTIVE' : 'INACTIVE'}
									</Text>
								</View>
							</View>
							<Switch
								trackColor={{ false: '#FFFFFF', true: '#A375FF' }}
								thumbColor={priceAlert ? '#FFFFFF' : '#A375FF'}
								// ios_backgroundColor="#3e3e3e"
								onValueChange={togglePriceAlertSwitch}
								value={priceAlert}
							/>
						</View>
						{priceAlert && (
							<View style={tw`mt-4 flex flex-col w-full gap-6`}>
								<View style={tw`flex flex-col gap-2 w-full`}>
									<View style={tw`flex flex-row items-center justify-between`}>
										<View style={tw`flex flex-row items-center gap-2`}>
											<SvgXml xml={iconGreenArrow} />
											<Text
												style={tw`text-green-500 text-xs font-poppinsLight`}
											>
												PROFIT TARGET
											</Text>
										</View>
										<Text style={tw`text-gray-400 text-xs font-poppinsLight`}>
											CURRENT: $14,200
										</Text>
									</View>
									<View
										style={tw`flex flex-row items-center gap-2 justify-center pl-4 w-full h-10 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
									>
										<Text style={tw`text-white font-poppins`}>$</Text>
										<TextInput
											style={tw`flex-1 h-full text-white p-0 font-poppins`}
											value={profitTarget}
											onChangeText={setProfitTarget}
											inputMode="numeric"
										/>
									</View>
								</View>
								<View style={tw`flex flex-col gap-2 w-full`}>
									<View style={tw`flex flex-row items-center justify-between`}>
										<View style={tw`flex flex-row items-center gap-2`}>
											<SvgXml xml={iconRedArrow} />
											<Text style={tw`text-red-500 text-xs font-poppinsLight`}>
												STOP LOSS
											</Text>
										</View>
										<Text style={tw`text-gray-400 text-xs font-poppinsLight`}>
											CURRENT: $18,450
										</Text>
									</View>
									<View
										style={tw`flex flex-row items-center gap-2 justify-center pl-4 w-full h-10 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
									>
										<Text style={tw`text-white font-poppins`}>$</Text>
										<TextInput
											style={tw`flex-1 h-full text-white p-0 font-poppins`}
											value={stopLoss}
											onChangeText={setStopLoss}
											inputMode="numeric"
										/>
									</View>
								</View>
								<BrightRoundedButton text="Save Rules" action={() => {}} />
							</View>
						)}
					</RectangleGlass>
					<View style={tw`flex flex-row w-full px-4 gap-4`}>
						<TouchableOpacity
							style={tw`flex flex-row gap-2 flex-1 py-3 rounded-full mt-10 items-center justify-center border-b-2 border-l-2 border-r-2 border-purple-300 shadow-xl shadow-[#9E91BA] bg-black relative`}
						>
							<SvgXml xml={iconTrashGradient} />
							<Text style={tw`text-purple-300 font-poppinsMedium text-lg`}>
								Remove
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-2 flex-1 py-3 rounded-full mt-10 items-center justify-center border-b-2 border-l-2 border-r-2 border-slate-400 shadow-xl shadow-[#9E91BA] bg-black relative`}
							onPress={() => router.push('/card/confirmSale')}
						>
							<LinearGradient
								colors={['#FFFFFF', '#8C52FF']}
								style={tw`absolute inset-0 rounded-full`}
							/>
							<SvgXml xml={iconDollarSign} />
							<Text style={tw`text-black font-poppinsMedium text-lg`}>
								Sold
							</Text>
						</TouchableOpacity>
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
