import {
	iconEmail,
	iconFacebook,
	iconGoogle,
	iconLock,
	iconVisiblity,
} from '@/assets/icon';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import tw from '@/src/lib/tailwind';
import { Link, router } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function SignIn() {
	const [emailFocused, setEmailFocused] = useState(false);
	const [passwordFocused, setPasswordFocused] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<KeyboardAvoidingWrapper>
			<View style={tw`flex flex-col pb-10 gap-3 items-center justify-center`}>
				<Text style={tw`text-2xl font-poppinsSemiBold text-white`}>
					Sign In
				</Text>
				<Text style={tw`text-gray-400 font-poppins text-xs`}>
					Access your account with correct information
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
					<Link
						href="/auth/forgotPassword"
						style={tw`text-right text-purple-300 font-poppins text-xs pr-2`}
					>
						Forgot Password?
					</Link>
				</View>
				<RoundedLitButton
					text="Sign In"
					action={() => {
						router.replace('/(common)/plans');
					}}
				/>
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
					<Link href="/auth/signup" style={tw`text-purple-300`}>
						Sign Up
					</Link>
				</Text>
			</View>
		</KeyboardAvoidingWrapper>
	);
}
