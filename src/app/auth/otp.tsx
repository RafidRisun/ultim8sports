import BackButton from '@/src/components/BackButton';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';

export default function OTP() {
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
						onTextChange={text => console.log(text)}
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
						router.push('/auth/createNewPassword');
					}}
				/>
			</View>
		</KeyboardAvoidingWrapper>
	);
}
