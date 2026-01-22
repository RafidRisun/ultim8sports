import React from 'react';
import { TouchableOpacity } from 'react-native';
import tw from '../lib/tailwind';

export default function RoundGlass({
	children,
	action,
}: {
	children: React.ReactNode;
	action?: () => void;
}) {
	return (
		<TouchableOpacity
			style={tw`flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 border-t-white/40 border-b-white/30 blur-lg`}
			onPress={action}
		>
			{children}
		</TouchableOpacity>
	);
}
