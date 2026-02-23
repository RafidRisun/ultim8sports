import { Stack } from 'expo-router';
import React from 'react';

export default function ScanLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="manualCardInput" />
			<Stack.Screen name="scanCard" />
			<Stack.Screen name="salesHistory" />
			<Stack.Screen name="salesHistoryGeneral" />
			<Stack.Screen name="searchCard" />
			<Stack.Screen name="analysingCard" />
			<Stack.Screen name="identifyFailed" />
			<Stack.Screen name="scanResult" />
			<Stack.Screen name="saleHistoryDetails" />
		</Stack>
	);
}
