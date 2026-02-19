import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import tw from '../lib/tailwind';

export default function MainAreaChart({
	selectedTab,
	dataWeekly,
	dataMonthly,
	dataYearly,
}: {
	selectedTab: 'weekly' | 'monthly' | 'yearly';
	dataWeekly: any[];
	dataMonthly: any[];
	dataYearly: any[];
}) {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			// style={tw`flex flex-col`}
		>
			<View style={tw`flex`}>
				<LineChart
					isAnimated
					areaChart
					data={
						selectedTab === 'weekly'
							? dataWeekly
							: selectedTab === 'monthly'
								? dataMonthly
								: dataYearly
					}
					startFillColor="#8C52FF"
					startOpacity={0.3}
					endFillColor="#8C52FF"
					endOpacity={0.3}
					hideDataPoints
					curved
					adjustToWidth
					initialSpacing={0}
					hideAxesAndRules
					hideYAxisText
					color="#8C52FF"
					yAxisLabelWidth={0}
					xAxisLabelTextStyle={{ color: '#FFFFFF', fontSize: 12 }}
					xAxisLabelsHeight={40}
					// xAxisLabelsHeight={0}
					/* fallback: nudge chart to occupy full parent */
					pointerConfig={{
						pointerColor: '#FFFFFF',
						showPointerStrip: false,
						pointerLabelComponent: (items: { value: number }[]) => {
							const value = items?.[0]?.value;
							const dataset =
								selectedTab === 'weekly'
									? dataWeekly
									: selectedTab === 'monthly'
										? dataMonthly
										: dataYearly;
							// find last occurrence index of this value in the active dataset
							// let lastIdx = -1;
							// for (let i = dataset.length - 1; i >= 0; i--) {
							// 	if (dataset[i].value === value) {
							// 		lastIdx = i;
							// 		break;
							// 	}
							// }
							// const isLast = lastIdx === dataset.length - 1;
							// const isOneBeforeLast = lastIdx === dataset.length - 2;

							return (
								<View
									style={{
										height: 40,
										width: 100,
										backgroundColor: '#282C3E',
										borderRadius: 100,
										justifyContent: 'center',
										paddingLeft: 16,
										// left: isLast ? -100 : isOneBeforeLast ? -50 : 0,
									}}
								>
									<Text style={{ color: 'white', fontWeight: 'bold' }}>
										$ {value}
									</Text>
								</View>
							);
						},
					}}
				/>
				{/* <View style={tw`flex flex-row w-full items-center justify-between`}>
					{selectedTab === 'weekly' &&
						['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
							<Text
								key={day}
								style={tw`text-white/60 font-poppinsLight text-xs`}
							>
								{day}
							</Text>
						))}
					{selectedTab === 'monthly' &&
						['1', '5', '10', '15', '20', '25', '30'].map(date => (
							<Text
								key={date}
								style={tw`text-white/60 font-poppinsLight text-xs`}
							>
								{date}
							</Text>
						))}
					{selectedTab === 'yearly' &&
						[
							'Jan',
							'Feb',
							'Mar',
							'Apr',
							'May',
							'Jun',
							'Jul',
							'Aug',
							'Sep',
							'Oct',
							'Nov',
							'Dec',
						].map(month => (
							<Text
								key={month}
								style={tw`text-white/60 font-poppinsLight text-xs`}
							>
								{month}
							</Text>
						))}
				</View> */}
			</View>
		</ScrollView>
	);
}
