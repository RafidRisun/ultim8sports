import { iconCalendar, iconPlus, iconPlusPurple } from '@/assets/icon';
import CardInfoInput from '@/src/components/CardInfoInput';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Picker } from '@react-native-picker/picker';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { LineChart } from 'react-native-gifted-charts';
import { SvgXml } from 'react-native-svg';

export default function ScanResult() {
	const router = useRouter();
	const [selectedLanguage, setSelectedLanguage] = useState('psa9');
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Card Details" back={true} />
			<ScrollView style={tw`w-full`}>
				<View style={tw`flex-1 w-full gap-4 pb-20`}>
					<View style={tw`flex w-full items-center justify-center p-4`}>
						<Image
							source={require('@/assets/images/card1.jpg')}
							style={tw`w-60 rounded-md h-70`}
							contentFit="cover"
						/>
					</View>
					<RectangleGlass>
						<View style={tw`flex flex-row w-full gap-5 p-2`}>
							<View style={tw`flex flex-col flex-1 gap-2`}>
								<Text style={tw`text-white font-poppinsMedium text-xs`}>
									ESTIMATED MARKET VALUE
								</Text>
								<Text style={tw`text-white font-poppinsBold text-3xl`}>
									$1,250
								</Text>
								<View style={tw`flex flex-row items-center gap-2`}>
									<Text style={tw`text-green-500 font-poppinsMedium text-sm`}>
										+5.25%
									</Text>
									<Text style={tw`text-white/70 font-poppinsLight text-xs`}>
										Since last week
									</Text>
								</View>
							</View>
							<View style={tw`pt-2`}>
								<LineChart
									isAnimated
									areaChart
									data={baseballData}
									startFillColor={'#00FF00'}
									startOpacity={0.3}
									endFillColor1={'#00FF00'}
									endOpacity={0.3}
									hideDataPoints
									curved
									adjustToWidth
									initialSpacing={0}
									hideAxesAndRules
									hideYAxisText
									color={'#00FF00'}
									yAxisLabelWidth={0}
									xAxisLabelsHeight={0}
									height={70}
									width={100}
								/>
							</View>
						</View>
						<RoundedLitButton
							text="View Market History"
							action={() => router.push('/scan/salesHistory')}
						/>
					</RectangleGlass>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-5 p-2`}>
							<CardInfoInput label="Player Name" value="Michael Jordan" />
							<View style={tw`flex flex-row w-full gap-3`}>
								<CardInfoInput label="Year" value="1996" />
								<CardInfoInput label="Number(#)" value="57" />
							</View>
							<CardInfoInput label="Series/Brand" value="Fleer" />
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
										<Picker.Item label="PSA 9" value="psa9" />
										<Picker.Item label="PSA 10" value="psa10" />
										<Picker.Item label="BGS 9.5" value="bgs95" />
										<Picker.Item label="BGS 10" value="bgs10" />
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
								<CardInfoInput label="Cost Basis ($)" />
								<CardInfoInput label="Asking Price ($)" />
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
		</Wrapper>
	);
}

const baseballData = [
	{ value: 30, label: 'Jan' },
	{ value: 50, label: 'Feb' },
	{ value: 45, label: 'Mar' },
	{ value: 160, label: 'Apr' },
	{ value: 90, label: 'May' },
	{ value: 130, label: 'Jun' },
	{ value: 170, label: 'Jul' },
	{ value: 200, label: 'Aug' },
	{ value: 180, label: 'Sep' },
	{ value: 220, label: 'Oct' },
	{ value: 240, label: 'Nov' },
	{ value: 260, label: 'Dec' },
];
