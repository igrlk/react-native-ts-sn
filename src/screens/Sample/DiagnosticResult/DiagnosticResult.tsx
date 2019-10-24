import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, Platform } from 'react-native';
import { useQuery } from '@apollo/react-hooks';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import TextWithLabel from 'library/common/commonComponents/TextWithLabel';
import Button from 'library/common/commonComponents/Buttons/Button';
import SubHeader from 'library/common/commonComponents/SubHeader';
import DiagnosticResultIcon from 'resources/images/svg/DiagnosticResultIcon';
import DownloadArrow from 'resources/images/svg/DownloadArrow';
import Share from 'resources/images/svg/Share';
import { navigateTo } from 'library/utilities/navigator';
import dowloadPdf from 'library/utilities/downloadPDF';
import { getDiagnosticResultHTML } from 'library/utilities/getHTML';
import { GET_DIAGNOSTIC_RESULT } from 'library/api/samples';
import WithLoader from 'library/common/commonComponents/WithLoader';
import { NavigationParams } from 'library/common/commonTypes/navigation';
import { getDateForSample } from 'library/utilities/date';

import styles from './diagnosticResultStyles';

interface DiagnosticResultProps {
	navigation: NavigationParams;
};

export default function DiagnosticResult({ navigation }: DiagnosticResultProps) {
	const sample = (navigation.state.params || {}).sample || {};
	const { uuid, crop, city, created  } = sample;
	const dateOfSampling = created && getDateForSample(created);
	const newDate = new Date().getTime();
	const dateOfReport = getDateForSample(newDate);

	const [html, getHTML] = useState<string>('');
	const options = {
		html: html,
        fileName: 'Diagnostic-result',
        directory: (Platform.OS === 'ios') ? 'Documents' : 'Downloads',
	};
	const { data, loading } = useQuery(GET_DIAGNOSTIC_RESULT, { variables: { uuid } });

	useEffect(() => {
		if (data) {
			const diagnostic = getDiagnosticResultHTML(uuid, crop, city, dateOfSampling, dateOfReport, data.getResult);
			getHTML(diagnostic);
		}
	}, [data]);

	return (
		<Screen>
			<WithLoader loading={loading}>
				<GoBackButton>Diagnostic Result</GoBackButton>
				<ScrollView style={styles.containerScroll}>
					<View style={styles.logo}>
						<DiagnosticResultIcon />
					</View>

					<View style={styles.row}>
						<TextWithLabel label='Sample #' text={uuid} />
						<TextWithLabel label='Crop' text={crop} />
					</View>

					<View>
						<TextWithLabel label='Sampling Location' text={city} />
					</View>

					<View style={styles.row}>
						<TextWithLabel label='Date of Sampling' text={dateOfSampling} />
						<TextWithLabel label='Date of Report' text={dateOfReport} />
					</View>

					<SubHeader>Suspected Diseases</SubHeader>

					<View style={styles.diseaseBlock}>
						{data && data.getResult.map((item: any) =>(
							<View style={styles.pathogenBlock}>
								<TextWithLabel label='Pathogen' text={item.pathogen} />
								<View style={item.result ? [styles.bage, styles.orangeBackground] : [styles.bage, styles.greenBackground]}>
									<Text style={styles.bageColor}>{item.result ? 'Detected' : 'Not Detected'}</Text>
								</View>
							</View>)
						)}
					</View>

					<Button type='info' onClick={() => navigateTo('ShareViaEmail', { uuid, result: data.getResult, dateOfReport, dateOfSampling, crop, city })} style={styles.button} icon={<Share />}>
						<Text>Share via Email</Text>
					</Button>
					<Button type='info' onClick={() => dowloadPdf(options, 'SuccessfulDownloadScreen', 'DiagnosticResult')} style={[styles.button, styles.lastChildMargin]} icon={<DownloadArrow />}>
						<Text>Download PDF</Text>
					</Button>
				</ScrollView>
			</WithLoader>
		</Screen>
	);
}
