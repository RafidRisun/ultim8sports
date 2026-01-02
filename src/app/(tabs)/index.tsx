import { iconIncrease, iconNotfication } from '@/assets/icon';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import MaskedView from '@react-native-masked-view/masked-view';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Home() {
	return (
		<Wrapper>
			<View style={tw`flex flex-row w-full justify-between items-center my-4`}>
				<View
					style={tw`flex items-center justify-center h-11 w-11 rounded-full`}
				>
					<Image
						source={require('@/assets/images/parrot.png')}
						style={tw`h-11 w-11 rounded-full`}
						contentFit="cover"
					/>
				</View>
				<TouchableOpacity
					style={tw`flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 border-t-white/40 border-b-white/30 blur-lg`}
				>
					<SvgXml xml={iconNotfication} />
				</TouchableOpacity>
			</View>
			<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
				<View style={tw`flex gap-2`}>
					<MaskedView
						style={tw`flex-1 h-12`}
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
										fontSize: 36,
										color: 'black',
										fontWeight: 'bold',
									}}
								>
									$23,450.00
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
					<View
						style={tw`flex flex-row w-full justify-center items-center gap-2`}
					>
						<SvgXml xml={iconIncrease} />
						<Text style={tw`text-sm font-poppinsMedium text-white`}>
							+$11,250 (5.4%)
						</Text>
						<Text style={tw`text-xs font-poppinsLight text-white`}>
							vs last 30 days
						</Text>
					</View>
				</View>
			</ScrollView>
		</Wrapper>
	);
}
