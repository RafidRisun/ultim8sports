import DividerPurple from '@/src/components/DividerPurple';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function SaleRecord() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Record" back share />
			<ScrollView style={tw`w-full`}>
				<View style={tw`flex-1 w-full gap-6 pb-20`}>
					<View style={tw`flex w-full items-center justify-center p-4`}>
						<Image
							source={require('@/assets/images/card1.jpg')}
							style={tw`w-60 rounded-md h-70`}
							contentFit="cover"
						/>
					</View>
					<View
						style={tw`flex flex-col gap-4 px-4 w-full items-center justify-center`}
					>
						<Text style={tw`text-white text-2xl font-poppinsMedium`}>
							Michael Jordan
						</Text>
						<View style={tw`flex flex-row gap-4`}>
							<Text style={tw`text-gray-300 text-sm font-poppinsSemiBold`}>
								1996 Fleer
							</Text>
							<View
								style={tw`w-1.5 h-1.5 bg-gray-300 rounded-full self-center`}
							/>
							<Text style={tw`text-gray-300 text-sm font-poppinsSemiBold`}>
								#57 Rookie
							</Text>
						</View>
						<View style={tw`flex px-6 py-2 bg-gray-600/60 rounded-full`}>
							<Text style={tw`text-white text-base font-poppins`}>
								PSA 9 MINT
							</Text>
						</View>
					</View>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full items-center gap-2 p-2`}>
							<Text style={tw`text-white font-poppinsMedium text-xs`}>
								SOLD PRICE
							</Text>
							<Text style={tw`text-white font-poppinsSemiBold text-3xl`}>
								$1,250
							</Text>
							<DividerPurple />
							<View style={tw`flex flex-row w-full items-center`}>
								<View style={tw`flex-1 py-1 items-center`}>
									<View style={tw`flex flex-col gap-2 items-center`}>
										<Text style={tw`text-gray-300 font-poppins text-xs`}>
											QUANTITY
										</Text>
										<Text style={tw`text-white font-poppinsMedium text-2xl`}>
											1
										</Text>
									</View>
								</View>
								<View style={tw`w-0.75px bg-purple-700 h-full`} />
								<View style={tw`flex-1 py-1 items-center`}>
									<View style={tw`flex flex-col gap-2 items-center`}>
										<Text style={tw`text-gray-300 font-poppins text-xs`}>
											SOLD ON
										</Text>
										<Text style={tw`text-white font-poppinsMedium text-2xl`}>
											12 Aug 2023
										</Text>
									</View>
								</View>
							</View>
						</View>
					</RectangleGlassRow>
					<View style={tw`flex flex-col w-full gap-4`}>
						<View style={tw`flex flex-row w-full items-center gap-4`}>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										COST BASIS
									</Text>
									<Text style={tw`text-white font-poppinsMedium text-lg`}>
										$12,200
									</Text>
								</View>
							</RectangleGlass>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										SOLD PRICE
									</Text>
									<Text style={tw`text-white font-poppinsMedium text-lg`}>
										$14,200
									</Text>
								</View>
							</RectangleGlass>
						</View>
						<View style={tw`flex flex-row w-full items-center gap-4`}>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										NET PROFIT/LOSE
									</Text>
									<Text style={tw`text-green-500 font-poppinsMedium text-lg`}>
										+$12,200
									</Text>
								</View>
							</RectangleGlass>
							<RectangleGlass>
								<View style={tw`flex flex-col w-full items-start gap-2`}>
									<Text style={tw`text-xs font-poppinsLight text-white`}>
										MARKET VALUE ON DATE
									</Text>
									<Text style={tw`text-white font-poppinsMedium text-lg`}>
										$20,200
									</Text>
								</View>
							</RectangleGlass>
						</View>
					</View>
				</View>
			</ScrollView>
		</Wrapper>
	);
}
