import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import TextWithLabel from 'library/common/commonComponents/TextWithLabel';
import Button from 'library/common/commonComponents/Buttons/Button';
import SubHeader from 'library/common/commonComponents/SubHeader';
import DiagnosticResultIcon from 'resources/images/svg/DiagnosticResultIcon';
import DownloadArrow from 'resources/images/svg/DownloadArrow';
import Share from 'resources/images/svg/Share';

import styles from './diagnosticResultStyles';

export default function DiagnosticResult() {
	return (
		<Screen>
			<GoBackButton>Diagnostic Result</GoBackButton>
			<ScrollView style={styles.containerScroll}>
				<View style={styles.logo}>
					<DiagnosticResultIcon />
				</View>

				<View style={styles.row}>
					<TextWithLabel label='Sample #' text='7001' />
					<TextWithLabel label='Crop' text='Tomato' />
				</View>

				<View>
					<TextWithLabel label='Sampling Location' text='LA' />
				</View>

				<View style={styles.row}>
					<TextWithLabel label='Date of Sampling' text='Sep 1, 2019' />
					<TextWithLabel label='Date of Report' text='Sep 5, 2019' />
				</View>

				<SubHeader>Suspected Diseases</SubHeader>

				<View style={styles.pathogenBlock}>
					<TextWithLabel label='Pathogen' text='User Specified #1' />
					<View style={[styles.bage, styles.orangeBackground]}>
						<Text style={styles.bageColor}>Detected</Text>
					</View>
				</View>

				<View style={styles.pathogenBlock}>
					<TextWithLabel label='Pathogen' text='User Specified #2' />
					<View style={[styles.bage, styles.orangeBackground]}>
						<Text style={styles.bageColor}>Detected</Text>
					</View>
				</View>

				<View style={[styles.pathogenBlock, styles.lastChildMargin]}>
					<TextWithLabel label='Pathogen' text='User Specified #3' />
					<View style={[styles.bage, styles.greenBackground]}>
						<Text style={styles.bageColor}>Not Detected</Text>
					</View>
				</View>

				<SubHeader>Other concerns</SubHeader>

				<Text style={styles.text}>We tested for over 1000 pathogens</Text>

				<View style={styles.pathogenBlock}>
					<TextWithLabel label='Pathogen' text='Pathogen #1 Identified' />
					<View style={[styles.bage, styles.orangeBackground]}>
						<Text style={styles.bageColor}>Detected</Text>
					</View>
				</View>

				<View style={[styles.pathogenBlock, styles.lastChildMargin]}>
					<TextWithLabel label='Pathogen' text='All other pathogens' />
					<View style={[styles.bage, styles.orangeBackground]}>
						<Text style={styles.bageColor}>Detected</Text>
					</View>
				</View>

				<Button type='info' onClick={() => {}} style={styles.button} icon={<Share />}>
					<Text>Share via Email</Text>
				</Button>
				<Button type='info' onClick={() => {}} style={[styles.button, styles.lastChildMargin]} icon={<DownloadArrow />}>
					<Text>Download PDF</Text>
				</Button>
			</ScrollView>
		</Screen>
	);
}
