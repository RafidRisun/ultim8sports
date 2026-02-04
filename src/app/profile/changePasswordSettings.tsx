import { iconLock, iconVisiblity } from '@/assets/icon';
import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ChangePasswordSettings() {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [password, setPassword] = useState('');
	const [newPasswordVisible, setNewPasswordVisible] = useState(false);
	const [newPassword, setNewPassword] = useState('');
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState('');
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Change Password" back />
			<View style={tw`flex-1 w-full gap-6 mt-12`}>
				<View style={tw`flex flex-col gap-2`}>
					<Text style={tw`text-white text-base font-poppinsMedium`}>
						Current Password
					</Text>
					<View
						style={tw`flex flex-row items-center justify-center px-4 w-full h-12 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
					>
						<SvgXml xml={iconLock} />
						<TextInput
							style={tw`flex-1 h-full px-4 text-white`}
							secureTextEntry={!passwordVisible}
							onChangeText={setPassword}
							value={password}
						/>
						<TouchableOpacity
							onPress={() => setPasswordVisible(!passwordVisible)}
						>
							<SvgXml xml={iconVisiblity} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={tw`flex flex-col gap-2`}>
					<Text style={tw`text-white text-base font-poppinsMedium`}>
						New Password
					</Text>
					<View
						style={tw`flex flex-row items-center justify-center px-4 w-full h-12 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
					>
						<SvgXml xml={iconLock} />
						<TextInput
							style={tw`flex-1 h-full px-4 text-white`}
							secureTextEntry={!newPasswordVisible}
							onChangeText={setNewPassword}
							value={newPassword}
						/>
						<TouchableOpacity
							onPress={() => setNewPasswordVisible(!newPasswordVisible)}
						>
							<SvgXml xml={iconVisiblity} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={tw`flex flex-col gap-2`}>
					<Text style={tw`text-white text-base font-poppinsMedium`}>
						Confirm Password
					</Text>
					<View
						style={tw`flex flex-row items-center justify-center px-4 w-full h-12 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
					>
						<SvgXml xml={iconLock} />
						<TextInput
							style={tw`flex-1 h-full px-4 text-white`}
							secureTextEntry={!confirmPasswordVisible}
							onChangeText={setConfirmPassword}
							value={confirmPassword}
						/>
						<TouchableOpacity
							onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
						>
							<SvgXml xml={iconVisiblity} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<BrightRoundedButton text="Update" action={() => {}} />
		</Wrapper>
	);
}
