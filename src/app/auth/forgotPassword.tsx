import { iconEmail } from '@/assets/icon';
import BackButton from '@/src/components/BackButton';
import ErrorCard from '@/src/components/ErrorCard';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useForgotPasswordMutation } from '@/src/redux/api/authApi/authApi';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ForgotPassword() {
	const [emailFocused, setEmailFocused] = useState(false);

	const [email, setEmail] = useState('');

	const [emailOtp, { isLoading, isError, data, error }] =
		useForgotPasswordMutation();

	const handleEmailOtp = async () => {
		try {
			const response = await emailOtp({ email }).unwrap();
			if (response.status === true) {
				console.log('Forgot password OTP sent successfully:', response);
				router.push({
					pathname: '/auth/otp',
					params: { operation: 'forgotPassword' },
				});
			} else {
				console.log('Forgot password OTP failed:', response);
			}
		} catch (error: any) {
			console.log('Forgot password OTP error:', error);
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

				<RoundedLitButton text="Get Code" action={handleEmailOtp} />
				{isError && (
					<ErrorCard>
						{(error as any)?.message || 'An error occurred. Please try again.'}
					</ErrorCard>
				)}
			</View>
		</KeyboardAvoidingWrapper>
	);
}
