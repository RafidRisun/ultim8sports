import { iconBackOfCard, iconCardVisa, iconMasterCard } from '@/assets/icon';
import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SvgXml } from 'react-native-svg';

export default function Payment() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [isChecked, setChecked] = useState(false);
	const [items, setItems] = useState([
		{ label: 'USA', value: 'usa' },
		{ label: 'Canada', value: 'canada' },
		{ label: 'UK', value: 'uk' },
		{ label: 'Australia', value: 'australia' },
		{ label: 'Germany', value: 'germany' },
		{ label: 'France', value: 'france' },
		{ label: 'Italy', value: 'italy' },
	]);

	return (
		<Wrapper>
			<HeaderWithRoundBack title="Payment" back />
			<View style={tw`flex-1 flex-col justify-between`}>
				<View style={tw`flex flex-col w-full items-start gap-5  mt-12`}>
					<View style={tw`flex flex-col w-full items-start gap-4`}>
						<View style={tw`flex flex-row justify-between items-center w-full`}>
							<Text style={tw`text-xs font-poppins-300 text-white`}>
								Card information
							</Text>
						</View>

						<View style={tw`flex flex-col w-full`}>
							<View
								style={tw`flex flex-row items-center justify-between border border-b-0 border-purple-300 rounded-t-lg h-14 p-2`}
							>
								<TextInput
									onChange={() => {}}
									placeholder="Card information"
									placeholderTextColor="gray"
									style={tw`flex-1 text-white`}
								/>
								<View
									style={tw`flex flex-row gap-2 items-center justify-center`}
								>
									<SvgXml xml={iconCardVisa} />
									<SvgXml xml={iconMasterCard} />
								</View>
							</View>
							<View
								style={tw`flex flex-row items-center justify-between border border-purple-300 rounded-b-lg h-14`}
							>
								<View
									style={tw`flex flex-row flex-1 p-2 items-center justify-start h-full border-r border-purple-300`}
								>
									<TextInput
										onChange={() => {}}
										placeholder="MM/YY"
										placeholderTextColor="gray"
										style={tw`flex-1 text-white`}
									/>
								</View>
								<View
									style={tw`flex flex-row flex-1 p-2 items-center justify-between h-full`}
								>
									<TextInput
										onChange={() => {}}
										placeholder="CVC"
										placeholderTextColor="gray"
										style={tw`flex-1 text-white`}
									/>
									<SvgXml xml={iconBackOfCard} />
								</View>
							</View>
						</View>

						<View style={tw`flex flex-row justify-start items-center w-full`}>
							<Text style={tw`text-xs font-poppins-300 text-white`}>
								Billing Address
							</Text>
						</View>
						<View style={tw`flex flex-col w-full`}>
							<View
								style={tw`flex flex-row items-center justify-between border border-b-0 border-purple-300 rounded-t-lg h-14 p-2`}
							>
								<DropDownPicker
									open={open}
									value={value}
									items={items}
									setOpen={setOpen}
									setValue={setValue}
									setItems={setItems}
									placeholder="Select Country"
									style={{
										backgroundColor: 'transparent',
										borderWidth: 0,
									}}
									placeholderStyle={{ color: 'gray' }}
									labelStyle={{ color: 'white' }}
									dropDownContainerStyle={{
										backgroundColor: '#1E1E1E',
									}}
									textStyle={{
										fontSize: 15,
										color: 'white',
									}}
								/>
							</View>
							<View
								style={tw`flex flex-row items-center justify-between border border-purple-300 rounded-b-lg h-14 p-2`}
							>
								<TextInput
									onChange={() => {}}
									placeholder="ZIP"
									placeholderTextColor="gray"
									style={tw`flex-1 text-white`}
								/>
							</View>
							<View style={tw`flex flex-row items-center gap-2 p-3`}>
								<TouchableOpacity
									style={tw`w-4 h-4 rounded-sm border border-gray-600 items-center justify-center`}
									onPress={() => setChecked(!isChecked)}
								>
									{isChecked && (
										<View style={tw`w-3 h-3 bg-purple-300 rounded-sm`} />
									)}
								</TouchableOpacity>
								<Text style={tw`text-white font-poppins text-xs`}>
									Save this card for future payments
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={tw`w-full `}>
					<BrightRoundedButton
						text="Done"
						action={() => {
							router.replace('/(tabs)');
						}}
					/>
				</View>
			</View>
		</Wrapper>
	);
}
