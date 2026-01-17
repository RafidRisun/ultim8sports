import { iconBackArrow, iconCapture } from '@/assets/icon';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ScanCard() {
	const router = useRouter();
	const [facing, setFacing] = useState<CameraType>('back');
	const [permission, requestPermission] = useCameraPermissions();

	const cameraRef = useRef<CameraView | null>(null);
	const [previewSize, setPreviewSize] = useState({ width: 0, height: 0 });

	if (!permission) {
		// Camera permissions are still loading.
		return <View />;
	}

	const takePicture = async () => {
		if (!cameraRef.current) {
			console.log('Camera reference is null');
			return;
		}

		try {
			const photo = await cameraRef.current.takePictureAsync();
			console.log('Photo taken:', photo);

			// If we measured preview and have photo dimensions, crop to the frame
			if (
				previewSize.width > 0 &&
				previewSize.height > 0 &&
				(photo.width || photo.height)
			) {
				const photoW =
					photo.width ??
					(photo.height
						? photo.height * (previewSize.width / previewSize.height)
						: 0);
				const photoH =
					photo.height ??
					(photo.width
						? photo.width * (previewSize.height / previewSize.width)
						: 0);

				// Compute frame size & position on screen (same logic as in render)
				const padding = 20;
				let frameW = Math.max(0, previewSize.width - padding * 2);
				let frameH = (frameW * 7) / 5; // 5:7 width:height
				if (frameH > previewSize.height - padding * 4) {
					frameH = previewSize.height - padding * 4;
					frameW = (frameH * 5) / 7;
				}
				const frameX = Math.round((previewSize.width - frameW) / 2);
				const frameY = Math.round((previewSize.height - frameH) / 2);

				const scaleX = photoW / previewSize.width;
				const scaleY = photoH / previewSize.height;

				const crop = {
					originX: Math.max(0, Math.round(frameX * scaleX)),
					originY: Math.max(0, Math.round(frameY * scaleY)),
					width: Math.max(1, Math.round(frameW * scaleX)),
					height: Math.max(1, Math.round(frameH * scaleY)),
				};

				try {
					const result = await manipulateAsync(photo.uri, [{ crop }], {
						compress: 1,
						format: SaveFormat.JPEG,
					});
					console.log('Cropped image:', result.uri);
					router.push({
						pathname: '/screens/searchingCard',
						params: { photoUri: result.uri },
					});
					return;
				} catch (e) {
					console.warn('Crop failed, sending original photo', e);
				}
			}

			// Fallback: send original photo
			router.push({
				pathname: '/screens/searchingCard',
				params: { photoUri: photo.uri },
			});
		} catch (err) {
			console.error('takePicture error', err);
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

	// compute overlay frame metrics from measured previewSize
	const padding = 20;
	let frameWidth = Math.max(0, previewSize.width - padding * 2);
	let frameHeight = (frameWidth * 7) / 5; // 5:7 width:height
	if (frameHeight > previewSize.height - padding * 4) {
		frameHeight = previewSize.height - padding * 4;
		frameWidth = (frameHeight * 5) / 7;
	}
	const frameX = Math.round((previewSize.width - frameWidth) / 2);
	const frameY = Math.round((previewSize.height - frameHeight) / 2);

	return (
		// <View style={{ flex: 1 }}>
		// 	<HeaderWithRoundBack title="Scan Card" back />
		// </View>
		<View style={styles.container}>
			<CameraView
				ref={cameraRef}
				style={styles.camera}
				facing={facing}
				onLayout={e => {
					const { width, height } = e.nativeEvent.layout;
					setPreviewSize({ width, height });
				}}
			/>

			{/* Overlay with centered 5:7 frame */}
			<View pointerEvents="none" style={StyleSheet.absoluteFill}>
				{/* dimmed top */}
				<View style={[styles.overlayTop, { height: frameY }]} />
				{/* middle row: left dim, frame, right dim */}
				<View
					style={[styles.overlayMiddle, { top: frameY, height: frameHeight }]}
				>
					<View style={[styles.sideOverlay, { width: frameX }]} />
					<View
						style={[styles.frame, { width: frameWidth, height: frameHeight }]}
					/>
					<View style={[styles.sideOverlay, { width: frameX }]} />
				</View>
				{/* bottom */}
				<View
					style={[
						styles.overlayBottom,
						{
							top: frameY + frameHeight,
							height: Math.max(0, previewSize.height - (frameY + frameHeight)),
						},
					]}
				/>
			</View>
			<View style={styles.headerContainer}>
				<View
					style={tw`flex flex-row items-center justify-between w-full my-4`}
				>
					<TouchableOpacity
						style={tw`flex items-center justify-center h-11 w-11 rounded-full bg-white/10 border border-white/20 border-t-white/40 border-b-white/30 blur-lg`}
						onPress={() => {
							router.replace('/(tabs)/scan');
						}}
					>
						<SvgXml xml={iconBackArrow} />
					</TouchableOpacity>

					<View style={tw`w-11 h-11`}></View>
				</View>
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
	overlayTop: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 10,
	},
	overlayMiddle: {
		position: 'absolute',
		left: 0,
		right: 0,
		flexDirection: 'row',
		zIndex: 10,
		backgroundColor: 'transparent',
	},
	overlayBottom: {
		position: 'absolute',
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0,0,0,0.5)',
		zIndex: 10,
	},
	sideOverlay: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		height: '100%',
	},
	frame: {
		borderWidth: 4,
		borderColor: '#AD4EFF',
		backgroundColor: 'transparent',
	},
});
