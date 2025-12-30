import { iconBenefits, iconCrown } from '@/assets/icon';
import BrightRoundedButton from '@/src/components/BrightRoundedButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Plans() {
	const [selectedPlan, setSelectedPlan] = React.useState<'monthly' | 'yearly'>(
		'monthly'
	);
	return (
		<Wrapper>
			<View style={tw`flex flex-col py-10 gap-3 items-center justify-center`}>
				<Text style={tw`text-2xl font-poppinsSemiBold text-white`}>
					Choose Your edge
				</Text>
				<Text style={tw`text-gray-400 font-poppins text-sm px-12 text-center`}>
					Unlock real-time market data and unlimited scanning.
				</Text>
			</View>
			<View
				style={tw`flex flex-row w-52 bg-black rounded-full border border-gray-700`}
			>
				<TouchableOpacity
					style={tw`flex-1 py-3 rounded-full`}
					onPress={() => setSelectedPlan('monthly')}
				>
					{selectedPlan === 'monthly' && (
						<LinearGradient
							colors={['#FFFFFF', '#8C52FF']}
							style={tw`absolute inset-0 rounded-full`}
						/>
					)}
					<Text
						style={tw`${
							selectedPlan === 'monthly' ? 'text-black' : 'text-white'
						} text-center font-poppinsMedium`}
					>
						Monthly
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={tw`flex-1 py-3 rounded-full`}
					onPress={() => setSelectedPlan('yearly')}
				>
					{selectedPlan === 'yearly' && (
						<LinearGradient
							colors={['#FFFFFF', '#8C52FF']}
							style={tw`absolute inset-0 rounded-full`}
						/>
					)}
					<Text
						style={tw`${
							selectedPlan === 'yearly' ? 'text-black' : 'text-white'
						} text-center font-poppinsMedium`}
					>
						Yearly
					</Text>
				</TouchableOpacity>
			</View>
			<View style={tw`mt-10 w-full px-4`}>
				<View
					style={tw`bg-[#130C23] border border-[#9E91BA] shadow-2xl shadow-[#9E91BA] rounded-3xl p-4 gap-4`}
				>
					<View style={tw`flex flex-row justify-center items-center gap-4`}>
						<SvgXml xml={iconCrown} />
						<Text style={tw`text-white font-poppinsMedium text-lg`}>
							{selectedPlan === 'monthly' ? 'Monthly' : 'Yearly'} Plan
						</Text>
					</View>
					<View style={tw`flex w-full rounded-2xl bg-black p-4`}>
						<View style={tw`flex flex-row justify-between items-center`}>
							<Text style={tw`text-white font-poppinsMedium text-2xl`}>
								{selectedPlan === 'monthly'
									? `$${monthlyPlan.price}`
									: `$${yearlyPlan.price}`}
								<Text style={tw`text-gray-400 font-poppins text-sm`}>
									/{selectedPlan === 'monthly' ? 'month' : 'year'}
								</Text>
							</Text>
							<TouchableOpacity
								style={tw`flex items-center justify-center px-3 py-2 rounded-full`}
							>
								<LinearGradient
									colors={['#FFFFFF', '#8C52FF']}
									style={tw`absolute inset-0 rounded-full`}
								/>
								<Text style={tw`text-black font-poppinsMedium text-sm`}>
									{selectedPlan === 'monthly'
										? `Save ${monthlyPlan.save}`
										: `Save ${yearlyPlan.save}`}
								</Text>
							</TouchableOpacity>
						</View>
						<View style={tw`flex flex-col my-4`}>
							{selectedPlan === 'monthly'
								? monthlyPlan.benefits.map((benefit, index) => (
										<View
											key={index}
											style={tw`flex flex-row items-center gap-2 mt-3`}
										>
											<SvgXml xml={iconBenefits} />
											<Text style={tw`text-white font-poppins text-sm`}>
												{benefit}
											</Text>
										</View>
								  ))
								: yearlyPlan.benefits.map((benefit, index) => (
										<View
											key={index}
											style={tw`flex flex-row items-center gap-2 mt-3`}
										>
											<SvgXml xml={iconBenefits} />
											<Text style={tw`text-white font-poppins text-sm`}>
												{benefit}
											</Text>
										</View>
								  ))}
						</View>
					</View>
				</View>
			</View>
			<BrightRoundedButton text="Start 7-Date Free Trial" action={() => {}} />
		</Wrapper>
	);
}

const monthlyPlan = {
	id: 1,
	name: 'Monthly Plan',
	price: 9.99,
	billingCycle: 'month',
	save: '25%',
	benefits: [
		'Real-time market data',
		'Unlimited scans',
		'Customizable alerts',
		'Priority customer support',
	],
};

const yearlyPlan = {
	id: 2,
	name: 'Yearly Plan',
	price: 99.99,
	billingCycle: 'year',
	save: '40%',
	benefits: [
		'Real-time market data',
		'Unlimited scans',
		'Customizable alerts',
		'Priority customer support',
		'Exclusive yearly webinars',
		'Access to beta features',
		'Dedicated account manager',
	],
};
