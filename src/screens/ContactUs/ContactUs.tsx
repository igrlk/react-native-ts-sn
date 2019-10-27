import React from 'react';
import { View } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import WithLoader from 'library/common/commonComponents/WithLoader';
import Button from 'library/common/commonComponents/Buttons/Button';
import Input from 'library/common/commonComponents/Inputs/Input';
import useContactUs from 'screens/ContactUs/ContactUsHooks/useContactUs';

import styles from './contactUsStyles';

export default function ContactUs() {
	const { message, addMessage, sendMessage, loading, messageError } = useContactUs();

	return (
		<Screen>
			<WithLoader loading={loading}>
				<GoBackButton>Contact Us</GoBackButton>
				<View style={styles.input}>
					<Input value={message} onChange={addMessage} label='Message' error={messageError} />
				</View>
				<Button onClick={sendMessage}>Send Message</Button>
			</WithLoader>
		</Screen>
	);
}
