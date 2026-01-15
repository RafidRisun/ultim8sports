import { iconCalendar, iconPlus, iconPlusPurple } from '@/assets/icon';
import CardInfoInput from '@/src/components/CardInfoInput';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Picker } from '@react-native-picker/picker';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {
	KeyboardAvoidingView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { SvgXml } from 'react-native-svg';

export default function ManualCardInput() {
	//const height = useWindowDimensions().height;
	const [selectedLanguage, setSelectedLanguage] = React.useState('java');
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Add Card Details" back />
			<KeyboardAvoidingView style={tw`w-full`} behavior="padding">
				<ScrollView style={tw`w-full`}>
					<View style={tw`flex-1 w-full gap-4 pb-50`}>
						<View style={tw`flex w-full items-center justify-center p-4`}>
							<Image
								source={require('@/assets/images/card1.jpg')}
								style={tw`w-60 rounded-md h-70`}
								contentFit="cover"
							/>
						</View>
						<RectangleGlassRow>
							<View style={tw`flex flex-col w-full gap-5 p-2`}>
								<CardInfoInput label="Player Name" width="w-full" />
								<View style={tw`flex flex-row w-full gap-3`}>
									<CardInfoInput label="Year" width="flex-1" />
									<CardInfoInput label="Number(#)" width="flex-1" />
								</View>
								<CardInfoInput label="Series/Brand" width="w-full" />
								<View style={tw`flex flex-col gap-2 w-full`}>
									<Text style={tw`text-white/90 text-xs font-poppinsLight`}>
										Condition
									</Text>
									<View
										style={tw`justify-center pl-2 w-full h-14 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
									>
										<Picker
											selectedValue={selectedLanguage}
											onValueChange={(itemValue, itemIndex) =>
												setSelectedLanguage(itemValue)
											}
											style={tw`text-white font-poppins h-full p-0 m-0`}
										>
											<Picker.Item label="Java" value="java" />
											<Picker.Item label="JavaScript" value="js" />
										</Picker>
									</View>
								</View>
							</View>
						</RectangleGlassRow>
						<RectangleGlassRow>
							<View style={tw`flex flex-col w-full gap-5 p-2`}>
								<Text style={tw`text-purple-300 text-sm font-poppinsMedium`}>
									Purchase Details{' '}
									<Text style={tw`text-white/60 text-xs`}> {'(optional)'}</Text>
								</Text>
								<View style={tw`flex flex-row w-full gap-3`}>
									<CardInfoInput label="Cost Basis ($)" width="flex-1" />
									<CardInfoInput label="Asking Price ($)" width="flex-1" />
								</View>
								<View style={tw`flex flex-col gap-2 w-full`}>
									<Text style={tw`text-white/90 text-xs font-poppinsLight`}>
										Date of Purchase
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
						<View style={tw`flex flex-row w-full px-4 gap-4`}>
							<TouchableOpacity
								style={tw`flex flex-row gap-2 flex-1 py-3 rounded-full mt-10 items-center justify-center border-b-2 border-l-2 border-r-2 border-purple-300 shadow-xl shadow-[#9E91BA] bg-black relative`}
							>
								<SvgXml xml={iconPlusPurple} />
								<Text style={tw`text-purple-300 font-poppinsMedium text-lg`}>
									Watchlist
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={tw`flex flex-row gap-2 flex-1 py-3 rounded-full mt-10 items-center justify-center border-b-2 border-l-2 border-r-2 border-slate-400 shadow-xl shadow-[#9E91BA] bg-black relative`}
							>
								<LinearGradient
									colors={['#FFFFFF', '#8C52FF']}
									style={tw`absolute inset-0 rounded-full`}
								/>
								<SvgXml xml={iconPlus} />
								<Text style={tw`text-black font-poppinsMedium text-lg`}>
									Add Card
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</KeyboardAvoidingView>
		</Wrapper>
	);
}
