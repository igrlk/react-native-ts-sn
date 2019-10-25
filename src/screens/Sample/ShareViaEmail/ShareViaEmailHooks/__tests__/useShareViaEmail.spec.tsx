import React from 'react';
import { mount } from 'enzyme';

import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

import useShareViaEmail from '../useShareViaEmail';

function HookWrapper(props: any) {
	const hook = props.hook ? props.hook() : undefined;

	return <div hook={hook} />;
}

describe('shareViaEmail', () => {
    it('should return correct values', () => {
        const component = mount(
			<ApolloTestWrapper>
				<HookWrapper hook={() => useShareViaEmail({ state: { params: null } })}/>
			</ApolloTestWrapper>,
		);
		const {
			hook: {
                loading,
                email,
                setEmail,
                emailError,
                handleEmail,
                setEmailError,
			},
        } = component.find('div').props() as any;
        
        expect(email).toBe('');
		expect(typeof setEmail).toBe('function');
		expect(emailError).toBe(null);
        expect(typeof handleEmail).toBe('function');
        expect(loading).toBe(false);
        expect(typeof setEmailError).toBe('function');
    })
});
