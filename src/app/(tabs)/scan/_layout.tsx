import { Stack } from 'expo-router';
import React from 'react';

export default function ScanLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ title: 'Scan', headerShown: false }}
			/>
			<Stack.Screen
				name="salesHistory"
				options={{ title: 'Sales History', headerShown: false }}
			/>
		</Stack>
	);
}
