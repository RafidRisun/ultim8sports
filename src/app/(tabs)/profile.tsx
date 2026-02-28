import {
	iconAlert,
	iconCardSmall,
	iconContact,
	iconCrown,
	iconCurrency,
	iconDelete,
	iconFAQ,
	iconGoogleSheet,
	iconLogout,
	iconPassword,
	iconProfile,
	iconRightArrow,
	iconShareProfile,
	iconTermsAndConditions,
	iconTwoFactor,
} from '@/assets/icon';
import DividerPurple from '@/src/components/DividerPurple';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import Wrapper2 from '@/src/components/Wrapper2';
import tw from '@/src/lib/tailwind';
import {
	useLogoutMutation,
	useToggle2FAMutation,
} from '@/src/redux/api/authApi/authApi';
import { useGetProfileQuery } from '@/src/redux/api/profileApi/profileApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Profile() {
	const [isPriceAlertEnabled, setIsPriceAlertEnabled] = useState(false);
	const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(false);
	const [isGoogleSheetConnected, setIsGoogleSheetConnected] = useState(true);
	const [user, setUser] = useState<any>(null);

	const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

	const togglePriceAlertSwitch = () =>
		setIsPriceAlertEnabled(previousState => !previousState);
	// const toggleTwoFactorSwitch = () =>
	// 	setIsTwoFactorEnabled(previousState => !previousState);
	const toggleGoogleSheetSwitch = () =>
		setIsGoogleSheetConnected(previousState => !previousState);

	const router = useRouter();

	// async function loadUserData() {
	// 	try {
	// 		const userDataString = await AsyncStorage.getItem('user_data');
	// 		if (userDataString) {
	// 			const userData = JSON.parse(userDataString);
	// 			// Use userData as needed
	// 			console.log('Loaded user data:', userData);
	// 			setUser(userData);
	// 			if (userData.is_2fa === 1) {
	// 				setIsTwoFactorEnabled(true);
	// 			} else {
	// 				setIsTwoFactorEnabled(false);
	// 			}
	// 			if (userData.master_price_alert_toggle === 1) {
	// 				setIsPriceAlertEnabled(true);
	// 			} else {
	// 				setIsPriceAlertEnabled(false);
	// 			}
	// 		} else {
	// 			console.log('No user data found in storage.');
	// 		}
	// 	} catch (e) {
	// 		console.error('Failed to load user data:', e);
	// 	}
	// }

	// useEffect(() => {
	// 	loadUserData();
	// }, []);

	const { data: userData, isLoading, error } = useGetProfileQuery();

	useEffect(() => {
		if (userData) {
			setUser(userData.data.user);
			if (userData.data.user.is_2fa === 1) {
				setIsTwoFactorEnabled(true);
			} else {
				setIsTwoFactorEnabled(false);
			}
			if (userData.data.user.master_price_alert_toggle === 1) {
				setIsPriceAlertEnabled(true);
			} else {
				setIsPriceAlertEnabled(false);
			}
		}
	}, [userData]);

	const [logout, { isLoading: isLogoutLoading }] = useLogoutMutation();

	const handleLogout = async () => {
		try {
			const res = await logout().unwrap();
			if (res.status === true) {
				// Clear any stored user data or tokens here if needed
				await AsyncStorage.removeItem('authToken');
				router.replace('/auth');
			} else {
				console.error('Logout failed:', res.message);
			}
		} catch (error) {
			console.error('Logout failed:', error);
		}
	};

	const [enable2FA, { isLoading: isToggle2FALoading }] = useToggle2FAMutation();

	const toggleTwoFactorAuthentication = async () => {
		try {
			await enable2FA().unwrap();
			setIsTwoFactorEnabled(prev => !prev);
		} catch (error) {
			console.error('Failed to toggle 2FA:', error);
		}
	};

	if (isLoading) {
		return (
			<Wrapper>
				<View
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
				>
					<ActivityIndicator size="large" color="#fff" />
				</View>
			</Wrapper>
		);
	}

	return (
		<Wrapper2>
			<RectangleGlassRow>
				<View style={tw`flex flex-col w-full my-2 gap-4`}>
					<View style={tw`flex flex-row w-full items-center justify-between`}>
						<View style={tw`flex flex-row flex-shrink items-center gap-2`}>
							<Image
								source={
									// baseUrl + user?.avatar ||
									user?.avatar_url ||
									require('@/assets/images/defaultAvatar.jpg')
								}
								style={tw`h-10 w-10 rounded-full border-2 border-white m-1`}
								contentFit="cover"
							/>
							<View style={tw`flex flex-col flex-shrink`}>
								<Text style={tw`text-white font-poppinsSemiBold text-sm`}>
									{user?.full_name || 'User Name'}
								</Text>
								<Text style={tw`text-gray-200 font-poppinsLight text-xs`}>
									{user?.email || 'usermail'}
								</Text>
							</View>
						</View>
						<View
							style={tw`flex flex-row items-center gap-2 py-1 px-2 bg-purple-500 rounded-lg`}
						>
							<SvgXml xml={iconCrown} width={12} height={12} />
							<Text style={tw`text-white font-poppinsMedium text-xs`}>
								Monthly Plan
							</Text>
						</View>
					</View>
					<DividerPurple />
					<TouchableOpacity
						style={tw`flex flex-col w-full gap-2 px-2`}
						onPress={() => router.push('/profile/profileEdit')}
					>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconProfile} />
								</View>
								<Text style={tw`text-white font-poppinsMedium text-sm`}>
									Profile
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-col w-full gap-2 px-2`}
						onPress={() => router.push('/profile/changePasswordSettings')}
					>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconPassword} />
								</View>
								<Text style={tw`text-white font-poppinsMedium text-sm`}>
									Change Password
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={tw`flex flex-col w-full gap-2 px-2`}>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconDelete} />
								</View>
								<Text style={tw`text-red-500 font-poppinsMedium text-sm`}>
									Delete Account
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
					<View style={tw`flex flex-col w-full gap-2 px-2`}>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconTwoFactor} />
								</View>
								<Text style={tw`text-white font-poppinsMedium text-sm`}>
									Two-Factor Authentication
								</Text>
							</View>
							{isToggle2FALoading ? (
								<ActivityIndicator size="small" color="#fff" />
							) : (
								<Switch
									trackColor={{ false: '#FFFFFF', true: '#A375FF' }}
									thumbColor={isTwoFactorEnabled ? '#FFFFFF' : '#A375FF'}
									// ios_backgroundColor="#3e3e3e"
									onValueChange={toggleTwoFactorAuthentication}
									value={isTwoFactorEnabled}
								/>
							)}
						</View>
					</View>
				</View>
			</RectangleGlassRow>
			<Text
				style={tw`text-gray-400 font-poppinsLight text-sm w-full text-start`}
			>
				App Settings
			</Text>
			<RectangleGlassRow>
				<View style={tw`flex flex-col w-full my-2 gap-4`}>
					<View style={tw`flex flex-col w-full gap-2 px-2`}>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconAlert} />
								</View>
								<Text style={tw`text-white font-poppinsMedium text-sm`}>
									Price Alert
								</Text>
							</View>
							<Switch
								trackColor={{ false: '#FFFFFF', true: '#A375FF' }}
								thumbColor={isPriceAlertEnabled ? '#FFFFFF' : '#A375FF'}
								// ios_backgroundColor="#3e3e3e"
								onValueChange={togglePriceAlertSwitch}
								value={isPriceAlertEnabled}
							/>
						</View>
					</View>
					<TouchableOpacity
						style={tw`flex flex-col w-full gap-2 px-2`}
						onPress={() => router.push('/profile/changeCurrency')}
					>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconCurrency} />
								</View>
								<View style={tw`flex flex-col`}>
									<Text style={tw`text-white font-poppinsMedium text-sm`}>
										Currency
									</Text>
									<Text style={tw`text-gray-300 font-poppinsLight text-xs`}>
										USD - U.S. Dollar
									</Text>
								</View>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={tw`flex flex-col w-full gap-2 px-2`}>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconShareProfile} />
								</View>
								<View style={tw`flex flex-col`}>
									<Text style={tw`text-white font-poppinsMedium text-sm`}>
										Share Profile
									</Text>
									<Text style={tw`text-gray-300 font-poppinsLight text-xs`}>
										public/zohranmamdani
									</Text>
								</View>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
				</View>
			</RectangleGlassRow>
			<Text
				style={tw`text-gray-400 font-poppinsLight text-sm w-full text-start`}
			>
				Subscription and Billing
			</Text>
			<RectangleGlassRow>
				<View style={tw`flex flex-col w-full my-2 gap-4 px-2`}>
					<View style={tw`flex flex-row w-full items-start justify-between`}>
						<View style={tw`flex flex-col`}>
							<Text style={tw`text-white font-poppinsSemiBold text-xl`}>
								Monthly Plan
							</Text>
							<Text style={tw`text-gray-400 font-poppinsLight text-sm`}>
								Renews on June 15, 2024
							</Text>
						</View>
						<View
							style={tw`flex flex-row items-center gap-1 bg-green-600/20 px-2 py-0.5 rounded-md`}
						>
							<Text style={tw`text-green-400 font-poppinsMedium text-sm`}>
								Active
							</Text>
						</View>
					</View>
					<View style={tw`flex flex-row items-center gap-2`}>
						<SvgXml xml={iconCardSmall} />
						<Text style={tw`text-white font-poppins text-xs`}>
							**** **** **** 1234
						</Text>
					</View>
					<DividerPurple />
					<View style={tw`flex flex-row w-full items-center`}>
						<TouchableOpacity
							style={tw`flex-1 py-1 items-center`}
							onPress={() => router.push('/profile/plan')}
						>
							<Text style={tw`text-blue-600 font-poppinsMedium text-xs`}>
								Upgrade Plan
							</Text>
						</TouchableOpacity>
						<View style={tw`w-0.75px bg-purple-700 h-full`} />
						<TouchableOpacity
							style={tw`flex-1 py-1 items-center`}
							onPress={() => router.push('/profile/billingHistory')}
						>
							<Text style={tw`text-white font-poppinsMedium text-xs`}>
								Billing History
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</RectangleGlassRow>
			<Text
				style={tw`text-gray-400 font-poppinsLight text-sm w-full text-start`}
			>
				Integration
			</Text>
			<RectangleGlassRow>
				<View style={tw`flex flex-col w-full my-2 gap-4`}>
					<View style={tw`flex flex-col w-full gap-2 px-2`}>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconGoogleSheet} />
								</View>
								<View style={tw`flex flex-col`}>
									<Text style={tw`text-white font-poppinsMedium text-sm`}>
										Google Sheets
									</Text>
									<Text style={tw`text-gray-300 font-poppinsLight text-xs`}>
										Last Synced: Today, 10:42 AM
									</Text>
								</View>
							</View>
							<Switch
								trackColor={{ false: '#FFFFFF', true: '#A375FF' }}
								thumbColor={isGoogleSheetConnected ? '#FFFFFF' : '#A375FF'}
								// ios_backgroundColor="#3e3e3e"
								onValueChange={toggleGoogleSheetSwitch}
								value={isGoogleSheetConnected}
							/>
						</View>
					</View>
				</View>
			</RectangleGlassRow>
			<Text
				style={tw`text-gray-400 font-poppinsLight text-sm w-full text-start`}
			>
				Support
			</Text>
			<RectangleGlassRow>
				<View style={tw`flex flex-col w-full my-2 gap-4`}>
					<TouchableOpacity
						style={tw`flex flex-col w-full gap-2 px-2`}
						onPress={() => router.push('/profile/faq')}
					>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconFAQ} />
								</View>
								<Text style={tw`text-white font-poppinsMedium text-sm`}>
									Help & FAQ
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-col w-full gap-2 px-2`}
						onPress={() => router.push('/profile/contactSupport')}
					>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconContact} />
								</View>
								<Text style={tw`text-white font-poppinsMedium text-sm`}>
									Contact Support
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-col w-full gap-2 px-2`}
						onPress={() => router.push('/profile/privacyPolicy')}
					>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconPassword} />
								</View>
								<Text style={tw`text-white font-poppinsMedium text-sm`}>
									Privacy Policy
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={tw`flex flex-col w-full gap-2 px-2`}
						onPress={() => router.push('/profile/termsAndConditions')}
					>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-row items-center gap-4`}>
								<View style={tw`p-2 bg-white/30 rounded-lg`}>
									<SvgXml xml={iconTermsAndConditions} />
								</View>
								<Text style={tw`text-white font-poppinsMedium text-sm`}>
									Terms & Conditions
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</TouchableOpacity>
				</View>
			</RectangleGlassRow>
			<RectangleGlassRow>
				<View style={tw`flex flex-col w-full my-2 gap-4`}>
					<TouchableOpacity
						style={tw`flex flex-col w-full gap-2 px-2`}
						onPress={handleLogout}
						disabled={isLogoutLoading}
					>
						<View
							style={tw`flex flex-row w-full items-center justify-start gap-4`}
						>
							<View style={tw`p-2 bg-white/30 rounded-lg`}>
								<SvgXml xml={iconLogout} />
							</View>
							<Text style={tw`text-white font-poppinsMedium text-sm`}>
								Log Out
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</RectangleGlassRow>
		</Wrapper2>
	);
}
