import { Stack } from 'expo-router';
import React from 'react';

export default function CommonLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="plans" />
		</Stack>
	);
}
