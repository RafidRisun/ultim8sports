import { iconCapture } from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ScanCard() {
	const router = useRouter();
	const [facing, setFacing] = useState<CameraType>('back');
	const [permission, requestPermission] = useCameraPermissions();

	const cameraRef = useRef<CameraView | null>(null);

	if (!permission) {
		// Camera permissions are still loading.
		return <View />;
	}

	const takePicture = async () => {
		if (cameraRef.current) {
			const photo = await cameraRef.current.takePictureAsync();
			console.log('Photo taken:', photo);
			router.push({
				pathname: '/screens/searchingCard',
				params: { photoUri: photo.uri },
			});
		} else {
			console.log('Camera reference is null');
		}
	};

	if (!permission.granted) {
		// Camera permissions are not granted yet.
		return (
			<Wrapper>
				<View style={styles.permissionContainer}>
					<Text style={styles.message}>
						We need your permission to show the camera
					</Text>
					<Button onPress={requestPermission} title="grant permission" />
				</View>
			</Wrapper>
		);
	}

	return (
		// <View style={{ flex: 1 }}>
		// 	<HeaderWithRoundBack title="Scan Card" back />
		// </View>
		<View style={styles.container}>
			<CameraView ref={cameraRef} style={styles.camera} facing={facing} />
			<View style={styles.headerContainer}>
				<HeaderWithRoundBack title="" back />
			</View>
			<View
				style={tw`flex absolute bottom-20 w-full items-center justify-center`}
			>
				<TouchableOpacity
					style={tw`flex rounded-full border-4 border-white/80 p-1`}
					onPress={takePicture}
				>
					<View
						style={tw`flex h-18 w-18 items-center justify-center rounded-full bg-white/90`}
					>
						<SvgXml xml={iconCapture} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	permissionContainer: {
		flex: 1,
		justifyContent: 'center',
		padding: 16,
	},
	message: {
		textAlign: 'center',
		paddingBottom: 10,
	},
	camera: {
		flex: 1,
	},
	headerContainer: {
		position: 'absolute',
		top: 20,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		width: '100%',
		paddingHorizontal: 16,
	},
	buttonContainer: {
		position: 'absolute',
		bottom: 64,
		flexDirection: 'row',
		backgroundColor: 'transparent',
		width: '100%',
		paddingHorizontal: 64,
	},
	button: {
		flex: 1,
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
	},
});
