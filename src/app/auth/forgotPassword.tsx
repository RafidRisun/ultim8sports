import { iconEmail } from '@/assets/icon';
import BackButton from '@/src/components/BackButton';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ForgotPassword() {
	const [emailFocused, setEmailFocused] = useState(false);

	const [email, setEmail] = useState('');

	return (
		<KeyboardAvoidingWrapper>
			<BackButton />
			<View style={tw`flex flex-col pb-10 gap-3 items-center justify-center`}>
				<Text style={tw`text-2xl font-poppinsSemiBold text-white`}>
					Forgot Password
				</Text>
				<Text style={tw`text-gray-400 font-poppins text-xs`}>
					Provide email to reset your password
				</Text>
			</View>
			<View style={tw`flex flex-col w-full gap-4`}>
				<View style={tw`flex flex-col gap-3 w-full`}>
					<Text style={tw`text-white pl-2`}>Email</Text>
					<View
						style={tw`w-full h-12 ${
							emailFocused
								? 'bg-black/40 border border-[#9E91BA]'
								: 'bg-white/10'
						} blur-3xl rounded-full flex flex-row items-center px-4`}
					>
						<SvgXml xml={iconEmail} />
						<TextInput
							style={tw`flex-1 h-full px-4 text-white`}
							onChangeText={setEmail}
							value={email}
							onFocus={() => setEmailFocused(true)}
							onBlur={() => {
								email.length === 0 && setEmailFocused(false);
							}}
						/>
					</View>
				</View>

				<RoundedLitButton
					text="Get Code"
					action={() => {
						router.push('/auth/otp');
					}}
				/>
			</View>
		</KeyboardAvoidingWrapper>
	);
}
