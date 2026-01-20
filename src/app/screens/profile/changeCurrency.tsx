import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { Image } from 'expo-image';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function ChangeCurrency() {
	const [selectedCurrency, setSelectedCurrency] = useState('USD');
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Change Currency" back />
			<View style={tw`flex-1 w-full gap-4 mt-12`}>
				<RectangleGlassRow>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between w-full px-2 py-1`}
						onPress={() => setSelectedCurrency('USD')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<Image
								source={require('@/assets/images/USD.png')}
								style={tw`w-10 h-10 rounded-full`}
								contentFit="cover"
							/>
							<View>
								<View style={tw`flex flex-row items-center gap-2`}>
									<View>
										<Text style={tw`text-white text-base font-poppinsMedium`}>
											{'USD ($)'}
										</Text>
									</View>
								</View>
								<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
									United States Dollar
								</Text>
							</View>
						</View>
						{selectedCurrency === 'USD' ? (
							<View
								style={tw`w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center`}
							>
								<View style={tw`w-3 h-3 rounded-full bg-green-500`} />
							</View>
						) : (
							<View
								style={tw`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center`}
							/>
						)}
					</TouchableOpacity>
				</RectangleGlassRow>
				<RectangleGlassRow>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between w-full px-2 py-1`}
						onPress={() => setSelectedCurrency('CAD')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<Image
								source={require('@/assets/images/CAD.png')}
								style={tw`w-10 h-10 rounded-full`}
								contentFit="cover"
							/>
							<View>
								<View style={tw`flex flex-row items-center gap-2`}>
									<View>
										<Text style={tw`text-white text-base font-poppinsMedium`}>
											{'CAD'}
										</Text>
									</View>
								</View>
								<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
									Canadian Dollar
								</Text>
							</View>
						</View>
						{selectedCurrency === 'CAD' ? (
							<View
								style={tw`w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center`}
							>
								<View style={tw`w-3 h-3 rounded-full bg-green-500`} />
							</View>
						) : (
							<View
								style={tw`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center`}
							/>
						)}
					</TouchableOpacity>
				</RectangleGlassRow>
				<RectangleGlassRow>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between w-full px-2 py-1`}
						onPress={() => setSelectedCurrency('CHF')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<Image
								source={require('@/assets/images/CHF.png')}
								style={tw`w-10 h-10 rounded-full`}
								contentFit="cover"
							/>
							<View>
								<View style={tw`flex flex-row items-center gap-2`}>
									<View>
										<Text style={tw`text-white text-base font-poppinsMedium`}>
											{'CHF'}
										</Text>
									</View>
								</View>
								<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
									Swiss Franc
								</Text>
							</View>
						</View>
						{selectedCurrency === 'CHF' ? (
							<View
								style={tw`w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center`}
							>
								<View style={tw`w-3 h-3 rounded-full bg-green-500`} />
							</View>
						) : (
							<View
								style={tw`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center`}
							/>
						)}
					</TouchableOpacity>
				</RectangleGlassRow>
				<RectangleGlassRow>
					<TouchableOpacity
						style={tw`flex flex-row items-center justify-between w-full px-2 py-1`}
						onPress={() => setSelectedCurrency('EUR')}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<Image
								source={require('@/assets/images/EUR.png')}
								style={tw`w-10 h-10 rounded-full`}
								contentFit="cover"
							/>
							<View>
								<View style={tw`flex flex-row items-center gap-2`}>
									<View>
										<Text style={tw`text-white text-base font-poppinsMedium`}>
											{'EUR (€)'}
										</Text>
									</View>
								</View>
								<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
									Euro
								</Text>
							</View>
						</View>
						{selectedCurrency === 'EUR' ? (
							<View
								style={tw`w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center`}
							>
								<View style={tw`w-3 h-3 rounded-full bg-green-500`} />
							</View>
						) : (
							<View
								style={tw`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center`}
							/>
						)}
					</TouchableOpacity>
				</RectangleGlassRow>
			</View>
			<BrightRoundedButton text="Save" action={() => {}} />
		</Wrapper>
	);
}
