import { Stack } from 'expo-router';
import React from 'react';

export default function ScanLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="manualCardInput" />
			<Stack.Screen name="scanCard" />
			<Stack.Screen name="salesHistory" />
			<Stack.Screen name="searchCard" />
			<Stack.Screen name="salesReport" />
		</Stack>
	);
}
