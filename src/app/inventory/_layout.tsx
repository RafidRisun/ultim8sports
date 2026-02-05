import { Stack } from 'expo-router';
import React from 'react';

export default function InventoryLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="salesReport" />
			<Stack.Screen name="salesRecord" />
		</Stack>
	);
}
