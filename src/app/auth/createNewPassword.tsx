import { iconLock, iconVisiblity } from '@/assets/icon';
import ErrorCard from '@/src/components/ErrorCard';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useResetPasswordMutation } from '@/src/redux/api/authApi/authApi';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function CreateNewPassword() {
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

	const [resetPassword, { isLoading, isError, data, error }] =
		useResetPasswordMutation();

	const handleResetPassword = async () => {
		if (password !== confirmPassword) {
			// Handle password mismatch error
			Alert.alert('Error', 'Passwords do not match. Please try again.');
			return;
		}

		try {
			const data = {
				password: password,
				password_confirmation: confirmPassword,
			};
			const response = await resetPassword(data).unwrap();
			if (response.status === true) {
				console.log('Password reset successfully:', response);
				router.push('/auth');
			} else {
				console.log('Password reset failed:', response);
			}
		} catch (error: any) {
			console.log('Password reset error:', error);
		}
	};

	if (isLoading) {
		return (
			<Wrapper>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<ActivityIndicator size="large" color="#fff" />
				</View>
			</Wrapper>
		);
	}

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
						handleResetPassword();
					}}
				/>
				{isError && (
					<ErrorCard>
						{(error as any)?.message ||
							'Password Reset failed. Please try again.'}
					</ErrorCard>
				)}
			</View>
		</KeyboardAvoidingWrapper>
	);
}
