import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import Wrapper from '@/src/components/Wrapper';
import React from 'react';
import { View } from 'react-native';

export default function CardDetails() {
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Card Details" back={true} />
			<View className="flex-1 items-center justify-center"></View>
		</Wrapper>
	);
}
