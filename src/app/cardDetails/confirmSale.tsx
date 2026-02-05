import { iconCalendar } from '@/assets/icon';
import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import CardInfoInput from '@/src/components/CardInfoInput';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { SvgXml } from 'react-native-svg';

export default function ConfirmSale() {
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Confirm Sale" back />
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
						<View style={tw`flex flex-col w-full gap-5 p-2`}>
							<View style={tw`flex flex-row w-full gap-3`}>
								<CardInfoInput label="SOLD PRICE ($)" />
								<CardInfoInput label="QUANTITY" />
							</View>
							<View style={tw`flex flex-col gap-2 w-full`}>
								<Text style={tw`text-white/90 text-xs font-poppinsLight`}>
									DATE OF SALE
								</Text>
								<TouchableOpacity
									style={tw`flex flex-row items-center justify-between px-4 w-full h-12 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
									onPress={() => setOpen(true)}
								>
									<Text style={tw`text-white font-poppins p-0 m-0`}>
										{date.toDateString()}
									</Text>
									<SvgXml xml={iconCalendar} />
								</TouchableOpacity>
							</View>
							<View style={tw`items-center justify-center p-4`}>
								<Text
									style={tw`text-purple-300 text-sm font-poppinsLight text-center`}
								>
									This card will be removed from your active portfolio if
									inventory reaches zero.
								</Text>
							</View>
						</View>
					</RectangleGlassRow>
					<DatePicker
						modal
						open={open}
						date={date}
						onConfirm={date => {
							setOpen(false);
							setDate(date);
						}}
						onCancel={() => {
							setOpen(false);
						}}
					/>
					<BrightRoundedButton text="Confirm Sale" action={() => {}} />
				</View>
			</ScrollView>
		</Wrapper>
	);
}
