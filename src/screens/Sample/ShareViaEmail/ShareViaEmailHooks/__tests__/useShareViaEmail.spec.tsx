import React, { useEffect } from 'react';
import { mount } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import * as apolloHooks from '@apollo/react-hooks';
import * as navigator from 'library/utilities/navigator';

import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

import useShareViaEmail , { makeEmailHandler } from '../useShareViaEmail';
import * as useShareViaEmailHandlers from '../useShareViaEmail';

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

    it('check empty email', () => {
        const { result } = renderHook(() => useShareViaEmail({ state: { params: null } }));       
            
        act(() => {
            result.current.handleEmail();
        })
        expect(result.current.emailError).toBe('Email cannot be blank');
    })

    it('check incorrect email', () => {
        const { result } = renderHook(() => useShareViaEmail({ state: { params: null } }));  
        
        act(() => {
            result.current.setEmail('test');
        });
        act(() => {
            result.current.handleEmail();
        });
        expect(result.current.emailError).toBe('Email is incorrect');
    })

    it('check call function sendEmailQuery with params', () => {
        const sendEmailQuery = jest.fn();
        const email = 'test@test.com';
        const title = 'test';
        const body = 'test';
        makeEmailHandler({ sendEmailQuery, email, title, body });    
        
        expect(sendEmailQuery).toHaveBeenLastCalledWith({variables: { email: 'test@test.com', title: 'test', body: 'test' }});
    })

    it('test useEffect', () => {
        Object.defineProperty(navigator, 'resetNavigation', {value: jest.fn()});
        Object.defineProperty(apolloHooks, 'useLazyQuery', {value: jest.fn(() => {
            return [jest.fn(), {loading: true, data: {}}]
        })});

        const useEffect = jest.spyOn(React, 'useEffect');
        useEffect.mockImplementationOnce(f => f());
        renderHook(() => useShareViaEmail({ state: { params: null } }));   
        
        expect(useEffect).toHaveBeenCalledTimes(1)
        expect(navigator.resetNavigation).toHaveBeenCalled()
    }) 

    it('check call function makeEmailHandler', () => {
        Object.defineProperty(useShareViaEmailHandlers, 'makeEmailHandler', {value: jest.fn()});
        const { result } = renderHook(() => useShareViaEmail({ state: { params: null } }));     
        
        act(() => {
            result.current.setEmail('test@test.com');
        });
        act(() => {
            result.current.handleEmail();
        });
        expect(result.current.emailError).toBe(null);
        expect(makeEmailHandler).toBeCalled();
    })
});
