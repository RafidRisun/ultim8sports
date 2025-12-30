import { iconLock, iconVisiblity } from '@/assets/icon';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function CreateNewPassword() {
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

	return (
		<KeyboardAvoidingWrapper>
			<View style={tw`flex flex-col pb-10 gap-3 items-center justify-center`}>
				<Text style={tw`text-2xl font-poppinsSemiBold text-white`}>
					Create New Password
				</Text>
				<Text style={tw`text-gray-400 font-poppins text-xs`}>
					Provide a strong password to secure your account
				</Text>
			</View>
			<View style={tw`flex flex-col w-full gap-4`}>
				<View style={tw`flex flex-col gap-3 w-full`}>
					<Text style={tw`text-white pl-2`}>Password</Text>
					<View
						style={tw`w-full h-12 ${
							passwordFocused
								? 'bg-black/40 border border-[#9E91BA]'
								: 'bg-white/10'
						} blur-2xl rounded-full flex flex-row items-center px-4`}
					>
						<SvgXml xml={iconLock} />
						<TextInput
							style={tw`flex-1 h-full px-4 text-white`}
							secureTextEntry={!passwordVisible}
							onChangeText={setPassword}
							value={password}
							onFocus={() => setPasswordFocused(true)}
							onBlur={() => {
								password.length === 0 && setPasswordFocused(false);
							}}
						/>
						<TouchableOpacity
							onPress={() => setPasswordVisible(!passwordVisible)}
						>
							<SvgXml xml={iconVisiblity} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={tw`flex flex-col gap-3 w-full`}>
					<Text style={tw`text-white pl-2`}>Confirm Password</Text>
					<View
						style={tw`w-full h-12 ${
							confirmPasswordFocused
								? 'bg-black/40 border border-[#9E91BA]'
								: 'bg-white/10'
						} blur-2xl rounded-full flex flex-row items-center px-4`}
					>
						<SvgXml xml={iconLock} />
						<TextInput
							style={tw`flex-1 h-full px-4 text-white`}
							secureTextEntry={!confirmPasswordVisible}
							onChangeText={setConfirmPassword}
							value={confirmPassword}
							onFocus={() => setConfirmPasswordFocused(true)}
							onBlur={() => {
								confirmPassword.length === 0 &&
									setConfirmPasswordFocused(false);
							}}
						/>
						<TouchableOpacity
							onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
						>
							<SvgXml xml={iconVisiblity} />
						</TouchableOpacity>
					</View>
				</View>

				<RoundedLitButton
					text="Set Password"
					action={() => {
						router.push('/auth');
					}}
				/>
			</View>
		</KeyboardAvoidingWrapper>
	);
}
