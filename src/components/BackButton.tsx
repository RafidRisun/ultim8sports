import { iconBack } from '@/assets/icon';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

export default function BackButton() {
	return (
		<TouchableOpacity
			style={tw`flex flex-row items-center gap-4 mb-6 absolute top-10 left-4`}
			onPress={() => router.back()}
		>
			<SvgXml xml={iconBack} />
			<Text style={tw`text-white text-base font-poppinsMedium`}>Back</Text>
		</TouchableOpacity>
	);
}
