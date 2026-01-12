import {
	iconHomeFocused,
	iconHomeUnfocused,
	iconProfileFocused,
	iconProfileUnfocused,
	iconScan,
	iconWalletFocused,
	iconWalletUnfocused,
	iconWatchlistFocued,
	iconWatchListUnfocused,
} from '@/assets/icon';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { GlassView } from 'expo-glass-effect';
import { Platform, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';

export default function TabBar({ state, descriptors, navigation }) {
	const { colors } = useTheme();
	const { buildHref } = useLinkBuilder();

	const { bottom } = useSafeAreaInsets();

	const homeFocused = iconHomeFocused;
	const homeUnfocused = iconHomeUnfocused;
	const walletFocused = iconWalletFocused;
	const walletUnfocused = iconWalletUnfocused;
	const scan = iconScan;
	const watchListFocused = iconWatchlistFocued;
	const watchListUnfocused = iconWatchListUnfocused;
	const profileFocused = iconProfileFocused;
	const profileUnfocused = iconProfileUnfocused;

	// console.log(
	// 	'Route names:',
	// 	state.routes.map(route => route.name)
	// );

	return (
		<View style={tw`flex w-full items-center justify-center`}>
			<View
				style={[
					tw`flex flex-row items-center justify-between absolute bottom-4 mx-4 border border-white/20 border-t-white/60 border-b-white/40 blur-lg rounded-full overflow-hidden max-w-100`,
					{ marginBottom: bottom },
				]}
			>
				{Platform.OS === 'ios' ? (
					<GlassView style={tw`absolute inset-0 rounded-full`} />
				) : (
					<BlurView
						intensity={100}
						// experimentalBlurMethod="dimezisBlurView"
						tint="dark"
						style={tw`absolute inset-0 rounded-full`}
					/>
				)}
				{state.routes.map((route, index) => {
					const { options } = descriptors[route.key];
					const label =
						options.tabBarLabel !== undefined
							? options.tabBarLabel
							: options.title !== undefined
							? options.title
							: route.name;

					const isFocused = state.index === index;

					const onPress = () => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.key,
							canPreventDefault: true,
						});

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.name, route.params);
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: 'tabLongPress',
							target: route.key,
						});
					};

					return (
						<TouchableOpacity
							key={route.name}
							href={buildHref(route.name, route.params)}
							accessibilityState={isFocused ? { selected: true } : {}}
							accessibilityLabel={options.tabBarAccessibilityLabel}
							testID={options.tabBarButtonTestID}
							onPress={onPress}
							onLongPress={onLongPress}
							style={tw`flex-1 aspect-square items-center justify-center rounded-full`}
						>
							{isFocused && (
								<View style={tw`absolute inset-0 bg-white rounded-full`} />
							)}
							{route.name === 'index' && (
								<SvgXml xml={isFocused ? homeFocused : homeUnfocused} />
							)}
							{route.name === 'inventory' && (
								<SvgXml xml={isFocused ? walletFocused : walletUnfocused} />
							)}
							{route.name === 'scan' && <SvgXml xml={scan} />}
							{route.name === 'watchlist' && (
								<SvgXml
									xml={isFocused ? watchListFocused : watchListUnfocused}
								/>
							)}
							{route.name === 'profile' && (
								<SvgXml xml={isFocused ? profileFocused : profileUnfocused} />
							)}
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
}
