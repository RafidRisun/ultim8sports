import { iconIncreaseChart } from '@/assets/icon';
import tw from '@/src/lib/tailwind';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ListingCard() {
	return (
		<TouchableOpacity
			style={tw`flex flex-row w-full px-3 py-2 border border-white/20 border-t-white/40 border-b-white/30 blur-lg rounded-xl items-center gap-2`}
		>
			<BlurView
				intensity={70}
				// experimentalBlurMethod="dimezisBlurView"
				tint="dark"
				style={tw`absolute inset-0 rounded-xl`}
			/>
			<Image
				source={require('@/assets/images/card1.jpg')}
				style={tw`h-17 w-13 rounded-md`}
				contentFit="cover"
			/>
			<View style={tw`flex flex-col gap-1`}>
				<Text style={tw`text-white font-poppinsSemiBold text-sm`}>
					Michael Jordan
				</Text>
				<Text style={tw`text-gray-200 font-poppinsMedium text-xs`}>
					1986 Fleer
				</Text>
				<View style={tw`flex flex-row items-center gap-4`}>
					<Text style={tw`text-white font-poppins text-lg`}>$5,250</Text>
					<View
						style={tw`flex flex-row items-center gap-1 bg-green-600/20 px-2 py-0.5 rounded-md`}
					>
						<SvgXml xml={iconIncreaseChart} />
						<Text style={tw`text-green-400 font-poppinsMedium text-xs`}>
							+8.2%
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}
