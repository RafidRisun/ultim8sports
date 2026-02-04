import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function RootLayout() {
	const [loaded] = useFonts({
		poppins: require('@/assets/fonts/Poppins-Regular.ttf'),
		poppinsBold: require('@/assets/fonts/Poppins-Bold.ttf'),
		poppinsSemiBold: require('@/assets/fonts/Poppins-SemiBold.ttf'),
		poppinsMedium: require('@/assets/fonts/Poppins-Medium.ttf'),
		poppinsLight: require('@/assets/fonts/Poppins-Light.ttf'),
	});

	if (!loaded) return null;

	return (
		<Provider store={store}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(tabs)" />
				<Stack.Screen name="(common)" />
				<Stack.Screen name="auth" />
				<Stack.Screen name="subscription" />
				<Stack.Screen name="profile" />
				<Stack.Screen name="scan" />
			</Stack>
		</Provider>
	);
}
