import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Plans() {
	const [selectedPlan, setSelectedPlan] = React.useState<'monthly' | 'yearly'>(
		'monthly'
	);
	return (
		<Wrapper>
			<View style={tw`flex flex-col py-10 gap-3 items-center justify-center`}>
				<Text style={tw`text-2xl font-poppinsSemiBold text-white`}>
					Choose Your edge
				</Text>
				<Text style={tw`text-gray-400 font-poppins text-sm px-12 text-center`}>
					Unlock real-time market data and unlimited scanning.
				</Text>
			</View>
			<View
				style={tw`flex flex-row w-52 bg-black rounded-full border border-gray-700`}
			>
				<TouchableOpacity
					style={tw`flex-1 py-3 rounded-full`}
					onPress={() => setSelectedPlan('monthly')}
				>
					{selectedPlan === 'monthly' && (
						<LinearGradient
							colors={['#FFFFFF', '#8C52FF']}
							style={tw`absolute inset-0 rounded-full`}
						/>
					)}
					<Text
						style={tw`${
							selectedPlan === 'monthly' ? 'text-black' : 'text-white'
						} text-center font-poppinsMedium`}
					>
						Monthly
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex-1 py-3 rounded-full`}
					onPress={() => setSelectedPlan('yearly')}
				>
					{selectedPlan === 'yearly' && (
						<LinearGradient
							colors={['#FFFFFF', '#8C52FF']}
							style={tw`absolute inset-0 rounded-full`}
						/>
					)}
					<Text
						style={tw`${
							selectedPlan === 'yearly' ? 'text-black' : 'text-white'
						} text-center font-poppinsMedium`}
					>
						Yearly
					</Text>
				</TouchableOpacity>
			</View>
			<View style={tw`flex flex-col w-full gap-4 mt-6`}>
				{/* Plan details would go here */}
			</View>
		</Wrapper>
	);
}
