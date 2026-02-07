import BackButton from '@/src/components/BackButton';
import ErrorCard from '@/src/components/ErrorCard';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useOtpVerifyMutation } from '@/src/redux/api/authApi/authApi';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

export default function OTP() {
	const operation = useLocalSearchParams().operation as
		| 'signup'
		| 'forgotPassword';
	const [otp, setOtp] = React.useState('');

	const [verify, { isLoading, isError, data, error }] = useOtpVerifyMutation();

	const handleVerify = async () => {
		try {
			const response = await verify({ otp }).unwrap();
			if (response.status === true) {
				console.log('OTP verification successful:', response);
				if (operation === 'signup') {
					router.push('/auth');
				} else if (operation === 'forgotPassword') {
					router.push('/auth/createNewPassword');
				}
			} else {
				console.log('OTP verification failed:', response);
			}
		} catch (error: any) {
			console.log('OTP verification error:', error);
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
					Verify Email
				</Text>
				<Text style={tw`text-gray-400 font-poppins text-xs`}>
					Provide the code sent to your email to verify your account
				</Text>
			</View>
			<View style={tw`flex flex-col w-full gap-4`}>
				<View style={tw`flex flex-col gap-3 w-full`}>
					<Text style={tw`text-white pl-2`}>Verify OTP</Text>
					<OtpInput
						numberOfDigits={6}
						onTextChange={setOtp}
						focusColor="#8C52FF"
						theme={{
							pinCodeTextStyle: {
								color: 'white',
								fontSize: 20,
								fontWeight: 'bold',
							},
						}}
					/>
				</View>

				<RoundedLitButton
					text="Verify"
					action={() => {
						handleVerify();
					}}
				/>
				{isError && (
					<ErrorCard>
						{(error as any)?.message ||
							'OTP verification failed. Please try again.'}
					</ErrorCard>
				)}
			</View>
		</KeyboardAvoidingWrapper>
	);
}
