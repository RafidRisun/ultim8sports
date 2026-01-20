import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { View } from 'react-native';

export default function ChangeCurrency() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Change Currency" back />
			<View style={tw`flex-1 w-full gap-4 mt-12`}>
				<RectangleGlassRow>
					<View
						style={tw`flex flex-row items-center justify-between w-full px-2 py-1`}
					>
						<View style={tw`flex flex-row items-center gap-4`}>
							<View style={tw`w-10 h-10 rounded-full bg-gray-300`} />
							<View>
								<View style={tw`flex flex-row items-center gap-2`}>
									<View>
										<View style={tw`w-4 h-3 bg-white rounded-sm`} />
									</View>
									<View>
										<View style={tw`w-12 h-3 bg-white rounded-sm`} />
									</View>
								</View>
								<View style={tw`w-16 h-3 bg-white rounded-sm mt-1`} />
							</View>
						</View>
						<View>
							<View style={tw`w-10 h-5 bg-white rounded-sm`} />
						</View>
					</View>
				</RectangleGlassRow>
			</View>
			<BrightRoundedButton text="Save" action={() => {}} />
		</Wrapper>
	);
}
