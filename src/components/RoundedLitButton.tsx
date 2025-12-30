import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from '../lib/tailwind';

export default function RoundedLitButton({ text }: { text: string }) {
	return (
		<TouchableOpacity
			style={tw`mt-6 flex items-center justify-center w-full h-12 bg-black border border-b-4 border-[#9E91BA] shadow-2xl shadow-[rgb(140,82,255)] rounded-full`}
		>
			<MaskedView
				style={tw`w-full h-full`}
				maskElement={
					<View
						style={{
							// Transparent background because mask is based off alpha channel.
							backgroundColor: 'transparent',
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							paddingRight: 10,
						}}
					>
						<Text
							style={{
								fontSize: 16,
								color: 'black',
								fontWeight: 'bold',
							}}
						>
							{text}
						</Text>
					</View>
				}
			>
				<LinearGradient
					// Background Linear Gradient
					colors={['#FFFFFF', '#8C52FF']}
					style={{ flex: 1, height: '100%' }}
				/>
			</MaskedView>
		</TouchableOpacity>
	);
}
