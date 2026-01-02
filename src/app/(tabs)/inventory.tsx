import Wrapper from '@/src/components/Wrapper';
import React from 'react';
import { Text, View } from 'react-native';

export default function Inventory() {
	return (
		<Wrapper>
			<View>
				<Text style={{ color: 'white', textAlign: 'center', margin: 10 }}>
					Inventory Screen
				</Text>
			</View>
		</Wrapper>
	);
}
