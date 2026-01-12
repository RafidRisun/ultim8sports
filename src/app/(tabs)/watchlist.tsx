import { iconAddPlus } from '@/assets/icon';
import ListingCard from '@/src/components/ListingCard';
import StatsCard from '@/src/components/WatchlistComponents/StatsCard';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Watchlist() {
	const [selectedStat, setSelectedStat] = useState<string | null>(null);
	return (
		<Wrapper>
			<View style={tw`flex flex-row items-center justify-between w-full my-4`}>
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
				>
					<SvgXml xml={iconAddPlus} />
				</TouchableOpacity>
			</View>
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
				<View style={tw`flex flex-col w-full gap-4`}>
					<Text style={tw`text-white font-poppinsMedium text-lg`}>
						YOUR ITEMS
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
		</Wrapper>
	);
}

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
