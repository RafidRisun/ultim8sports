import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function RootLayout() {
	const [loaded] = useFonts({
		poppins: require('@/assets/fonts/Poppins-Regular.ttf'),
		poppinsBold: require('@/assets/fonts/Poppins-Bold.ttf'),
		poppinsSemiBold: require('@/assets/fonts/Poppins-SemiBold.ttf'),
		poppinsMedium: require('@/assets/fonts/Poppins-Medium.ttf'),
		poppinsLight: require('@/assets/fonts/Poppins-Light.ttf'),
	});

	if (!loaded) return null;

	return <Stack screenOptions={{ headerShown: false }} />;
}
