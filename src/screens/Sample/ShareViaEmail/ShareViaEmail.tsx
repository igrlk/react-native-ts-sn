import React from 'react';
import { View } from 'react-native';

import Screen from 'library/common/commonComponents/Screen';
import GoBackButton from 'library/common/commonComponents/Buttons/GoBackButton';
import Button from 'library/common/commonComponents/Buttons/Button';
import Input from 'library/common/commonComponents/Inputs/Input';
import WithLoader from 'library/common/commonComponents/WithLoader';
import { NavigationParams } from 'library/common/commonTypes/navigation';

import useShareViaEmail from './ShareViaEmailHooks/useShareViaEmail';


import styles from './ShareViaEmailStyles';

interface ShareViaEmailProps {
	navigation: NavigationParams;
};

export default function ShareViaEmail({ navigation }: ShareViaEmailProps) {
    const {
        loading,
        email,
        setEmail,
        emailError,
        handleEmail,
    } = useShareViaEmail(navigation)

	return (
		<Screen>
            <WithLoader loading={loading}>
                <GoBackButton>Share via Email</GoBackButton>
                <View style={styles.input}>
                    <Input value={email} onChange={setEmail} label='Email' error={emailError} />
                </View>
                <Button onClick={handleEmail}>Send Email</Button>
            </WithLoader>
		</Screen>
	);
}
