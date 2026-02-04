import { iconSearch } from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	FlatList,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function SalesHistory() {
	const router = useRouter();
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Sales History" back />
			<View style={tw`flex-1 w-full gap-4 pt-4`}>
				<View
					style={tw`flex flex-row w-full items-center border border-white/50 rounded-lg gap-3 px-4 py-1`}
				>
					<SvgXml xml={iconSearch} />
					<TextInput
						placeholder="Search players, teams, leagues..."
						style={tw`flex-1 text-white font-poppinsLight`}
						placeholderTextColor={'#989898'}
					/>
				</View>
				<Text style={tw`text-white font-poppinsMedium text-lg`}>
					Top Results
				</Text>
				<FlatList
					data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
					keyExtractor={(item, index) => index.toString()}
					contentContainerStyle={tw`flex flex-col gap-4 pb-30`}
					renderItem={({ item }) => (
						<RectangleGlassRow key={item}>
							<TouchableOpacity
								style={tw`flex flex-row items-center justify-between w-full gap-4 pr-2`}
								onPress={() => router.push('/screens/saleHistoryDetails')}
							>
								<View style={tw`flex flex-row gap-4`}>
									<Image
										source={require('@/assets/images/card1.jpg')}
										style={tw`h-14 w-10 rounded-md`}
										contentFit="cover"
									/>
									<View style={tw`flex flex-col gap-1 justify-center`}>
										<Text style={tw`text-white font-poppinsSemiBold text-sm`}>
											Michael Jordan
										</Text>
										<Text style={tw`text-gray-200 font-poppinsMedium text-xs`}>
											1986 Fleer
										</Text>
									</View>
								</View>
								<Text style={tw`text-white font-poppins text-lg`}>$5,250</Text>
							</TouchableOpacity>
						</RectangleGlassRow>
					)}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</Wrapper>
	);
}
