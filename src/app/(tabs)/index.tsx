import { iconIncrease, iconNotfication } from '@/assets/icon';
import ListingCard from '@/src/components/HomeComponents/ListingCard';
import tw from '@/src/lib/tailwind';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	ImageBackground,
	Keyboard,
	Pressable,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';

export default function Home() {
	const { top, bottom } = useSafeAreaInsets();
	const [selectedTab, setSelectedTab] = React.useState<
		'weekly' | 'monthly' | 'all'
	>('weekly');
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
			style={tw`flex-1`}
		>
			<ImageBackground
				source={require('@/assets/images/Splash.png')}
				style={[
					tw`flex-1  w-full items-center`,
					{ paddingTop: top, paddingBottom: bottom },
				]}
			>
				<View style={tw`flex-1  w-full`}>
					<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
						<View
							style={tw`flex flex-row w-full justify-between items-center my-4 px-[4%]`}
						>
							<View
								style={tw`flex items-center justify-center h-11 w-11 rounded-full`}
							>
								<Image
									source={require('@/assets/images/parrot.png')}
									style={tw`h-11 w-11 rounded-full`}
									contentFit="cover"
								/>
							</View>
							<TouchableOpacity
								style={tw`flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 border-t-white/40 border-b-white/30 blur-lg`}
							>
								<SvgXml xml={iconNotfication} />
							</TouchableOpacity>
						</View>
						<View style={tw`flex gap-2`}>
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
							<View
								style={tw`flex flex-row w-full justify-center items-center gap-2`}
							>
								<SvgXml xml={iconIncrease} />
								<Text style={tw`text-sm font-poppinsMedium text-white`}>
									+$11,250 (5.4%)
								</Text>
								<Text style={tw`text-xs font-poppinsLight text-white`}>
									vs last 30 days
								</Text>
							</View>
						</View>
						<View style={[tw`w-full pt-7`, { marginBottom: -7 }]}>
							<LineChart
								areaChart
								data={dataWeekly}
								startFillColor="#8C52FF"
								startOpacity={0.3}
								endFillColor="#8C52FF"
								endOpacity={0.3}
								hideDataPoints
								curved
								adjustToWidth
								initialSpacing={0}
								hideAxesAndRules
								hideYAxisText
								color="#8C52FF"
								yAxisLabelWidth={0}
								xAxisLabelsHeight={0}
								/* fallback: nudge chart to occupy full parent */
								pointerConfig={{
									pointerColor: '#FFFFFF',
									showPointerStrip: false,
									pointerLabelComponent: (items: { value: number }[]) => {
										const value = items?.[0]?.value;
										// find last occurrence index of this value in the data
										let lastIdx = -1;
										for (let i = dataWeekly.length - 1; i >= 0; i--) {
											if (dataWeekly[i].value === value) {
												lastIdx = i;
												break;
											}
										}
										const isLast = lastIdx === dataWeekly.length - 1;
										const isOneBeforeLast = lastIdx === dataWeekly.length - 2;

										return (
											<View
												style={{
													height: 40,
													width: 100,
													backgroundColor: '#282C3E',
													borderRadius: 100,
													justifyContent: 'center',
													paddingLeft: 16,
													left: isLast ? -100 : isOneBeforeLast ? -50 : 0,
												}}
											>
												<Text style={{ color: 'white', fontWeight: 'bold' }}>
													$ {value}
												</Text>
											</View>
										);
									},
								}}
							/>
						</View>
						<View style={tw`flex w-full pt-12 pb-40 gap-12`}>
							{/* bg-[#8C52FF] bg-opacity-30 */}
							<LinearGradient
								colors={['#8C52FF', 'transparent']}
								locations={[0, 1]}
								style={tw`absolute inset-0 opacity-30`}
							/>

							<View
								style={tw`flex flex-row w-full items-center justify-between px-4`}
							>
								{['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
									<Text
										key={day}
										style={tw`text-white/60 font-poppinsLight text-xs`}
									>
										{day}
									</Text>
								))}
							</View>
							<View style={tw`flex w-full items-center`}>
								<View
									style={tw`flex flex-row w-64 bg-black/60 rounded-lg border border-gray-700 p-0.5`}
								>
									<Pressable
										style={tw`flex-1 py-3 rounded-md`}
										onPress={() => setSelectedTab('weekly')}
									>
										{selectedTab === 'weekly' && (
											<LinearGradient
												colors={['#FFFFFF', '#8C52FF']}
												style={tw`absolute inset-0 rounded-md`}
											/>
										)}
										<Text
											style={tw`${
												selectedTab === 'weekly' ? 'text-black' : 'text-white'
											} text-center text-xs font-poppinsMedium`}
										>
											Weekly
										</Text>
									</Pressable>
									<Pressable
										style={tw`flex-1 py-3 rounded-md`}
										onPress={() => setSelectedTab('monthly')}
									>
										{selectedTab === 'monthly' && (
											<LinearGradient
												colors={['#FFFFFF', '#8C52FF']}
												style={tw`absolute inset-0 rounded-md`}
											/>
										)}
										<Text
											style={tw`${
												selectedTab === 'monthly' ? 'text-black' : 'text-white'
											} text-center text-xs font-poppinsMedium`}
										>
											Monthly
										</Text>
									</Pressable>
									<Pressable
										style={tw`flex-1 py-3 rounded-md`}
										onPress={() => setSelectedTab('all')}
									>
										{selectedTab === 'all' && (
											<LinearGradient
												colors={['#FFFFFF', '#8C52FF']}
												style={tw`absolute inset-0 rounded-md`}
											/>
										)}
										<Text
											style={tw`${
												selectedTab === 'all' ? 'text-black' : 'text-white'
											} text-center text-xs font-poppinsMedium`}
										>
											All
										</Text>
									</Pressable>
								</View>
							</View>
							<View style={tw`flex flex-col w-full px-4 gap-4`}>
								<Text style={tw`text-white font-poppinsMedium text-lg`}>
									Top Movers
								</Text>
								<View
									style={tw`flex flex-col w-full justify-center items-center gap-2`}
								>
									<ListingCard />
									<ListingCard />
									<ListingCard />
								</View>
							</View>
						</View>
					</ScrollView>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}

const dataWeekly = [
	{ value: 600 },
	{ value: 3000 },
	{ value: 1000 },
	{ value: 2200 },
	{ value: 600 },
	{ value: 3000 },
	{ value: 1600 },
];
