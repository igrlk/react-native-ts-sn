import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ArrowRight from 'resources/images/svg/ArrowRight';
import { getNavigateTo } from 'library/utilities/navigator';
import { getDateForSample } from 'library/utilities/date';
import getStatusColor from 'library/utilities/getStatusColor';

import styles from './listOfSamplesStyles';

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
							<Text style={styles.sampleId}>{getNumberOfSample(sample)}</Text>
							<View style={styles.sampleText}>
								<View style={[styles.circle, getStatusColor(sample.status)]} />
								<Text style={styles.sampleTextValue}>
									{sample.status} ({getDateForSample(sample.created)})
								</Text>
							</View>
						</View>
						<ArrowRight />
					</TouchableOpacity>
				))}
		</View>
	);
}

export const getNumberOfSample = (sample : any) => {
	return sample.number ? sample.number : 'New Request';
}
