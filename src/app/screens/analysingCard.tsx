import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function AnalysingCard() {
	const { photoUri } = useLocalSearchParams();

	const router = useRouter();
	useEffect(() => {
		const routes = ['/screens/scanResult', '/screens/identifyFailed'] as const;
		const chosen = routes[Math.random() < 0.5 ? 0 : 1];

		const t = setTimeout(() => {
			router.replace(chosen);
		}, 4000);

		return () => clearTimeout(t);
	}, [router]);

	const scanAnim = useRef(new Animated.Value(0));
	const [containerHeight, setContainerHeight] = useState<number>(0);
	const scanBarHeight = 16;

	useEffect(() => {
		if (!containerHeight) return;
		const start = -scanBarHeight;
		const end = containerHeight;

		scanAnim.current.setValue(start);

		const animation = Animated.loop(
			Animated.timing(scanAnim.current, {
				toValue: end,
				duration: 2000,
				easing: Easing.linear,
				useNativeDriver: true,
			}),
		);

		animation.start();
		return () => animation.stop();
	}, [containerHeight]);

	return (
		<Wrapper>
			<View style={tw`flex-1 flex-col items-center justify-start gap-8 pt-8`}>
				<View
					style={[
						tw`w-50 h-70 rounded-lg mt-8 border-4 border-purple-500`,
						{ overflow: 'hidden' },
					]}
					onLayout={e => setContainerHeight(e.nativeEvent.layout.height)}
				>
					<Image
						source={{ uri: photoUri as string }}
						style={{ width: '100%', height: '100%' }}
						contentFit="cover"
					/>

					<AnimatedLinearGradient
						colors={['transparent', '#8C52FF', 'transparent']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 0 }}
						style={{
							position: 'absolute',
							left: 0,
							right: 0,
							height: scanBarHeight,
							transform: [{ translateY: scanAnim.current }],
						}}
						pointerEvents="none"
					/>
				</View>

				<View
					style={tw`flex flex-col w-full items-center justify-center gap-4`}
				>
					<Text style={tw`text-2xl text-purple-300 font-poppinsSemiBold`}>
						Analysing Card
					</Text>
					<Text style={tw`text-white text-sm font-poppinsSemiBold`}>
						Identifying card and fetching details...
					</Text>
				</View>
			</View>
		</Wrapper>
	);
}
