import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { Provider } from 'react-redux';
import Wrapper from '../components/Wrapper';
import tw from '../lib/tailwind';
import store from '../redux/store';

export default function Index() {
	const router = useRouter();

	const checkLoginStatus = async () => {
		setTimeout(async () => {
			await AsyncStorage.getItem('loggedInUser').then(loggedInUser => {
				if (loggedInUser) {
					router.replace('/subscription/plans');
				} else {
					router.replace('/auth');
				}
			});
		}, 1800);
	};

	useEffect(() => {
		checkLoginStatus();
	}, []);

	return (
		<Provider store={store}>
			<Wrapper>
				<Animated.View
					entering={FadeIn.delay(500).duration(1000)}
					style={tw`flex-1 justify-center items-center`}
				>
					<Image
						source={require('@/assets/images/logo.png')}
						style={{ width: 120, height: 120 }}
						contentFit="contain"
					/>
				</Animated.View>
			</Wrapper>
		</Provider>
	);
}
