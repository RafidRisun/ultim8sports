import { iconCamera } from '@/assets/icon';
import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ProfileEdit() {
	const [image, setImage] = useState<string | null>(null);

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library.
		// Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
		// and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
		// so the app users aren't surprised by a system dialog after picking a video.
		// See "Invoke permissions for videos" sub section for more details.
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
			mediaTypes: ['images', 'videos'],
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});

		// console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Edit Profile" back />
			<View style={tw`items-center justify-center w-full p-6`}>
				<View style={tw`flex`}>
					<Image
						// source={require('@/assets/images/profile photo.jpg')}
						source={
							image
								? { uri: image }
								: require('@/assets/images/profile photo.jpg')
						}
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
							// value={value}
						/>
					</View>
				</View>
				<View style={tw`flex flex-col gap-2`}>
					<Text style={tw`text-white text-base font-poppinsMedium`}>Email</Text>
					<View
						style={tw`justify-center pl-4 w-full h-12 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
					>
						<TextInput
							style={tw`flex-1 h-full text-white p-0 font-poppins`}
							// value={value}
							textContentType="emailAddress"
						/>
					</View>
				</View>
			</View>
			<BrightRoundedButton text="Save" action={() => {}} />
		</Wrapper>
	);
}
