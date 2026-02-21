import { iconCalendar, iconPlus, iconPlusPurple } from '@/assets/icon';
import CardInfoInput from '@/src/components/CardInfoInput';
import HeaderWithRoundBack from '@/src/components/HeaderWithRoundBack';
import RectangleGlass from '@/src/components/RectangleGlass';
import RectangleGlassRow from '@/src/components/RectangleGlassRow';
import RoundedLitButton from '@/src/components/RoundedLitButton';
import Wrapper from '@/src/components/Wrapper';
import tw from '@/src/lib/tailwind';
import {
	useAddCardMutation,
	useLazyStartScrapeQuery,
} from '@/src/redux/api/scanApi/scanApi';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { LineChart } from 'react-native-gifted-charts';
import { SvgXml } from 'react-native-svg';

type Data = {
	value: number;
};

export default function ScanResult() {
	const { cardData, scrapeData, photoUri } = useLocalSearchParams();
	const [parsedCardData, setParsedCardData] = useState<any>(null);
	const [parsedScrapeData, setParsedScrapeData] = useState<any>(null);
	const [searchTitle, setSearchTitle] = useState('');
	const [playerName, setPlayerName] = useState('');
	const [setName, setSetName] = useState('');
	const [year, setYear] = useState('');
	const [number, setNumber] = useState('');
	const [condition, setCondition] = useState('');
	const [brand, setBrand] = useState('');
	const [costbasis, setCostBasis] = useState('0');
	const [askingPrice, setAskingPrice] = useState('0');
	// const [purchaseDate, setPurchaseDate] = useState(new Date());
	const [estimatedValue, setEstimatedValue] = useState('0');
	const [analysis, setAnalysis] = useState('0');
	const [sign, setSign] = useState('+');
	const [lastUpdate, setLastUpdate] = useState('');
	const [data, setData] = useState<Data[]>([]);
	const [isScrapeLoading, setIsScrapeLoading] = useState(false);

	const [triggerScrape, { isLoading }] = useLazyStartScrapeQuery();

	// Track if initial load has completed to only trigger scrape on user edits
	const initialLoadComplete = useRef(false);

	useEffect(() => {
		if (isLoading) {
			setIsScrapeLoading(true);
		} else {
			setIsScrapeLoading(false);
		}
	}, [isLoading]);

	async function handleTriggerScrape() {
		const search_title = `${year} ${brand} ${setName} ${playerName} ${number} ${condition}`;
		console.log('Triggering scrape with search_title:', search_title);
		setIsScrapeLoading(true);
		try {
			const scrapeResult = await triggerScrape({ search_title }).unwrap();
			console.log('Scrapeee Result:', scrapeResult);
			if (
				scrapeResult &&
				scrapeResult.data &&
				scrapeResult.data.total_count > 0
			) {
				try {
					const parsed =
						typeof scrapeResult === 'string'
							? JSON.parse(scrapeResult)
							: scrapeResult;
					setParsedScrapeData(parsed);
					// console.log('Received scrapeData:', parsed);
					setEstimatedValue(parsed.data.estimated_market_value.last_sold_price);
					setAnalysis(
						parsed.data.estimated_market_value.get_price_analysis.percentage,
					);
					setSign(parsed.data.estimated_market_value.get_price_analysis.sign);
					setLastUpdate(
						parsed.data.estimated_market_value.get_price_analysis.last_update,
					);
					const chartData: Data[] = parsed.data.ebay_response
						.map((item: any) => {
							const price = parseFloat(item.price);
							if (isNaN(price)) return null;
							return { value: price };
						})
						.filter((item: Data | null): item is Data => item !== null);
					setData(chartData);
					// console.log('Chart Data:', chartData);
					// console.log('Chart Data Length:', chartData.length);
					setIsScrapeLoading(false);
				} catch (e) {
					console.error('Failed to parse scrapeData:', e);
					setParsedScrapeData(null);
				}
			}
			if (scrapeResult?.data?.total_count === 0) {
				Alert.alert(
					'No market data found',
					'We were unable to find any market data for this card. Please check the details and try again.',
				);
				setEstimatedValue('0');
				setAnalysis('0');
				setSign('+');
				setLastUpdate('');
				setData([]);
			}
		} catch (scrapeError) {
			console.error('Scrape Error:', scrapeError);
		}
	}

	useEffect(() => {
		if (cardData) {
			try {
				const parsed =
					typeof cardData === 'string' ? JSON.parse(cardData) : cardData;
				setParsedCardData(parsed);
				console.log('Received cardData:', parsed);
				setPlayerName(parsed.card_name || '');
				setSetName(parsed.set_name || '');
				setYear(parsed.year || '');
				setNumber(parsed.number || '');
				setCondition(parsed.condition || '');
				setBrand(parsed.brand || '');
				setSearchTitle(parsed.search_title || '');
			} catch (e) {
				console.error('Failed to parse cardData:', e);
				setParsedCardData(null);
			}
		}
		if (
			scrapeData &&
			(typeof scrapeData === 'string' ? JSON.parse(scrapeData) : scrapeData)
				.data.total_count > 0
		) {
			try {
				const parsed =
					typeof scrapeData === 'string' ? JSON.parse(scrapeData) : scrapeData;
				setParsedScrapeData(parsed);
				// console.log('Received scrapeData:', parsed);
				setEstimatedValue(parsed.data.estimated_market_value.last_sold_price);
				setAnalysis(
					parsed.data.estimated_market_value.get_price_analysis.percentage,
				);
				setSign(parsed.data.estimated_market_value.get_price_analysis.sign);
				setLastUpdate(
					parsed.data.estimated_market_value.get_price_analysis.last_update,
				);
				const chartData: Data[] = parsed.data.ebay_response
					.map((item: any) => {
						const price = parseFloat(item.price);
						if (isNaN(price)) return null;
						return { value: price };
					})
					.filter((item: Data | null): item is Data => item !== null);
				setData(chartData);
				// console.log('Chart Data:', chartData);
				// console.log('Chart Data Length:', chartData.length);
			} catch (e) {
				console.error('Failed to parse scrapeData:', e);
				setParsedScrapeData(null);
			}
		}
		// Mark initial load as complete after first render
		initialLoadComplete.current = true;
	}, [cardData, scrapeData]);

	const [addCard, { isLoading: isAddingCard }] = useAddCardMutation();

	const router = useRouter();
	// const [selectedLanguage, setSelectedLanguage] = useState('psa9');
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);

	async function handleAddCard() {
		const formData = new FormData();
		formData.append('image', {
			uri: photoUri as string,
			name: `card.jpg`,
			type: `image/jpeg`,
		} as any);
		formData.append('search_title', parsedCardData?.search_title || '');
		formData.append('card_store_type', 'Inventory');
		formData.append('year', year);
		formData.append('number', number);
		formData.append('condition', condition);
		formData.append('brand', brand);
		formData.append('card_name', playerName);
		formData.append('set_name', setName);
		formData.append('cost_basis', costbasis);
		formData.append('asking_price', askingPrice);
		formData.append('purhcase_date', date.toISOString().split('T')[0] || '');
		formData.append('card_input_type', 'Scan');
		try {
			console.log('FormData:', formData);
			const response = await addCard(formData)
				.unwrap()
				.then(result => {
					Alert.alert('Card added successfully!');
					router.replace('/(tabs)');
				})
				.catch(error => {
					console.log('Add Card Error:', error);
					console.log(response);
					Alert.alert('Failed to add card:', JSON.stringify(error));
				});
		} catch (error) {
			Alert.alert('An error occurred:', JSON.stringify(error));
		}
	}

	return (
		<Wrapper>
			<HeaderWithRoundBack title="Card Details" back={true} />
			<ScrollView style={tw`w-full`}>
				<View style={tw`flex-1 w-full gap-4 pb-20`}>
					<View style={tw`flex w-full items-center justify-center p-4`}>
						<Image
							source={{ uri: photoUri as string }}
							style={tw`w-60 rounded-md h-70`}
							contentFit="cover"
						/>
					</View>
					<RectangleGlass>
						<View style={tw`flex flex-row w-full gap-5 p-2`}>
							<View style={tw`flex flex-col flex-1 gap-2`}>
								<Text style={tw`text-white font-poppinsMedium text-xs`}>
									ESTIMATED MARKET VALUE
								</Text>
								{isScrapeLoading ? (
									<Text style={tw`text-white font-poppinsMedium text-lg`}>
										Loading...
									</Text>
								) : (
									<Text style={tw`text-white font-poppinsBold text-3xl`}>
										${estimatedValue}
									</Text>
								)}
								<View style={tw`flex flex-row items-center gap-2`}>
									<Text
										style={tw`${sign === '+' ? 'text-green-500' : 'text-red-500'} font-poppinsMedium text-sm`}
									>
										{analysis}
									</Text>
									<Text style={tw`text-white/70 font-poppinsLight text-xs`}>
										Updated {lastUpdate}
									</Text>
								</View>
							</View>
							<View style={tw`pt-2`}>
								{data.length > 0 && (
									<LineChart
										key={`chart-${data.length}`}
										isAnimated
										areaChart
										data={data}
										startFillColor={sign === '+' ? '#00FF00' : '#FF0000'}
										startOpacity={0.3}
										endFillColor1={sign === '+' ? '#00FF00' : '#FF0000'}
										endOpacity={0.3}
										hideDataPoints
										curved
										adjustToWidth
										initialSpacing={0}
										hideAxesAndRules
										hideYAxisText
										color={sign === '+' ? '#00FF00' : '#FF0000'}
										yAxisLabelWidth={0}
										xAxisLabelsHeight={0}
										height={70}
										width={100}
									/>
								)}
							</View>
						</View>
						<RoundedLitButton
							text="View Market History"
							action={() =>
								router.push({
									pathname: '/scan/salesHistory',
									params: { scrapeData: JSON.stringify(parsedScrapeData) },
								})
							}
						/>
					</RectangleGlass>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-5 p-2`}>
							<CardInfoInput
								label="Player Name"
								value={playerName}
								onChange={value => {
									setPlayerName(value);
								}}
								onBlur={handleTriggerScrape}
							/>
							<CardInfoInput
								label="Set Name"
								value={setName}
								onChange={value => {
									setSetName(value);
								}}
							/>
							<View style={tw`flex flex-row w-full gap-3`}>
								<CardInfoInput
									label="Year"
									value={year}
									onChange={value => {
										setYear(value);
									}}
									type="numeric"
									onBlur={handleTriggerScrape}
								/>
								<CardInfoInput
									label="Serial(#)"
									value={number}
									onChange={value => {
										setNumber(value);
									}}
									onBlur={handleTriggerScrape}
								/>
							</View>
							<CardInfoInput
								label="Series/Brand"
								value={brand}
								onChange={value => {
									setBrand(value);
								}}
								onBlur={handleTriggerScrape}
							/>
							{/* <View style={tw`flex flex-col gap-2 w-full`}>
								<Text style={tw`text-white/90 text-xs font-poppinsLight`}>
									Condition
								</Text>
								<View
									style={tw`justify-center pl-2 w-full h-14 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
								>
									<Picker
										selectedValue={selectedLanguage}
										onValueChange={(itemValue, itemIndex) =>
											setSelectedLanguage(itemValue)
										}
										style={tw`text-white font-poppins h-full p-0 m-0`}
									>
										<Picker.Item label="PSA 9" value="psa9" />
										<Picker.Item label="PSA 10" value="psa10" />
										<Picker.Item label="BGS 9.5" value="bgs95" />
										<Picker.Item label="BGS 10" value="bgs10" />
									</Picker>
								</View>
							</View> */}
							<CardInfoInput
								label="Condition"
								value={condition}
								onChange={setCondition}
								onBlur={handleTriggerScrape}
							/>
						</View>
					</RectangleGlassRow>
					<RectangleGlassRow>
						<View style={tw`flex flex-col w-full gap-5 p-2`}>
							<Text style={tw`text-purple-300 text-sm font-poppinsMedium`}>
								Purchase Details{' '}
								<Text style={tw`text-white/60 text-xs`}> {'(optional)'}</Text>
							</Text>
							<View style={tw`flex flex-row w-full gap-3`}>
								<CardInfoInput
									label="Cost Basis ($)"
									value={costbasis}
									onChange={setCostBasis}
									type="numeric"
								/>
								<CardInfoInput
									label="Asking Price ($)"
									value={askingPrice}
									onChange={setAskingPrice}
									type="numeric"
								/>
							</View>
							<View style={tw`flex flex-col gap-2 w-full`}>
								<Text style={tw`text-white/90 text-xs font-poppinsLight`}>
									Date of Purchase
								</Text>
								<TouchableOpacity
									style={tw`flex flex-row items-center justify-between px-4 w-full h-12 bg-[#1E1828] shadow-lg shadow-purple-100 border border-purple-400 rounded-md`}
									onPress={() => setOpen(true)}
								>
									<Text style={tw`text-white font-poppins p-0 m-0`}>
										{`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
									</Text>
									<SvgXml xml={iconCalendar} />
								</TouchableOpacity>
							</View>
						</View>
					</RectangleGlassRow>
					<DatePicker
						mode="date"
						modal
						open={open}
						date={date}
						onConfirm={date => {
							setOpen(false);
							setDate(date);
						}}
						onCancel={() => {
							setOpen(false);
						}}
					/>
					<View style={tw`flex flex-row w-full px-4 gap-4`}>
						<TouchableOpacity
							style={tw`flex flex-row gap-2 flex-1 py-3 rounded-full mt-10 items-center justify-center border-b-2 border-l-2 border-r-2 border-purple-300 shadow-xl shadow-[#9E91BA] bg-black relative`}
						>
							<SvgXml xml={iconPlusPurple} />
							<Text style={tw`text-purple-300 font-poppinsMedium text-lg`}>
								Watchlist
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={tw`flex flex-row gap-2 flex-1 py-3 rounded-full mt-10 items-center justify-center border-b-2 border-l-2 border-r-2 border-slate-400 shadow-xl shadow-[#9E91BA] bg-black relative`}
							onPress={handleAddCard}
						>
							<LinearGradient
								colors={['#FFFFFF', '#8C52FF']}
								style={tw`absolute inset-0 rounded-full`}
							/>
							<SvgXml xml={iconPlus} />
							<Text style={tw`text-black font-poppinsMedium text-lg`}>
								Add Card
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</Wrapper>
	);
}
