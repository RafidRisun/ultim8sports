import { iconIncrease, iconNotfication } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
	ImageBackground,
	Keyboard,
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
					<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
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
											$23,450.00
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
								data={data}
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
										for (let i = data.length - 1; i >= 0; i--) {
											if (data[i].value === value) {
												lastIdx = i;
												break;
											}
										}
										const isLast = lastIdx === data.length - 1;
										const isOneBeforeLast = lastIdx === data.length - 2;

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
						<View
							style={tw`flex w-full h-220 bg-[#8C52FF] bg-opacity-30 pt-12`}
						>
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
						</View>
					</ScrollView>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}

const data = [
	{ value: 1500 },
	{ value: 300 },
	{ value: 260 },
	{ value: 40 },
	{ value: 1500 },
	{ value: 300 },
	{ value: 2600 },
];
