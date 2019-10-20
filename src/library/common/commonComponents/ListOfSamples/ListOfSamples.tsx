import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ArrowRight from 'resources/images/svg/ArrowRight';
import styles from './listOfSamplesStyles';
import { getNavigateTo } from 'library/utilities/navigator';
import { getDateForSample } from 'library/utilities/date';

interface ListOfSamplesProps {
	samples: any[];
}

export default function ListOfSamples({ samples }: ListOfSamplesProps) {
	return (
		<View>
			{samples
				.sort((a, b) => b.created - a.created)
				.map(sample => (
					<TouchableOpacity
						key={sample.uuid}
						onPress={getNavigateTo('OrderDetail', { sample })}
						style={styles.sample}
					>
						<View>
							<Text style={styles.sampleId}>Request</Text>
							<View style={styles.sampleText}>
								<View style={styles.circle} />
								<Text style={styles.sampleTextValue}>
									Sample Requested ({getDateForSample(sample.created)})
								</Text>
							</View>
						</View>
						<ArrowRight />
					</TouchableOpacity>
				))}
		</View>
	);
}
