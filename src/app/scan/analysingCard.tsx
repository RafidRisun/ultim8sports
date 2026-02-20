import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import {
	useAiSearchMutation,
	useLazyStartScrapeQuery,
} from '@/src/redux/api/scanApi/scanApi';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export default function AnalysingCard() {
	const { photoUri } = useLocalSearchParams();
	const [status, setStatus] = useState(
		'Identifying card and fetching details...',
	);

	const [aiSearch, { isLoading, error }] = useAiSearchMutation();
	const [
		triggerScrape,
		{ data: scrapeData, isLoading: isScrapeLoading, error: scrapeError },
	] = useLazyStartScrapeQuery();

	const router = useRouter();
	// useEffect(() => {
	// 	const routes = ['/scan/scanResult', '/scan/identifyFailed'] as const;
	// 	const chosen = routes[Math.random() < 0.5 ? 0 : 1];

	// 	const t = setTimeout(() => {
	// 		router.replace(chosen);
	// 	}, 2000);

	// 	return () => clearTimeout(t);
	// }, [router]);

	async function handleAiSearch(photoUri: string | string[] | undefined) {
		if (!photoUri || typeof photoUri !== 'string') return;
		const formData = new FormData();
		const fileExtension = photoUri.split('.').pop();
		formData.append('card_image[0]', {
			uri: photoUri,
			name: `card.${fileExtension}`,
			type: `image/${fileExtension}`,
		} as any);
		try {
			const result = await aiSearch(formData).unwrap();
			console.log('AI Search Result:', result);
			setStatus('Card Identified. Fetching latest market details...');
			if (result?.data?.total_cards_found > 0) {
				try {
					// console.log('year:', result.data.cards[0].year);
					// console.log('condition:', result.data.cards[0].condition);
					// console.log('number:', result.data.cards[0].number);
					// console.log('search_title:', result.data.cards[0].search_title);
					const scrapeResult = await triggerScrape({
						year: result.data.cards[0].year,
						condition: result.data.cards[0].condition,
						number: result.data.cards[0].number,
						search_title: result.data.cards[0].search_title,
					}).unwrap();
					console.log('Scrape Result:', scrapeResult);
					router.replace({
						pathname: '/scan/scanResult',
						params: {
							cardData: JSON.stringify(result.data.cards[0]),
							scrapeData: JSON.stringify(scrapeResult),
							photoUri: photoUri,
						},
					});
				} catch (scrapeError) {
					console.error('Scrape Error:', scrapeError);
					router.replace('/scan/identifyFailed');
				}
			} else {
				router.replace('/scan/identifyFailed');
			}
		} catch (error) {
			console.error('AI Search Error:', error);
		}
	}

	useEffect(() => {
		handleAiSearch(photoUri);
	}, [photoUri]);

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
				duration: 1000,
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
						Analyzing Card
					</Text>
					<Text style={tw`text-white text-sm font-poppinsSemiBold`}>
						{status}
					</Text>
				</View>
			</View>
		</Wrapper>
	);
}
