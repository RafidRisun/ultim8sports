import {
	iconAlert,
	iconCrown,
	iconCurrency,
	iconDelete,
	iconPassword,
	iconProfile,
	iconRightArrow,
	iconShareProfile,
	iconTwoFactor,
} from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Profile() {
	return (
		<Wrapper>
			<View style={tw`flex-1 w-full`}>
				<HeaderWithRoundBack title="Profile" />
				<ScrollView style={tw`w-full`} showsVerticalScrollIndicator={false}>
					<View
						style={tw`flex flex-col items-center justify-start gap-5 mt-4 pb-40`}
					>
						<RectangleGlassRow>
							<View style={tw`flex flex-col w-full my-2 gap-4`}>
								<View
									style={tw`flex flex-row w-full items-center justify-between`}
								>
									<View
										style={tw`flex flex-row flex-shrink items-center gap-2`}
									>
										<Image
											source={require('@/assets/images/profile photo.jpg')}
											style={tw`h-10 w-10 rounded-full border-2 border-white m-1`}
											contentFit="cover"
										/>
										<View style={tw`flex flex-col flex-shrink`}>
											<Text style={tw`text-white font-poppinsSemiBold text-sm`}>
												Zohran Mamdani
											</Text>
											<Text style={tw`text-gray-200 font-poppinsLight text-xs`}>
												zohran@example.com
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
								<View style={tw`h-0.75px bg-purple-700 w-full`} />
								<TouchableOpacity style={tw`flex flex-col w-full gap-2 px-2`}>
									<View
										style={tw`flex flex-row w-full items-center justify-between`}
									>
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
								<TouchableOpacity style={tw`flex flex-col w-full gap-2 px-2`}>
									<View
										style={tw`flex flex-row w-full items-center justify-between`}
									>
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
									<View
										style={tw`flex flex-row w-full items-center justify-between`}
									>
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
								<TouchableOpacity style={tw`flex flex-col w-full gap-2 px-2`}>
									<View
										style={tw`flex flex-row w-full items-center justify-between`}
									>
										<View style={tw`flex flex-row items-center gap-4`}>
											<View style={tw`p-2 bg-white/30 rounded-lg`}>
												<SvgXml xml={iconTwoFactor} />
											</View>
											<Text style={tw`text-white font-poppinsMedium text-sm`}>
												Two-Factor Authentication
											</Text>
										</View>
										<SvgXml xml={iconRightArrow} />
									</View>
								</TouchableOpacity>
							</View>
						</RectangleGlassRow>
						<Text
							style={tw`text-gray-400 font-poppinsLight text-sm w-full text-start`}
						>
							App Settings
						</Text>
						<RectangleGlassRow>
							<View style={tw`flex flex-col w-full my-2 gap-4`}>
								<TouchableOpacity style={tw`flex flex-col w-full gap-2 px-2`}>
									<View
										style={tw`flex flex-row w-full items-center justify-between`}
									>
										<View style={tw`flex flex-row items-center gap-4`}>
											<View style={tw`p-2 bg-white/30 rounded-lg`}>
												<SvgXml xml={iconAlert} />
											</View>
											<Text style={tw`text-white font-poppinsMedium text-sm`}>
												Price Alert
											</Text>
										</View>
										<SvgXml xml={iconRightArrow} />
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={tw`flex flex-col w-full gap-2 px-2`}>
									<View
										style={tw`flex flex-row w-full items-center justify-between`}
									>
										<View style={tw`flex flex-row items-center gap-4`}>
											<View style={tw`p-2 bg-white/30 rounded-lg`}>
												<SvgXml xml={iconCurrency} />
											</View>
											<View style={tw`flex flex-col`}>
												<Text style={tw`text-white font-poppinsMedium text-sm`}>
													Currency
												</Text>
												<Text
													style={tw`text-gray-300 font-poppinsLight text-xs`}
												>
													USD - U.S. Dollar
												</Text>
											</View>
										</View>
										<SvgXml xml={iconRightArrow} />
									</View>
								</TouchableOpacity>
								<TouchableOpacity style={tw`flex flex-col w-full gap-2 px-2`}>
									<View
										style={tw`flex flex-row w-full items-center justify-between`}
									>
										<View style={tw`flex flex-row items-center gap-4`}>
											<View style={tw`p-2 bg-white/30 rounded-lg`}>
												<SvgXml xml={iconShareProfile} />
											</View>
											<View style={tw`flex flex-col`}>
												<Text style={tw`text-white font-poppinsMedium text-sm`}>
													Share Profile
												</Text>
												<Text
													style={tw`text-gray-300 font-poppinsLight text-xs`}
												>
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
								<View
									style={tw`flex flex-row w-full items-start justify-between`}
								>
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
							</View>
						</RectangleGlassRow>
					</View>
				</ScrollView>
			</View>
		</Wrapper>
	);
}
