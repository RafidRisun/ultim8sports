import {
	iconInventoryTopOption,
	iconNotfication,
	iconShare,
} from '@/assets/icon';
import ChartTabButtons from '@/src/components/ChartTabButtons';
import ListingCard from '@/src/components/ListingCard';
import MainAreaChart from '@/src/components/MainAreaChart';
import RectangleGlass from '@/src/components/RectangleGlass';
import RoundGlass from '@/src/components/RoundGlass';
import WrapperWithoutPX from '@/src/components/WrapperWithoutPX';
import tw from '@/src/lib/tailwind';
import { useGetProfileQuery } from '@/src/redux/api/profileApi/profileApi';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Home() {
	const [selectedTab, setSelectedTab] = React.useState<
		'weekly' | 'monthly' | 'yearly'
	>('weekly');
	const router = useRouter();

	const [loadMoreInventory, setLoadMoreInventory] = React.useState(false);
	const [loadMoreMovers, setLoadMoreMovers] = React.useState(false);

	const [userAvatar, setUserAvatar] = React.useState<string | null>(null);

	const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

	// async function getUserAvatar() {
	// 	try {
	// 		const avatar = await AsyncStorage.getItem('user_avatar');
	// 		if (avatar) {
	// 			setUserAvatar(avatar);
	// 		}
	// 		// console.log('Retrieved avatar from AsyncStorage:', avatar);
	// 		// console.log('userAvatar state updated:', userAvatar);
	// 	} catch (error) {
	// 		console.error('Failed to get user avatar:', error);
	// 		return null;
	// 	}
	// }
	const { data: userData, isLoading, error } = useGetProfileQuery();

	useEffect(() => {
		if (userData?.data?.user?.avatar_url) {
			setUserAvatar(userData.data.user.avatar_url);
		} else {
			setUserAvatar(null);
		}
	}, [userData]);

	// const {
	// 	data: inventoryItems,
	// 	isLoading,
	// 	error,
	// } = useGetInventoryItemsQuery({
	// 	filter: 'all',
	// 	page: 1,
	// 	per_page: 10,
	// });

	// useEffect(() => {
	// 	getUserAvatar();
	// }, []);

	// const combinedData = [
	// 	{ type: 'yourItemsHeader' },
	// 	...yourItems.map(item => ({ ...item, type: 'yourItems' })),
	// 	{ type: 'topMoversHeader' },
	// 	...topMovers.map(item => ({ ...item, type: 'topMovers' })),
	// ];

	return (
		<WrapperWithoutPX>
			<View style={tw`flex-1  w-full`}>
				<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
					<View
						style={tw`flex flex-row w-full justify-between items-center my-4 px-[4%]`}
					>
						<TouchableOpacity
							onPress={() => router.navigate('/(tabs)/profile')}
						>
							<Image
								source={
									// userData?.avatar_url ||
									// require('@/assets/images/defaultAvatar.jpg')
									userAvatar || require('@/assets/images/defaultAvatar.jpg')
								}
								style={tw`h-11 w-11 rounded-full`}
								contentFit="cover"
							/>
						</TouchableOpacity>
						<RoundGlass>
							<SvgXml xml={iconNotfication} />
						</RoundGlass>
					</View>
					<View style={tw`flex w-full gap-4 px-[4%] mb-8`}>
						<View style={tw`flex flex-col w-full `}>
							<Text
								style={tw`text-xs font-poppinsLight text-white text-center`}
							>
								TOTAL PORTFOLIO VALUE
							</Text>
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
										MARKET VALUE
									</Text>
									<View style={tw`flex flex-row items-center gap-4`}>
										<Text style={tw`text-green-500 font-poppinsMedium text-lg`}>
											$12,200
										</Text>
										<View
											style={tw`flex px-2 py-1 bg-green-600/20 rounded-full`}
										>
											<Text
												style={tw`text-green-400 font-poppinsMedium text-xs`}
											>
												+8.2%
											</Text>
										</View>
									</View>
								</View>
							</RectangleGlass>
						</View>
						{/* <RoundedLitButton
							text="View Sales Reports"
							action={() => router.push('/screens/salesReport')}
						/> */}
						<TouchableOpacity
							style={tw`flex flex-row w-full items-center gap-4`}
							onPress={() => router.push('/inventory/salesReport')}
						>
							<RoundGlass action={() => router.push('/inventory/salesReport')}>
								<View style={tw`flex-1 w-full items-center justify-center`}>
									<SvgXml xml={iconInventoryTopOption} />
								</View>
							</RoundGlass>
							<Text style={tw`text-white font-poppinsLight text-sm`}>
								View Sales Reports
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row flex-1 items-center gap-4`}
						>
							<RoundGlass>
								<View style={tw`flex-1 w-full items-center justify-center`}>
									<SvgXml xml={iconShare} />
								</View>
							</RoundGlass>
							<Text style={tw`text-white font-poppinsLight text-sm`}>
								Share Inventory in Sheet
							</Text>
						</TouchableOpacity>
					</View>
					<View style={[tw`w-full pt-7`, { marginBottom: -46.5 }]}>
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
						<ChartTabButtons
							selectedTab={selectedTab}
							setSelectedTab={setSelectedTab}
						/>
						<View style={tw`flex flex-col w-full px-4 gap-4`}>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								YOUR ITEMS
							</Text>
							{/* {yourItems.slice(0, 3).map((item, index) => (
								<ListingCard
									key={index}
									title={item.title}
									brand={item.brand}
									price={item.price}
									change={item.change}
									ebay={item.ebay}
								/>
							))} */}
							{loadMoreInventory ? (
								<TouchableOpacity
									style={tw`w-full py-3 rounded-lg border border-white/20`}
									onPress={() => setLoadMoreInventory(false)}
								>
									<Text
										style={tw`text-center text-white/60 font-poppinsMedium`}
									>
										Show Less
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={tw`w-full py-3 rounded-lg border border-white/20`}
									onPress={() => setLoadMoreInventory(true)}
								>
									<Text
										style={tw`text-center text-white/60 font-poppinsMedium`}
									>
										Load More
									</Text>
								</TouchableOpacity>
							)}
						</View>
						<View style={tw`flex flex-col w-full px-4 gap-4`}>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								Top Movers
							</Text>
							{topMovers.slice(0, 3).map((item, index) => (
								<ListingCard
									key={index}
									title={item.title}
									brand={item.brand}
									price={item.price}
									change={item.change}
									ebay={item.ebay}
								/>
							))}
							{loadMoreMovers ? (
								<TouchableOpacity
									style={tw`w-full py-3 rounded-lg border border-white/20`}
									onPress={() => setLoadMoreMovers(false)}
								>
									<Text
										style={tw`text-center text-white/60 font-poppinsMedium`}
									>
										Show Less
									</Text>
								</TouchableOpacity>
							) : (
								<TouchableOpacity
									style={tw`w-full py-3 rounded-lg border border-white/20`}
									onPress={() => setLoadMoreMovers(true)}
								>
									<Text
										style={tw`text-center text-white/60 font-poppinsMedium`}
									>
										Load More
									</Text>
								</TouchableOpacity>
							)}
						</View>
					</View>
				</ScrollView>
			</View>
		</WrapperWithoutPX>
	);
}

const topMovers = [
	{
		title: 'Michael Jordan',
		brand: '1986 Fleer',
		price: '5,250',
		change: '+8.2%',
		ebay: true,
	},
	{
		title: 'LeBron James',
		brand: '2003 Topps Chrome',
		price: '4,800',
		change: '+6.5%',
		ebay: true,
	},
	{
		title: 'Kobe Bryant',
		brand: '1996 Topps',
		price: '3,900',
		change: '+7.1%',
		ebay: false,
	},
	{
		title: 'Shaquille ONeal',
		brand: '1992 Upper Deck',
		price: '2,750',
		change: '+5.9%',
		ebay: false,
	},
	{
		title: 'Tim Duncan',
		brand: '1997 Topps',
		price: '2,300',
		change: '+4.8%',
		ebay: true,
	},
];

const dataWeekly = [
	{ value: 120, label: 'Mon' },
	{ value: 150, label: 'Tue' },
	{ value: 90, label: 'Wed' },
	{ value: 200, label: 'Thu' },
	{ value: 170, label: 'Fri' },
	{ value: 220, label: 'Sat' },
	{ value: 130, label: 'Sun' },
];

const dataMonthly = [
	{ value: 800, label: '1' },
	{ value: 1200, label: '5' },
	{ value: 900, label: '10' },
	{ value: 1500, label: '15' },
	{ value: 1300, label: '20' },
	{ value: 1700, label: '25' },
	{ value: 1600, label: '30' },
];

const dataYearly = [
	{ value: 5000, label: 'Jan' },
	{ value: 7000, label: 'Feb' },
	{ value: 6000, label: 'Mar' },
	{ value: 8000, label: 'Apr' },
	{ value: 7500, label: 'May' },
	{ value: 9000, label: 'Jun' },
	{ value: 8500, label: 'Jul' },
	{ value: 9500, label: 'Aug' },
	{ value: 9000, label: 'Sep' },
	{ value: 10000, label: 'Oct' },
	{ value: 11000, label: 'Nov' },
	{ value: 10500, label: 'Dec' },
];
