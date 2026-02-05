import { iconDollarSign, iconTrashGradient } from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function CardDetailsManual() {
	const router = useRouter();

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
							onPress={() => router.push('/cardDetails/confirmSale')}
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
