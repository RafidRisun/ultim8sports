import tw from '@/src/lib/tailwind';
import { StatusBar } from 'expo-status-bar';
import {
	ImageBackground,
	Keyboard,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Wrapper({ children }: { children: React.ReactNode }) {
	const { top, bottom } = useSafeAreaInsets();

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
			style={tw`flex-1`}
		>
			<ImageBackground
				source={require('@/assets/images/Splash.png')}
				style={[
					tw`flex-1  w-full items-center`,
					{ paddingTop: top, paddingBottom: bottom },
				]}
			>
				<StatusBar style="light" />
				{/* <KeyboardAvoidingView
					behavior="padding"
					style={tw`flex-1 w-full pt-14`}
				>
					<ScrollView style={tw`w-full`}>{children}</ScrollView>
				</KeyboardAvoidingView> */}
				<View style={tw`flex-1 px-[4%] w-full`}>{children}</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}
