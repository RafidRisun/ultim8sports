import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../lib/tailwind';

export default function BrightRoundedButton({
	text,
	action,
}: {
	text: string;
	action: () => void;
}) {
	return (
		<View style={tw`w-full px-4 py-7`}>
			<TouchableOpacity
				style={tw`flex w-full py-3 rounded-full mt-10 items-center justify-center border-b-2 border-l-2 border-r-2 border-slate-400 shadow-2xl shadow-[#9E91BA] bg-black relative`}
				onPress={action}
			>
				<LinearGradient
					colors={['#FFFFFF', '#8C52FF']}
					style={tw`absolute inset-0 rounded-full`}
				/>
				<Text style={tw`text-black font-poppinsMedium text-lg`}>{text}</Text>
			</TouchableOpacity>
		</View>
	);
}
