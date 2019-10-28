import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

import { resetNavigation } from 'library/utilities/navigator';
import { SEND_EMAIL_QUERY } from 'library/api/samples';

export default function useContactUs() {
    const [message, addMessage] = useState<string>('');
    const [messageError, setMessageError] = useState<string | null>(null);

    const title = 'Contact Us';
    const body = message;
    const email = 'contact@sentinelagdiagnostics.com';

    const [sendMessageQuery, { loading, data }] = useLazyQuery(SEND_EMAIL_QUERY);

    useEffect(() => { if (data) resetNavigation('Landing')}, [data]);

    const sendMessage = () => {
        if (message === '') {
            setMessageError('Message cannot be blank');

            return;
        }

        makeMessageHandler({ sendMessageQuery, email, title, body });
	}

    return {
        message,
        addMessage,
        sendMessage,
        loading,
        messageError,
        setMessageError,
    }
}

export const makeMessageHandler = (
    { 
        sendMessageQuery,
        email,
        title,
        body,
    } : {
        sendMessageQuery: any;
        body: string;
        title: string;
        email: string;
    }
) => {
    sendMessageQuery({variables: { email, title, body }});
}
