import React from 'react';
import { View, Text, Platform } from 'react-native';
 
import { NavigationParams } from 'library/common/commonTypes/navigation';
import Screen from 'library/common/commonComponents/Screen';
import TextWithLabel from 'library/common/commonComponents/TextWithLabel';
import Button from 'library/common/commonComponents/Buttons/Button';
import { getResetNavigation } from 'library/utilities/navigator';
import SuccessConfirmMessageIcon from 'resources/images/svg/SuccessConfirmMessageIcon';
import { receiptHTML } from 'library/utilities/getHTML';
import dowloadPdf from 'library/utilities/downloadPDF';
import { getDateForSample } from 'library/utilities/date';
 
import styles from './requestServiceConfirmationStyles';
 
interface RequestServiceConfirmationProps {
    navigation: NavigationParams;
} 
 
export default function RequestServiceConfirmation({
    navigation,
}: RequestServiceConfirmationProps) {
    const params = navigation.state.params || {};
    const newDate = new Date().getTime();
    const date = getDateForSample(newDate);
    const options = {
        html: receiptHTML(params.fullName, params.selectedSamplesCount, date),
        fileName: 'Sample-request-receipt',
        directory: (Platform.OS === 'ios') ? 'Documents' : 'Downloads',
    };
 
    return (
        <Screen>
            <View style={styles.title}>
                <SuccessConfirmMessageIcon />
                <Text style={styles.titleText}>Confirmed</Text>
            </View>
 
            <View>
                <TextWithLabel label='Name' text={params.fullName} />
            </View>
 
            <View style={styles.quantity}>
                <TextWithLabel label='Quantity' text={params.selectedSamplesCount} />
                <TextWithLabel label='Date of Request' text={date} />
            </View>
 
            <Text style={styles.text}>
                Thank you for your request! Look for a confirmation message in your email for further information.
            </Text>
 
            <Button
                type='info'
                onClick={() => dowloadPdf(options, 'SuccessfulDownloadScreen', 'RequestServiceConfirmation')}
                style={styles.button}
            >
                Download Receipt
            </Button>
            <Button onClick={getResetNavigation('Landing')}>OK</Button>
        </Screen>
    );
}
