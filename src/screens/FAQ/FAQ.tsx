import React, { useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import { NavigationParams } from 'library/common/commonTypes/navigation';
import Vector from 'resources/images/svg/Vector';

import styles from './FAQStyles';

interface FAQProps {
	navigation: NavigationParams;
}

export default function FAQ({ navigation }: FAQProps) {
	const params = navigation.state.params || {};
	const scrollRef = useRef<ScrollView>(null);

	useEffect(() => {
		if (params.toSamples && scrollRef.current) {
			scrollRef.current.scrollTo(2270);
		}
	}, [navigation]);

	const goToTop = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo({x: 0, y: 0, animated: true});
		}
	}

	return (
		<Screen scrollRef={scrollRef}>
			<GoBackButton>FAQ</GoBackButton>

			<View style={styles.container}>
				{faqItems.map((faqItem, index) => (
					<View key={index}>
						<Text style={[styles.text, styles.title]}>{faqItem.title}</Text>
						<Text style={styles.text}>{faqItem.text}</Text>
					</View>
				))}
			</View>

			<TouchableOpacity style={styles.button} onPress={goToTop}>
				<Vector />
			</TouchableOpacity>
		</Screen>
	);
}

export const faqItems = [
	{
		title: 'What is Sentinel?',
		text:
			'Sentinel is a cutting-edge diagnostic service that can detect diseases before visual symptoms occur and screens for over 1,000 pathogens in a single test. This gives growers the ability to make data-driven decisions about their crops. We pride ourselves on providing fast, accurate, affordable diagnostics.',
	},
	{
		title: 'What is the Sentinel diagnostic process?',
		text:
			'When you request services, we will ship you a sampling kit that includes instructions and a pre-paid return mailing envelope. You will sample your plants according to the directions and ship us back the leaves. Then we do all the hard work to diagnose your plants and return the results in a simple, easily shared format in the app.',
	},
	{
		title: 'How do we know Sentinel works?',
		text:
			'We have been using this process to diagnose plants for over three years now and it has been extremely successful in vegetable crops. We have done sensitivity testing with bacteria and viruses to ensure our detection levels are sufficient and have performed a pressure-test to determine how many different pathogens we can detect in a single sample. We are now working with beta testers to ensure that the process works with other types of crops such as berries, grapes, stone fruit, and nut trees.',
	},
	{
		title: 'What diseases does this service test for?',
		text:
			'We test for over 1,000 plant diseases simultaneously. That includes bacteria, fungi, oomycetes, viruses, and viroids. In the future, the full list will be available for you to download.',
	},
	{
		title: 'How can you test for so many diseases at once?',
		text:
			'We took a diagnostic method from human healthcare and have adapted it for agriculture. We use genetic information from the plant combined with a proprietary data analysis process to ensure we are capturing every possible pathogen in your sample.',
	},
	{
		title: 'On what crops can you perform Sentinel testing?',
		text:
			'Currently, we know that Sentinel works on vegetable crops including tomato, pepper, melon, watermelon, cucumber, squash, lettuce, broccoli, spinach, and corn. We are completing beta testing to show that Sentinel also works on grape, berries, nut trees, and fruit trees.',
	},
	{
		title: 'What is in the sampling kit?',
		text:
			'The sampling kit contains a detailed instruction page with how to collect leaves and the size of leaf required, resealable plastic baggies to collect leaves in, and a pre-paid return mailing envelope for you to ship the samples back to us.',
		isForSamples: true,
	},
	{
		title: 'What is a sample?',
		text:
			'A single sample can contain anywhere from 1 to 100 leaves. If you are seeing symptoms in your field, you can send us symptomatic leaves from just a few plants to diagnose. If you want to do a broad screen for pathogens, you can send us up to 100 randomly sampled leaves from your growing location for us to test.',
	},
	{
		title: 'How many samples can I get tested at one time?',
		text:
			'Beta testers may submit up to 5 samples for free during this phase of our product testing and launch.',
	},
	{
		title: 'Where do I sample off the plant?',
		text:
			'We want the youngest leaf from the plant that is the correct size. You can see an example outline of the leaf size required on the sampling instruction page.',
	},
	{
		title: 'How big of a leaf should I pick?',
		text:
			'The sampling instructions page has an outline of a leaf to give you an idea of the leaf size requested. In general, the leaf needs to be at least the size of a quarter.',
	},
	{
		title: 'Do I need to ship the leaves back on ice?',
		text:
			'No. We provide you with an overnight shipping label so that you can simply put the leaves in the sampling bag and ship it back to us.',
	},
	{
		title: 'How long will it take to get results once I ship my sample?',
		text:
			'You can expect results in the app in 10-14 business days from the time your samples are received in our lab.',
	},
	{
		title: 'How can I contact the Sentinel Team if I have a problem?',
		text:
			'Email: contact@sentinelagdiagnostics.com\nPhone: 1-530-669-6223',
	},
];
