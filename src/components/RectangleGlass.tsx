import { BlurView } from 'expo-blur';
import React from 'react';
import { View } from 'react-native';
import tw from '../lib/tailwind';

export default function RectangleGlass({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<View
			style={tw`flex flex-col flex-1 px-4 py-3 border border-white/20 border-t-white/40 border-b-white/30 blur-lg rounded-xl items-start gap-2`}
		>
			<BlurView
				intensity={70}
				// experimentalBlurMethod="dimezisBlurView"
				tint="dark"
				style={tw`absolute inset-0 rounded-xl`}
			/>
			{children}
		</View>
	);
}
