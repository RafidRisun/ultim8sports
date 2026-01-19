import React from 'react';
import { Text, View } from 'react-native';
import tw from '../lib/tailwind';

export default function CardDetailRow({
	label,
	content,
}: {
	label: string;
	content: string;
}) {
	return (
		<View style={tw`flex flex-col gap-2 flex-1`}>
			<Text style={tw`text-white/90 text-xs font-poppinsLight`}>{label}</Text>
			<View
				style={tw`justify-center pl-4 w-full h-10 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
			>
				<Text style={tw`text-white/80 p-0 font-poppins`}>{content}</Text>
			</View>
		</View>
	);
}
