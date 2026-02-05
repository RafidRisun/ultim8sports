import {
	iconAddPlus,
	iconDecreaseChart,
	iconIncreaseChart,
	iconTrash,
} from '@/assets/icon';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import StatsCard from '@/src/components/WatchlistComponents/StatsCard';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated, {
	SharedValue,
	useAnimatedStyle,
} from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

function RightAction(prog: SharedValue<number>, drag: SharedValue<number>) {
	const styleAnimation = useAnimatedStyle(() => {
		// console.log('showRightProgress:', prog.value);
		// console.log('appliedTranslation:', drag.value);

		return {
			transform: [{ translateX: drag.value + 70 }],
		};
	});

	return (
		<Reanimated.View style={styleAnimation}>
			<TouchableOpacity style={styles.rightAction}>
				<SvgXml xml={iconTrash} />
			</TouchableOpacity>
		</Reanimated.View>
	);
}

export default function Watchlist() {
	const [selectedStat, setSelectedStat] = useState<string | null>(null);
	const router = useRouter();
	return (
		<Wrapper>
			<View style={tw`flex-1 w-full`}>
				<View
					style={tw`flex flex-row items-center justify-between w-full my-4`}
				>
					<View style={tw`w-11 h-11`} />
					<MaskedView
						style={tw`flex-1 h-6`}
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
										fontSize: 18,
										color: 'black',
										fontWeight: 'bold',
									}}
								>
									Watchlist
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
					<TouchableOpacity
						style={tw`flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 border-t-white/40 border-b-white/30 blur-lg`}
						onPress={() => router.navigate('/(tabs)/scan')}
					>
						<SvgXml xml={iconAddPlus} />
					</TouchableOpacity>
				</View>
				<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
					<View style={tw`flex flex-col gap-8 w-full mt-6`}>
						<ScrollView
							horizontal
							showsHorizontalScrollIndicator={false}
							contentContainerStyle={tw`flex-wrap gap-4`}
						>
							<StatsCard
								selectedStat={selectedStat}
								setSelectedStat={setSelectedStat}
								name="Basketball"
								status="-0.8%"
								data={basketballData}
							/>
							<StatsCard
								selectedStat={selectedStat}
								setSelectedStat={setSelectedStat}
								name="Football"
								status="+1.2%"
								data={footballData}
							/>
							<StatsCard
								selectedStat={selectedStat}
								setSelectedStat={setSelectedStat}
								name="Baseball"
								status="+0.5%"
								data={baseballData}
							/>
						</ScrollView>
						<View style={tw`flex flex-col w-full pb-40 gap-4`}>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								YOUR ITEMS
							</Text>
							<GestureHandlerRootView
								style={tw`flex flex-col w-full justify-center items-center gap-2`}
							>
								{/* <FlatList
									data={itemData}
									keyExtractor={(_, index) => index.toString()}
									style={tw`w-full`}
									contentContainerStyle={tw`gap-4`}
									renderItem={({ item }) => (
										<ReanimatedSwipeable
											friction={2}
											rightThreshold={10}
											renderRightActions={RightAction}
											containerStyle={tw`w-full`}
										>
											<RectangleGlassRow>
												<TouchableOpacity
													style={tw`flex flex-row w-full gap-4`}
												>
													<Image
														source={require('@/assets/images/card1.jpg')}
														style={tw`h-17 w-13 rounded-md`}
														contentFit="cover"
													/>
													<View style={tw`flex flex-col gap-1`}>
														<Text
															style={tw`text-white font-poppinsSemiBold text-sm`}
														>
															{item.name}
														</Text>
														<Text
															style={tw`text-gray-200 font-poppinsMedium text-xs`}
														>
															{item.series}
														</Text>
														<View style={tw`flex flex-row items-center gap-4`}>
															<Text style={tw`text-white font-poppins text-lg`}>
																{item.price}
															</Text>
															{item.change.startsWith('+') ? (
																<View
																	style={tw`flex flex-row items-center gap-1 bg-green-600/20 px-2 py-0.5 rounded-md`}
																>
																	<SvgXml xml={iconIncreaseChart} />
																	<Text
																		style={tw`text-green-400 font-poppinsMedium text-xs`}
																	>
																		{item.change}
																	</Text>
																</View>
															) : (
																<View
																	style={tw`flex flex-row items-center gap-1 bg-red-600/20 px-2 py-0.5 rounded-md`}
																>
																	<SvgXml xml={iconDecreaseChart} />
																	<Text
																		style={tw`text-red-400 font-poppinsMedium text-xs`}
																	>
																		{item.change}
																	</Text>
																</View>
															)}
														</View>
													</View>
												</TouchableOpacity>
											</RectangleGlassRow>
										</ReanimatedSwipeable>
									)}
								/> */}
								{itemData.map((item, index) => (
									<ReanimatedSwipeable
										key={index}
										friction={2}
										rightThreshold={10}
										renderRightActions={RightAction}
										containerStyle={tw`w-full`}
									>
										<RectangleGlassRow>
											<TouchableOpacity
												style={tw`flex flex-row w-full gap-4`}
												onPress={() => router.push('/cardDetails/cardDetails')}
											>
												<Image
													source={require('@/assets/images/card1.jpg')}
													style={tw`h-17 w-13 rounded-md`}
													contentFit="cover"
												/>
												<View style={tw`flex flex-col gap-1`}>
													<Text
														style={tw`text-white font-poppinsSemiBold text-sm`}
													>
														{item.name}
													</Text>
													<Text
														style={tw`text-gray-200 font-poppinsMedium text-xs`}
													>
														{item.series}
													</Text>
													<View style={tw`flex flex-row items-center gap-4`}>
														<Text style={tw`text-white font-poppins text-lg`}>
															{item.price}
														</Text>
														{item.change.startsWith('+') ? (
															<View
																style={tw`flex flex-row items-center gap-1 bg-green-600/20 px-2 py-0.5 rounded-md`}
															>
																<SvgXml xml={iconIncreaseChart} />
																<Text
																	style={tw`text-green-400 font-poppinsMedium text-xs`}
																>
																	{item.change}
																</Text>
															</View>
														) : (
															<View
																style={tw`flex flex-row items-center gap-1 bg-red-600/20 px-2 py-0.5 rounded-md`}
															>
																<SvgXml xml={iconDecreaseChart} />
																<Text
																	style={tw`text-red-400 font-poppinsMedium text-xs`}
																>
																	{item.change}
																</Text>
															</View>
														)}
													</View>
												</View>
											</TouchableOpacity>
										</RectangleGlassRow>
									</ReanimatedSwipeable>
								))}
							</GestureHandlerRootView>
						</View>
					</View>
				</ScrollView>
			</View>
		</Wrapper>
	);
}

const styles = StyleSheet.create({
	rightAction: {
		width: 70,
		height: '100%',
		backgroundColor: '#D43939',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16,
	},
});

const basketballData = [
	{ value: 150, label: 'Jan' },
	{ value: 70, label: 'Feb' },
	{ value: 120, label: 'Mar' },
	{ value: 80, label: 'Apr' },
];

const footballData = [
	{ value: 40, label: 'Jan' },
	{ value: 60, label: 'Feb' },
	{ value: 55, label: 'Mar' },
	{ value: 70, label: 'Apr' },
];

const baseballData = [
	{ value: 30, label: 'Jan' },
	{ value: 50, label: 'Feb' },
	{ value: 45, label: 'Mar' },
	{ value: 160, label: 'Apr' },
];

const itemData = [
	{
		name: 'Michael Jordan',
		series: '1986 Fleer',
		price: '$5,250',
		change: '+8.2%',
	},
	{
		name: 'LeBron James',
		series: '2003 Topps',
		price: '$4,800',
		change: '+5.6%',
	},
	{
		name: 'Kobe Bryant',
		series: '1996 Topps',
		price: '$3,900',
		change: '+7.1%',
	},
	{
		name: "Shaquille O'Neal",
		series: '1992 Upper Deck',
		price: '$2,750',
		change: '-4.3%',
	},
	{
		name: 'Tim Duncan',
		series: '1997 Topps',
		price: '$2,300',
		change: '+3.8%',
	},
	{
		name: 'Stephen Curry',
		series: '2009 Topps',
		price: '$2,100',
		change: '+6.4%',
	},
	{
		name: 'Kevin Durant',
		series: '2007 Topps',
		price: '$1,950',
		change: '-2.1%',
	},
	// {
	// 	name: 'Giannis Antetokounmpo',
	// 	series: '2013 Panini',
	// 	price: '$1,800',
	// 	change: '+4.9%',
	// },
	// {
	// 	name: 'James Harden',
	// 	series: '2009 Topps',
	// 	price: '$1,650',
	// 	change: '+2.7%',
	// },
];
