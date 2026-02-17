import { iconCamera } from '@/assets/icon';
import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import {
	useGetProfileQuery,
	useUpdateProfileMutation,
} from '@/src/redux/api/profileApi/profileApi';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	Alert,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ProfileEdit() {
	const { data: profileData, isLoading, error, refetch } = useGetProfileQuery();
	const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

	const [image, setImage] = useState<string>('');
	const [fullName, setFullName] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	const handleSave = async () => {
		try {
			const formData = new FormData();

			formData.append('full_name', fullName);
			formData.append('email', email);
			if (image) {
				const fileExtension = image.split('.').pop();
				formData.append('avatar', {
					uri: image,
					name: `avatar.${fileExtension}`,
					type: `image/${fileExtension}`,
				} as any);
			}

			const response = await updateProfile(formData).unwrap();
			console.log('Profile updated successfully:', response);
			Alert.alert('Success', 'Profile updated successfully');
		} catch (error: any) {
			console.log(error);
			Alert.alert('Error', 'Failed to update profile. Please try again later.');
		}
	};

	const pickImage = async () => {
		const permissionResult =
			await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (!permissionResult.granted) {
			Alert.alert(
				'Permission required',
				'Permission to access the media library is required.',
			);
			return;
		}

		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		// console.log(result);

		if (!result.canceled) {
			console.log(result.assets[0].uri);
			setImage(result.assets[0].uri);
		}
	};

	useEffect(() => {
		if (profileData) {
			setFullName(profileData?.data?.user?.full_name);
			setEmail(profileData?.data?.user?.email);
			setImage(profileData?.data?.user?.avatar_url);
		}
	}, [profileData]);

	if (isLoading) {
		return (
			<Wrapper>
				<HeaderWithRoundBack title="Edit Profile" back />
				<View style={tw`items-center justify-center w-full p-6`}>
					<ActivityIndicator size="large" color="#fff" />
				</View>
			</Wrapper>
		);
	}

	if (error) {
		return (
			<Wrapper>
				<HeaderWithRoundBack title="Edit Profile" back />
				<View style={tw`items-center justify-center w-full p-6`}>
					<Text style={tw`text-white`}>
						Failed to load profile. Please try again later.
					</Text>
				</View>
			</Wrapper>
		);
	}

	if (profileData) {
		return (
			<Wrapper>
				<HeaderWithRoundBack title="Edit Profile" back />
				<View style={tw`items-center justify-center w-full p-6`}>
					<View style={tw`flex`}>
						<Image
							source={image}
							style={tw`h-28 w-28 rounded-full`}
							contentFit="cover"
						/>
						<TouchableOpacity
							style={tw`items-center justify-center w-9 h-9 rounded-full absolute bottom-0 right-0 bg-white`}
							onPress={pickImage}
						>
							<SvgXml xml={iconCamera} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={tw`flex-1 w-full gap-6 mt-12`}>
					<View style={tw`flex flex-col gap-2`}>
						<Text style={tw`text-white text-base font-poppinsMedium`}>
							Full Name
						</Text>
						<View
							style={tw`justify-center pl-4 w-full h-12 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
						>
							<TextInput
								style={tw`flex-1 h-full text-white p-0 font-poppins`}
								value={fullName}
								onChangeText={setFullName}
							/>
						</View>
					</View>
					<View style={tw`flex flex-col gap-2`}>
						<Text style={tw`text-white text-base font-poppinsMedium`}>
							Email
						</Text>
						<View
							style={tw`justify-center pl-4 w-full h-12 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
						>
							<TextInput
								style={tw`flex-1 h-full text-white p-0 font-poppins`}
								value={email}
								onChangeText={setEmail}
								textContentType="emailAddress"
							/>
						</View>
					</View>
				</View>
				<BrightRoundedButton
					text={isUpdating ? 'Updating...' : 'Save'}
					action={handleSave}
				/>
			</Wrapper>
		);
	}
}
