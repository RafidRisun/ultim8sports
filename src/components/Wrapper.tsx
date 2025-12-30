import tw from '@/src/lib/tailwind';
import { StatusBar } from 'expo-status-bar';
import {
	ImageBackground,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';

export default function Wrapper({ children }: { children: React.ReactNode }) {
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<ImageBackground
				source={require('@/assets/images/Splash.png')}
				style={tw`flex-1 w-full pt-14 items-center`}
			>
				<StatusBar style="light" />
				{/* <KeyboardAvoidingView
					behavior="padding"
					style={tw`flex-1 w-full pt-14`}
				>
					<ScrollView style={tw`w-full`}>{children}</ScrollView>
				</KeyboardAvoidingView> */}
				{children}
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}
