import { Stack } from 'expo-router';
import React from 'react';

export default function CardLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="cardDetails" />
			<Stack.Screen name="cardDetailsManual" />
			<Stack.Screen name="confirmSale" />
		</Stack>
	);
}
