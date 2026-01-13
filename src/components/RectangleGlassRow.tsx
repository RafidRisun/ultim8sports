import { BlurView } from 'expo-blur';
import React from 'react';
import { View } from 'react-native';
import tw from '../lib/tailwind';

export default function RectangleGlassRow({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<View
			style={tw`flex flex-row w-full p-2 border border-white/20 border-t-white/40 border-b-white/30 blur-lg rounded-xl items-start gap-4`}
		>
			<BlurView
				intensity={40}
				// experimentalBlurMethod="dimezisBlurView"
				tint="dark"
				style={tw`absolute inset-0 rounded-xl`}
			/>
			{children}
		</View>
	);
}
