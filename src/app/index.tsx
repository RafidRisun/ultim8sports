import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Wrapper from '../components/Wrapper';
import tw from '../lib/tailwind';

export default function Index() {
	const router = useRouter();

	const checkLoginStatus = async () => {
		setTimeout(() => {
			router.replace('/auth');
		}, 1800);
	};

	useEffect(() => {
		checkLoginStatus();
	}, []);

	return (
		<Wrapper>
			<Animated.View
				entering={FadeIn.delay(500).duration(1000)}
				style={tw`flex-1 justify-center items-center`}
			>
				<Text style={tw`text-white font-poppinsMedium text-2xl`}>
					CAN I GET A UHHH
				</Text>
			</Animated.View>
		</Wrapper>
	);
}
