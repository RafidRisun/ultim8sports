import { iconActive, iconBenefits, iconCrown } from '@/assets/icon';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function Plan() {
	const [selectedPlan, setSelectedPlan] = React.useState<'monthly' | 'yearly'>(
		'monthly',
	);
	return (
		<Wrapper>
			<HeaderWithRoundBack title="Your Plan" back />
			<View style={tw`flex-1 w-full mt-8 gap-6`}>
				<RectangleGlassRow>
					<View style={tw`flex flex-col w-full gap-2 px-2 py-1`}>
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-col gap-2`}>
								<View
									style={tw`items-center justify-center flex flex-row gap-2 px-2 py-1 rounded-md bg-white/20`}
								>
									<SvgXml xml={iconActive} />
									<Text style={tw`text-white font-poppinsMedium text-xs`}>
										ACTIVE PLAN
									</Text>
								</View>
								<Text style={tw`text-white text-lg font-poppinsMedium`}>
									Monthly Plan
								</Text>
							</View>
							<View style={tw`flex flex-col gap-2 items-end`}>
								<Text style={tw`text-white font-poppinsMedium text-lg`}>
									$9.99
								</Text>
								<Text style={tw`text-white font-poppins text-xs`}>
									PER MONTH
								</Text>
							</View>
						</View>
						<View style={tw`w-full h-px bg-white/50 my-4`} />
						<View style={tw`flex flex-row w-full items-center justify-between`}>
							<View style={tw`flex flex-col gap-2`}>
								<Text style={tw`text-white text-sm font-poppins`}>Status</Text>
								<Text style={tw`text-white text-sm font-poppins`}>
									Next Billing Date
								</Text>
							</View>
							<View style={tw`flex flex-col items-end gap-2`}>
								<View style={tw`flex flex-row items-center gap-2`}>
									<View style={tw`h-2 w-2 rounded-full bg-green-500`} />
									<Text style={tw`text-white text-sm font-poppins`}>
										Active
									</Text>
								</View>
								<Text style={tw`text-white text-sm font-poppinsSemiBold`}>
									12 Aug, 2024
								</Text>
							</View>
						</View>
					</View>
				</RectangleGlassRow>
				<Text style={tw`text-white/90 text-base font-poppinsMedium`}>
					Available Plan
				</Text>
				<View
					style={tw`bg-[#130C23] border border-[#9E91BA] shadow-2xl shadow-[#9E91BA] rounded-3xl p-4 gap-4`}
				>
					<View style={tw`flex flex-row justify-center items-center gap-4`}>
						<SvgXml xml={iconCrown} />
						<Text style={tw`text-white font-poppinsMedium text-lg`}>
							{selectedPlan !== 'monthly' ? 'Monthly' : 'Yearly'} Plan
						</Text>
					</View>
					<View style={tw`flex w-full rounded-2xl bg-black p-4`}>
						<View style={tw`flex flex-row justify-between items-center`}>
							<Text style={tw`text-white font-poppinsMedium text-2xl`}>
								{selectedPlan !== 'monthly' ? `$9.99` : `$12.88`}
								<Text style={tw`text-gray-400 font-poppins text-sm`}>
									/{selectedPlan !== 'monthly' ? 'month' : 'year'}
								</Text>
							</Text>
							<View
								style={tw`flex items-center justify-center px-3 py-2 rounded-full`}
							>
								<LinearGradient
									colors={['#FFFFFF', '#8C52FF']}
									style={tw`absolute inset-0 rounded-full`}
								/>
								<Text style={tw`text-black font-poppinsMedium text-sm`}>
									{selectedPlan !== 'monthly' ? `Save 20%` : `Save 25%`}
								</Text>
							</View>
						</View>
						<View style={tw`flex flex-col my-4`}>
							{selectedPlan !== 'monthly'
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
