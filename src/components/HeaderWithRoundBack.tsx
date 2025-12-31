import { iconBackArrow } from '@/assets/icon';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

export default function HeaderWithRoundBack({
	title,
	share,
}: {
	title: string;
	share?: boolean;
}) {
	return (
		<View style={tw`flex flex-row items-center justify-between w-full my-4`}>
			<TouchableOpacity
				style={tw`flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 border-t-white/40 border-b-white/30 blur-lg`}
				onPress={() => {
					router.back();
				}}
			>
				<SvgXml xml={iconBackArrow} />
			</TouchableOpacity>
			<MaskedView
				style={tw`flex-1 h-6`}
				maskElement={
					<View
						style={{
							// Transparent background because mask is based off alpha channel.
							backgroundColor: 'transparent',
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Text
							style={{
								fontSize: 18,
								color: 'black',
								fontWeight: 'bold',
							}}
						>
							{title}
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
			{share ? (
				<TouchableOpacity
					style={tw`flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 border-t-white/40 border-b-white/30 blur-lg`}
					onPress={() => {
						router.back();
					}}
				>
					<SvgXml xml={iconBackArrow} />
				</TouchableOpacity>
			) : (
				<View style={tw`w-11`}></View>
			)}
		</View>
	);
}
