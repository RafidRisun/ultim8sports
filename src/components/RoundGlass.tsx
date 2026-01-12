import React from 'react';
import { TouchableOpacity } from 'react-native';
import tw from '../lib/tailwind';

export default function RoundGlass({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<TouchableOpacity
			style={tw`flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 border-t-white/40 border-b-white/30 blur-lg`}
		>
			{children}
		</TouchableOpacity>
	);
}
