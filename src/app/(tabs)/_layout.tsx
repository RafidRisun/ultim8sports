import TabBar from '@/src/components/TabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
	return (
		<Tabs tabBar={props => <TabBar {...props} />}>
			<Tabs.Screen
				name="index"
				options={{ title: 'Home', headerShown: false }}
			/>
			<Tabs.Screen
				name="inventory"
				options={{ title: 'Inventory', headerShown: false }}
			/>
			<Tabs.Screen
				name="scan"
				options={{ title: 'Scan', headerShown: false }}
			/>
			<Tabs.Screen
				name="watchlist"
				options={{ title: 'Watchlist', headerShown: false }}
			/>
			<Tabs.Screen
				name="profile"
				options={{ title: 'Profile', headerShown: false }}
			/>
		</Tabs>
	);
}
