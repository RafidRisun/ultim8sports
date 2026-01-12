import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import tw from '../lib/tailwind';

export default function ChartTabButtons({
	selectedTab,
	setSelectedTab,
}: {
	selectedTab: 'weekly' | 'monthly' | 'yearly';
	setSelectedTab: React.Dispatch<
		React.SetStateAction<'weekly' | 'monthly' | 'yearly'>
	>;
}) {
	return (
		<View style={tw`flex w-full items-center`}>
			<View
				style={tw`flex flex-row w-64 bg-black/45 rounded-lg border border-gray-700 p-0.5`}
			>
				<Pressable
					style={tw`flex-1 py-3 rounded-md`}
					onPress={() => setSelectedTab('weekly')}
				>
					{selectedTab === 'weekly' && (
						<LinearGradient
							colors={['#FFFFFF', '#8C52FF']}
							style={tw`absolute inset-0 rounded-md`}
						/>
					)}
					<Text
						style={tw`${
							selectedTab === 'weekly' ? 'text-black' : 'text-white'
						} text-center text-xs font-poppinsMedium`}
					>
						Weekly
					</Text>
				</Pressable>
				<Pressable
					style={tw`flex-1 py-3 rounded-md`}
					onPress={() => setSelectedTab('monthly')}
				>
					{selectedTab === 'monthly' && (
						<LinearGradient
							colors={['#FFFFFF', '#8C52FF']}
							style={tw`absolute inset-0 rounded-md`}
						/>
					)}
					<Text
						style={tw`${
							selectedTab === 'monthly' ? 'text-black' : 'text-white'
						} text-center text-xs font-poppinsMedium`}
					>
						Monthly
					</Text>
				</Pressable>
				<Pressable
					style={tw`flex-1 py-3 rounded-md`}
					onPress={() => setSelectedTab('yearly')}
				>
					{selectedTab === 'yearly' && (
						<LinearGradient
							colors={['#FFFFFF', '#8C52FF']}
							style={tw`absolute inset-0 rounded-md`}
						/>
					)}
					<Text
						style={tw`${
							selectedTab === 'yearly' ? 'text-black' : 'text-white'
						} text-center text-xs font-poppinsMedium`}
					>
						Yearly
					</Text>
				</Pressable>
			</View>
		</View>
	);
}
