import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="createNewPassword" />
			<Stack.Screen name="forgotPassword" />
			<Stack.Screen name="loginCheck" />
			<Stack.Screen name="otp" />
			<Stack.Screen name="signup" />
		</Stack>
	);
}
