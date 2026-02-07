import {
	iconEmail,
	iconFacebook,
	iconFullName,
	iconGoogle,
	iconLock,
	iconVisiblity,
} from '@/assets/icon';
import ErrorCard from '@/src/components/ErrorCard';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { useUserRegisterMutation } from '@/src/redux/api/authApi/authApi';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
	ActivityIndicator,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function SignUp() {
	const router = useRouter();
	const [fullNameFocused, setFullNameFocused] = useState(false);
	const [emailFocused, setEmailFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);
	const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [termsAccepted, setTermsAccepted] = useState(false);
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

	const [signup, { isLoading, isError, data, error }] =
		useUserRegisterMutation();

	const handleSignUp = async () => {
		try {
			const data = {
				full_name: fullName,
				email,
				password,
				password_confirmation: confirmPassword,
				termsAccepted,
			};
			console.log(data);
			const response = await signup(data).unwrap();
			if (response.status === true) {
				console.log('Sign Up successful:', response);
				router.push('/auth/otp');
			}
		} catch (error: any) {
			console.log(error);
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
			<ScrollView style={tw`flex-1 w-full my-10`}>
				<View style={tw`flex flex-col pb-4 gap-3 items-center justify-center`}>
					<Text style={tw`text-2xl font-poppinsSemiBold text-white`}>
						Sign Up
					</Text>
					<Text style={tw`text-gray-400 font-poppins text-xs`}>
						Give correct information to create Ultim8Sport account
					</Text>
				</View>
				<View style={tw`flex flex-col w-full gap-4`}>
					<View style={tw`flex flex-col gap-3 w-full`}>
						<Text style={tw`text-white pl-2`}>Full Name</Text>
						<View
							style={tw`w-full h-12 ${
								fullNameFocused
									? 'bg-black/40 border border-[#9E91BA]'
									: 'bg-white/10'
							} blur-3xl rounded-full flex flex-row items-center px-4`}
						>
							<SvgXml xml={iconFullName} />
							<TextInput
								style={tw`flex-1 h-full px-4 text-white`}
								onChangeText={setFullName}
								value={fullName}
								onFocus={() => setFullNameFocused(true)}
								onBlur={() => {
									fullName.length === 0 && setFullNameFocused(false);
								}}
							/>
						</View>
					</View>
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
								onPress={() =>
									setConfirmPasswordVisible(!confirmPasswordVisible)
								}
							>
								<SvgXml xml={iconVisiblity} />
							</TouchableOpacity>
						</View>
					</View>
					<View style={tw`flex flex-row items-center gap-2 px-3`}>
						<TouchableOpacity
							style={tw`w-4 h-4 rounded-sm border border-gray-600 items-center justify-center`}
							onPress={() => setTermsAccepted(!termsAccepted)}
						>
							{termsAccepted && (
								<View style={tw`w-3 h-3 bg-purple-300 rounded-sm`} />
							)}
						</TouchableOpacity>
						<Text style={tw`text-gray-400 font-poppins text-xs`}>
							By creating an account, you agree to the{' '}
							<Text style={tw`text-purple-300`}>Terms and Conditions</Text>
						</Text>
					</View>
					<RoundedLitButton
						text="Sign Up"
						action={() => {
							handleSignUp();
						}}
					/>
					{isError && (
						<ErrorCard>
							{(error as any)?.message ||
								'Sign Up failed. Please check your credentials and try again.'}
						</ErrorCard>
					)}
					<Text
						style={tw` w-full text-center pt-6 text-gray-400 font-poppins text-xs`}
					>
						Or continue with
					</Text>
					<View style={tw`flex flex-row gap-4 w-full mt-4`}>
						<TouchableOpacity
							style={tw`flex flex-row gap-2 flex-1 py-2 rounded-full border border-gray-800 items-center justify-center`}
						>
							<SvgXml xml={iconGoogle} />
							<Text style={tw`text-white`}>Google</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-2 flex-1 py-2 rounded-full border border-gray-800 items-center justify-center`}
						>
							<SvgXml xml={iconFacebook} />
							<Text style={tw`text-white`}>Facebook</Text>
						</TouchableOpacity>
					</View>
					<Text
						style={tw`w-full text-center pt-10 text-gray-400 font-poppins text-xs`}
					>
						Don&apos;t have an account?{' '}
						<Link href="/auth" style={tw`text-purple-300`}>
							Sign In
						</Link>
					</Text>
				</View>
			</ScrollView>
		</KeyboardAvoidingWrapper>
	);
}
