import {
	iconFesbuk,
	iconInstagram,
	iconRightArrow,
	iconWeb,
	iconWhatsapp,
} from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ContactSupport() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Contact Support" back />
			<ScrollView
				style={tw`flex-1 w-full`}
				contentContainerStyle={tw`gap-4 pb-8`}
			>
				<View style={tw`flex-1 w-full mt-6 gap-4`}>
					<RectangleGlassRow>
						<View
							style={tw`flex flex-row w-full items-center justify-between gap-2 px-2 py-2`}
						>
							<View style={tw`flex flex-row items-center gap-4`}>
								<SvgXml xml={iconWeb} />
								<Text style={tw`text-white text-base font-poppinsMedium`}>
									Website
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</RectangleGlassRow>
					<RectangleGlassRow>
						<View
							style={tw`flex flex-row w-full items-center justify-between gap-2 px-2 py-2`}
						>
							<View style={tw`flex flex-row items-center gap-4`}>
								<SvgXml xml={iconWhatsapp} />
								<Text style={tw`text-white text-base font-poppinsMedium`}>
									WhatsApp
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</RectangleGlassRow>
					<RectangleGlassRow>
						<View
							style={tw`flex flex-row w-full items-center justify-between gap-2 px-2 py-2`}
						>
							<View style={tw`flex flex-row items-center gap-4`}>
								<SvgXml xml={iconFesbuk} />
								<Text style={tw`text-white text-base font-poppinsMedium`}>
									Facebook
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</RectangleGlassRow>
					<RectangleGlassRow>
						<View
							style={tw`flex flex-row w-full items-center justify-between gap-2 px-2 py-2`}
						>
							<View style={tw`flex flex-row items-center gap-4`}>
								<SvgXml xml={iconInstagram} />
								<Text style={tw`text-white text-base font-poppinsMedium`}>
									Instagram
								</Text>
							</View>
							<SvgXml xml={iconRightArrow} />
						</View>
					</RectangleGlassRow>
				</View>
			</ScrollView>
		</Wrapper>
	);
}
