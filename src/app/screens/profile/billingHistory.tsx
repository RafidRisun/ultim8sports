import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

export default function BillingHistory() {
	const router = useRouter();
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Billing History" back />
			<View style={tw`flex-1 w-full gap-4 pt-4`}>
				<FlatList
					data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
					keyExtractor={(item, index) => index.toString()}
					contentContainerStyle={tw`flex flex-col gap-4 pb-30`}
					renderItem={({ item }) => (
						<RectangleGlassRow key={item}>
							<TouchableOpacity
								style={tw`flex flex-row items-center justify-between w-full gap-4 p-2`}
							>
								<View style={tw`flex flex-row gap-4`}>
									<View style={tw`flex flex-col gap-1 justify-center`}>
										<Text style={tw`text-white font-poppinsSemiBold text-sm`}>
											$9.99
										</Text>
										<Text style={tw`text-gray-200 font-poppinsMedium text-xs`}>
											12 Jul, 2024
										</Text>
									</View>
								</View>
								<View
									style={tw`items-center justify-center px-2 py-1 rounded-md bg-green-500/20`}
								>
									<Text style={tw`text-green-500 font-poppinsMedium text-xs`}>
										Paid
									</Text>
								</View>
							</TouchableOpacity>
						</RectangleGlassRow>
					)}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</Wrapper>
	);
}
