import tw from '@/src/lib/tailwind';
import { BlurView } from 'expo-blur';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export default function StatsCard({
	name,
	status,
	data,
	selectedStat,
	setSelectedStat,
}: {
	name: string;
	status: string;
	data: any[];
	selectedStat: string | null;
	setSelectedStat: (stat: string | null) => void;
}) {
	const [chartColor, setChartColor] = useState('#00FF00');
	const [textColor, setTextColor] = useState('green-500');

	useEffect(() => {
		// Determine chart color based on status
		if (status.startsWith('-')) {
			setChartColor('#FF0000'); // Red for negative status
			setTextColor('red-500');
		} else {
			setChartColor('#00FF00'); // Green for positive status
			setTextColor('green-500');
		}
	}, [status]);

	return (
		<TouchableOpacity
			onPress={() => {
				if (selectedStat === name) {
					setSelectedStat(null);
				} else {
					setSelectedStat(name);
				}
			}}
			style={tw`flex flex-row px-4 py-3 ${
				selectedStat === name
					? 'border border-purple-400'
					: 'border border-white/20 border-t-white/40 border-b-white/30'
			} blur-lg rounded-xl items-start gap-4`}
		>
			<BlurView
				intensity={40}
				// experimentalBlurMethod="dimezisBlurView"
				tint="dark"
				style={tw`absolute inset-0 rounded-xl`}
			/>
			<View style={tw`flex flex-col items-end`}>
				<Text style={tw`text-white font-poppinsLight text-xs`}>{name}</Text>
				<Text style={tw`text-${textColor} font-poppinsMedium text-xl`}>
					{status}
				</Text>
			</View>
			<View style={tw`pt-2`}>
				<LineChart
					isAnimated
					areaChart
					data={data}
					startFillColor={chartColor}
					startOpacity={0.3}
					endFillColor1={chartColor}
					endOpacity={0.3}
					hideDataPoints
					curved
					adjustToWidth
					initialSpacing={0}
					hideAxesAndRules
					hideYAxisText
					color={chartColor}
					yAxisLabelWidth={0}
					xAxisLabelsHeight={0}
					height={38}
					width={55}
				/>
			</View>
		</TouchableOpacity>
	);
}
