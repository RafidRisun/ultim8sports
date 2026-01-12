import {
	iconManualCardEntry,
	iconSalesHistory,
	iconScanCard,
	iconSearchCard,
} from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { BlurView } from 'expo-blur';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Scan() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Add Card" />
			<View style={tw`flex flex-col items-center justify-start gap-5 mt-8`}>
				<TouchableOpacity
					style={tw`flex flex-row w-full p-2 border border-white/20 border-t-white/40 border-b-white/30 blur-lg rounded-xl items-start gap-4`}
				>
					<BlurView
						intensity={40}
						// experimentalBlurMethod="dimezisBlurView"
						tint="dark"
						style={tw`absolute inset-0 rounded-xl`}
					/>
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
				<TouchableOpacity
					style={tw`flex flex-row w-full p-2 border border-white/20 border-t-white/40 border-b-white/30 blur-lg rounded-xl items-start gap-4`}
				>
					<BlurView
						intensity={40}
						// experimentalBlurMethod="dimezisBlurView"
						tint="dark"
						style={tw`absolute inset-0 rounded-xl`}
					/>
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
				<TouchableOpacity
					style={tw`flex flex-row w-full p-2 border border-white/20 border-t-white/40 border-b-white/30 blur-lg rounded-xl items-start gap-4`}
				>
					<BlurView
						intensity={40}
						// experimentalBlurMethod="dimezisBlurView"
						tint="dark"
						style={tw`absolute inset-0 rounded-xl`}
					/>
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
				<TouchableOpacity
					style={tw`flex flex-row w-full p-2 border border-white/20 border-t-white/40 border-b-white/30 blur-lg rounded-xl items-start gap-4`}
				>
					<BlurView
						intensity={40}
						// experimentalBlurMethod="dimezisBlurView"
						tint="dark"
						style={tw`absolute inset-0 rounded-xl`}
					/>
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
			</View>
		</Wrapper>
	);
}
