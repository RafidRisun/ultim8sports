import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import Wrapper from '@/src/components/Wrapper';
import React from 'react';
import { View } from 'react-native';

export default function Profile() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Profile" />
			<View>
				<RectangleGlass>
					<View></View>
				</RectangleGlass>
			</View>
		</Wrapper>
	);
}
