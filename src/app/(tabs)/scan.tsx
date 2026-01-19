import {
	iconManualCardEntry,
	iconSalesHistory,
	iconScanCard,
	iconSearchCard,
} from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Scan() {
	const router = useRouter();
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Add Card" />
			<View style={tw`flex flex-col items-center justify-start gap-5 mt-8`}>
				<RectangleGlassRow>
					<TouchableOpacity
						style={tw`flex flex-row w-full gap-4`}
						onPress={() => router.push('/screens/salesHistory')}
					>
						<View style={tw`p-2 bg-white/20 rounded-lg`}>
							<SvgXml xml={iconSalesHistory} />
						</View>
						<View style={tw`flex flex-col flex-1`}>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								Sales History
							</Text>
							<Text style={tw`text-white/60 font-poppinsLight text-sm`}>
								View and manage your sales history
							</Text>
						</View>
					</TouchableOpacity>
				</RectangleGlassRow>
				<RectangleGlassRow>
					<TouchableOpacity
						style={tw`flex flex-row w-full gap-4`}
						onPress={() => router.push('/screens/scanCard')}
					>
						<View style={tw`p-2 bg-white/20 rounded-lg`}>
							<SvgXml xml={iconScanCard} />
						</View>
						<View style={tw`flex flex-col flex-1`}>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								Scan Card
							</Text>
							<Text style={tw`text-white/60 font-poppinsLight text-sm`}>
								Scan your card to add it quickly
							</Text>
						</View>
					</TouchableOpacity>
				</RectangleGlassRow>
				<RectangleGlassRow>
					<TouchableOpacity
						style={tw`flex flex-row w-full gap-4`}
						onPress={() => router.push('/screens/manualCardInput')}
					>
						<View style={tw`p-2 bg-white/20 rounded-lg`}>
							<SvgXml xml={iconManualCardEntry} />
						</View>
						<View style={tw`flex flex-col flex-1`}>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								Manual Card Entry
							</Text>
							<Text style={tw`text-white/60 font-poppinsLight text-sm`}>
								Enter your card details manually
							</Text>
						</View>
					</TouchableOpacity>
				</RectangleGlassRow>
				<RectangleGlassRow>
					<TouchableOpacity
						style={tw`flex flex-row w-full gap-4`}
						onPress={() => router.push('/screens/searchCard')}
					>
						<View style={tw`p-2 bg-white/20 rounded-lg`}>
							<SvgXml xml={iconSearchCard} />
						</View>
						<View style={tw`flex flex-col flex-1`}>
							<Text style={tw`text-white font-poppinsMedium text-lg`}>
								Search Card
							</Text>
							<Text style={tw`text-white/60 text-sm font-poppinsLight`}>
								Search and manage your cards
							</Text>
						</View>
					</TouchableOpacity>
				</RectangleGlassRow>
			</View>
		</Wrapper>
	);
}
