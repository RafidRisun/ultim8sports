import { iconIncrease, iconNotfication } from '@/assets/icon';
import ChartTabButtons from '@/src/components/ChartTabButtons';
import ListingCard from '@/src/components/ListingCard';
import MainAreaChart from '@/src/components/MainAreaChart';
import WrapperWithoutPX from '@/src/components/WrapperWithoutPX';
import tw from '@/src/lib/tailwind';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Home() {
	const [selectedTab, setSelectedTab] = React.useState<
		'weekly' | 'monthly' | 'yearly'
	>('weekly');
	return (
		<WrapperWithoutPX>
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
						<MainAreaChart
							selectedTab={selectedTab}
							dataWeekly={dataWeekly}
							dataMonthly={dataMonthly}
							dataYearly={dataYearly}
						/>
					</View>
					<View style={tw`flex w-full pt-12 pb-40 gap-12`}>
						<LinearGradient
							colors={['#8C52FF', 'transparent']}
							locations={[0, 1]}
							style={tw`absolute inset-0 opacity-30`}
						/>

						<View
							style={tw`flex flex-row w-full items-center justify-between px-4`}
						>
							{selectedTab === 'weekly' &&
								['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
									<Text
										key={day}
										style={tw`text-white/60 font-poppinsLight text-xs`}
									>
										{day}
									</Text>
								))}
							{selectedTab === 'monthly' &&
								['1', '5', '10', '15', '20', '25', '30'].map(date => (
									<Text
										key={date}
										style={tw`text-white/60 font-poppinsLight text-xs`}
									>
										{date}
									</Text>
								))}
							{selectedTab === 'yearly' &&
								[
									'Jan',
									'Feb',
									'Mar',
									'Apr',
									'May',
									'Jun',
									'Jul',
									'Aug',
									'Sep',
									'Oct',
									'Nov',
									'Dec',
								].map(month => (
									<Text
										key={month}
										style={tw`text-white/60 font-poppinsLight text-xs`}
									>
										{month}
									</Text>
								))}
						</View>
						<ChartTabButtons
							selectedTab={selectedTab}
							setSelectedTab={setSelectedTab}
						/>
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
		</WrapperWithoutPX>
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

const dataMonthly = [
	{ value: 2000 },
	{ value: 4000 },
	{ value: 1500 },
	{ value: 3200 },
	{ value: 2800 },
	{ value: 4300 },
	{ value: 3900 },
	{ value: 5000 },
];

const dataYearly = [
	{ value: 1500 },
	{ value: 2500 },
	{ value: 3500 },
	{ value: 4500 },
	{ value: 3000 },
	{ value: 4000 },
	{ value: 5000 },
	{ value: 6000 },
	{ value: 5500 },
	{ value: 6500 },
	{ value: 7000 },
	{ value: 8000 },
];
