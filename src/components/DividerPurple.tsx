import React from 'react';
import { View } from 'react-native';
import tw from '../lib/tailwind';

export default function DividerPurple() {
	return <View style={tw`h-0.75px bg-purple-700 w-full`} />;
}
