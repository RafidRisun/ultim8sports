import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function Faq() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="FAQ" back />
			<ScrollView
				style={tw`flex-1 w-full`}
				contentContainerStyle={tw`gap-4 pb-8`}
			>
				<View style={tw`flex-1 w-full mt-6 gap-4`}>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-2 px-2 py-1`}>
							<Text style={tw`text-white text-base font-poppinsMedium`}>
								What is Ultim8 Sports?
							</Text>
							<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
								Ultim8 Sports is a comprehensive sports management platform
								designed to streamline operations for sports organizations,
								teams, and athletes.
							</Text>
						</View>
					</RectangleGlassRow>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-2 px-2 py-1`}>
							<Text style={tw`text-white text-base font-poppinsMedium`}>
								How do I create an account?
							</Text>
							<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
								Tap &quot;Sign Up&quot; on the welcome screen and follow the
								steps. You&apos;ll need an email and password to get started.
							</Text>
						</View>
					</RectangleGlassRow>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-2 px-2 py-1`}>
							<Text style={tw`text-white text-base font-poppinsMedium`}>
								Can I manage multiple teams?
							</Text>
							<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
								Yes — you can add and switch between teams from your profile.
								Each team has separate rosters, schedules, and settings.
							</Text>
						</View>
					</RectangleGlassRow>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-2 px-2 py-1`}>
							<Text style={tw`text-white text-base font-poppinsMedium`}>
								Is my data secure?
							</Text>
							<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
								We use industry-standard encryption and secure servers to
								protect your data. Review our Privacy Policy for full details.
							</Text>
						</View>
					</RectangleGlassRow>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-2 px-2 py-1`}>
							<Text style={tw`text-white text-base font-poppinsMedium`}>
								How can I contact support?
							</Text>
							<Text style={tw`text-gray-300 text-sm font-poppinsRegular`}>
								Email support@ultim8sports.com or use the in-app Live Chat from
								the Profile screen for faster help.
							</Text>
						</View>
					</RectangleGlassRow>
				</View>
			</ScrollView>
		</Wrapper>
	);
}
