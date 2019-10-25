import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import Button from 'library/common/commonComponents/Buttons/Button';
import { getNavigateTo } from 'library/utilities/navigator';
import { NavigationParams } from 'library/common/commonTypes/navigation';
import TextWithLabel from 'library/common/commonComponents/TextWithLabel';
import { getDateForSample } from 'library/utilities/date';
import { useQuery } from '@apollo/react-hooks';
import { GET_SAMPLE_STATUS } from 'library/api/samples';

import styles from './orderDetailStyles';
import WithLoader from 'library/common/commonComponents/WithLoader';

interface OrderDetailProps {
	navigation: NavigationParams;
}

type SampleStatus = {
	status: string;
	date: string;
};

export default function OrderDetail({ navigation }: OrderDetailProps) {
	const sample = (navigation.state.params || {}).sample || {};

	const [sampleStages, setSampleStages] = useState<SampleStatus[]>([]);
	const { data, loading } = useQuery(GET_SAMPLE_STATUS, { variables: { uuid: sample.uuid } });
	useEffect(() => {
		if (data) setSampleStages(data.getStatus);
	}, [data]);

	return (
		<Screen>
			<GoBackButton>Order Detail</GoBackButton>
			<View style={styles.textWithLabel}>
				<TextWithLabel label='Sample #' text={sample.uuid} />
			</View>

			<WithLoader loading={loading}>
				<Text style={styles.sampleStatusTitle}>Status History</Text>
				<WithLoader loading={loading}>
					<View style={styles.sampleStatusContainer}>
						<View style={styles.sampleStatusItem}>
							<View style={styles.sampleStatusItemLine} />
							<View style={[styles.circle, sampleStages[0] && styles.circleRed]} />
							<View>
								<Text
									style={[styles.sampleStatusText, sampleStages[0] && styles.sampleStatusTextRed]}
								>
									Sample Requested
								</Text>
								{sampleStages[0] && (
									<Text style={styles.sampleStatusDate}>
										{getDateForSample(sampleStages[0].date)}
									</Text>
								)}
							</View>
						</View>

						<View style={styles.sampleStatusItem}>
							<View style={styles.sampleStatusItemLine} />
							<View style={[styles.circle, sampleStages[1] && styles.circleOrange]} />
							<View>
								<Text
									style={[
										styles.sampleStatusText,
										sampleStages[1] && styles.sampleStatusTextOrange,
									]}
								>
									Sample Kit Shipped
								</Text>
								{sampleStages[1] && (
									<Text style={styles.sampleStatusDate}>
										{getDateForSample(sampleStages[1].date)}
									</Text>
								)}
							</View>
						</View>

						<View style={styles.sampleStatusItem}>
							<View style={styles.sampleStatusItemLine} />
							<View style={[styles.circle, sampleStages[2] && styles.circleBlue]} />
							<View>
								<Text
									style={[styles.sampleStatusText, sampleStages[2] && styles.sampleStatusTextBlue]}
								>
									Sample Received
								</Text>
								{sampleStages[2] && (
									<Text style={styles.sampleStatusDate}>
										{getDateForSample(sampleStages[2].date)}
									</Text>
								)}
							</View>
						</View>

						<View style={styles.sampleStatusItem}>
							<View style={styles.sampleStatusItemLine} />
							<View style={[styles.circle, sampleStages[3] && styles.circlePurple]} />
							<View>
								<Text
									style={[
										styles.sampleStatusText,
										sampleStages[3] && styles.sampleStatusTextPurple,
									]}
								>
									Processing
								</Text>
								{sampleStages[3] && (
									<Text style={styles.sampleStatusDate}>
										{getDateForSample(sampleStages[3].date)}
									</Text>
								)}
							</View>
						</View>

						<View style={styles.sampleStatusItem}>
							<View style={[styles.sampleStatusItemLine, styles.sampleStatusItemLineWhite]} />
							<View style={[styles.circle, sampleStages[4] && styles.circleGreen]} />
							<View>
								<Text
									style={[styles.sampleStatusText, sampleStages[4] && styles.sampleStatusTextGreen]}
								>
									Completed
								</Text>
								{sampleStages[4] && (
									<Text style={styles.sampleStatusDate}>
										{getDateForSample(sampleStages[4].date)}
									</Text>
								)}
							</View>
						</View>
					</View>
				</WithLoader>

				{sampleStages[4] ? (
					<Button onClick={getNavigateTo('DiagnosticResult', { sample })}>View Report</Button>
				) : sampleStages[3] ? null : (
					<Button onClick={getNavigateTo('SampleDetail', { sample })}>View Sample Detail</Button>
				)}
			</WithLoader>
		</Screen>
	);
}
