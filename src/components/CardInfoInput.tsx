import React from 'react';
import { Text, TextInput, View } from 'react-native';
import tw from '../lib/tailwind';

export default function CardInfoInput({
	label,
	width,
}: {
	label: string;
	width: string;
}) {
	return (
		<View style={tw`flex flex-col gap-2 ${width}`}>
			<Text style={tw`text-white/90 text-xs font-poppinsLight`}>{label}</Text>
			<View
				style={tw`justify-center pl-2 w-full h-10 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
			>
				<TextInput style={tw`flex-1 h-full text-white p-0 font-poppins`} />
			</View>
		</View>
	);
}
