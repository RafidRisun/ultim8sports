import React from 'react';
import { Text, View } from 'react-native';
import tw from '../lib/tailwind';

export default function ErrorCard({ children }: { children: React.ReactNode }) {
	return (
		<View style={tw`mt-4 p-3 bg-red-500/20 border border-red-500 rounded`}>
			<Text style={tw`text-red-500 text-center`}>{children}</Text>
		</View>
	);
}
