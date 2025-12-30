import { iconFacebook, iconGoogle } from '@/assets/icon';
import KeyboardAvoidingWrapper from '@/src/components/KeyboardAvoidingWrapper';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import tw from '@/src/lib/tailwind';
import { Link } from 'expo-router';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function SignUp() {
	return (
		<KeyboardAvoidingWrapper>
			<View style={tw`flex flex-col pb-10 gap-3 items-center justify-center`}>
				<Text style={tw`text-2xl font-poppinsSemiBold text-white`}>
					Sign Up
				</Text>
				<Text style={tw`text-gray-400 font-poppins text-xs`}>
					Access your account with correct information
				</Text>
			</View>
			<View style={tw`flex flex-col w-full gap-4`}>
				<View style={tw`flex flex-col gap-3 w-full`}>
					<Text style={tw`text-white pl-2`}>Email</Text>
					<View style={tw`w-full h-12 bg-white/10 blur-3xl rounded-full`}>
						<TextInput style={tw`w-full h-full px-4 text-white`} />
					</View>
				</View>
				<View style={tw`flex flex-col gap-3 w-full`}>
					<Text style={tw`text-white pl-2`}>Password</Text>
					<View style={tw`w-full h-12 bg-white/10 blur-2xl rounded-full`}>
						<TextInput style={tw`w-full h-full px-4 text-white`} />
					</View>
					<Link
						href="/"
						style={tw`text-right text-purple-300 font-poppins text-xs pr-2`}
					>
						Forgot Password?
					</Link>
				</View>
				<RoundedLitButton text="Sign In" />
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
