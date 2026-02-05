import { Stack } from 'expo-router';
import React from 'react';

export default function ProfileLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="billingHistory" />
			<Stack.Screen name="changeCurrency" />
			<Stack.Screen name="changePasswordSettings" />
			<Stack.Screen name="contactSupport" />
			<Stack.Screen name="faq" />
			<Stack.Screen name="plan" />
			<Stack.Screen name="privacyPolicy" />
			<Stack.Screen name="profileEdit" />
			<Stack.Screen name="termsAndConditions" />
		</Stack>
	);
}
