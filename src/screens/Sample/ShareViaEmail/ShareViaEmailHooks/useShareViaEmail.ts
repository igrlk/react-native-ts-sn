import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { resetNavigation } from 'library/utilities/navigator';
import { SEND_EMAIL_QUERY } from 'library/api/samples';
import { getHTMLForEmail } from 'library/utilities/getHTML';
import { validateEmail } from 'library/utilities/validation';

export default function useShareViaEmail(navigation: any) {
    const params = navigation.state.params || {};
    const { uuid, crop, city, dateOfReport, dateOfSampling, result } = params;
    const title = 'Diagnostic Result';
    const body = getHTMLForEmail(uuid, crop, city, dateOfSampling, dateOfReport, result);

    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string | null>(null);

    const [sendEmailQuery, { loading, data }] = useLazyQuery(SEND_EMAIL_QUERY);

    useEffect(() => { if (data) resetNavigation('Landing')}, [data]);

    const handleEmail = () => {
        if (email.trim().length === 0) {
		    return setEmailError('Email cannot be blank');
        } else if (validateEmail(email)) {
            return setEmailError('Email is incorrect');
        } else {
            setEmailError(null);
        }

        sendEmailQuery({variables: { email, title, body }});
	}

    return {
        body,
        handleEmail,
        email,
        setEmail,
        emailError,
        loading,
        setEmailError,
    }
}
