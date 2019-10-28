import React from 'react';
import { mount } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import * as navigator from 'library/utilities/navigator';
import * as apolloHooks from '@apollo/react-hooks';

import ApolloTestWrapper from 'library/common/commonComponents/ApolloTestWrapper/ApolloTestWrapper';

import useContactUs  from '../useContactUs';
import * as useContactUsHandlers from '../useContactUs';

function HookWrapper(props: any) {
	const hook = props.hook ? props.hook() : undefined;

	return <div hook={hook} />;
}

describe('useContactUs', () => {
    it('should return correct values', () => {
        const component = mount(
			<ApolloTestWrapper>
				<HookWrapper hook={() => useContactUs()}/>
			</ApolloTestWrapper>,
		);
		const {
			hook: {
                message,
                addMessage,
                sendMessage,
                loading,
                messageError,
                setMessageError,
			},
        } = component.find('div').props() as any;
        
        expect(message).toBe('');
		expect(typeof addMessage).toBe('function');
		expect(messageError).toBe(null);
        expect(typeof sendMessage).toBe('function');
        expect(loading).toBe(false);
        expect(typeof setMessageError).toBe('function');
    });

    it('check empty message', () => {
        const { result } = renderHook(() => useContactUs());       
            
        act(() => {
            result.current.sendMessage();
        });
        act(() => {
            result.current.addMessage('');
        });
        expect(result.current.messageError).toBe('Message cannot be blank');
    });

    it('check send message', () => {
        const { result } = renderHook(() => useContactUs());       
            
        act(() => {
            result.current.sendMessage();
        });
        act(() => {
            result.current.addMessage('test message');
        });
        expect(result.current.messageError).toBe('Message cannot be blank');
    });

    it('check makeMessageHandler', () => {
        const sendMessageQuery = jest.fn();
        const email = 'test@test.com';
        const title = 'test';
        const body = 'test';
        
        useContactUsHandlers.makeMessageHandler({ sendMessageQuery, email, title, body })
        expect(sendMessageQuery).toBeCalledWith({variables: { email: 'test@test.com', title: 'test', body: 'test' }});
    })

    it('test useEffect', () => {
        Object.defineProperty(navigator, 'resetNavigation', {value: jest.fn()});
        Object.defineProperty(apolloHooks, 'useLazyQuery', {value: jest.fn(() => {
            return [jest.fn(), {loading: true, data: {}}]
        })});

        const useEffect = jest.spyOn(React, 'useEffect');
        useEffect.mockImplementationOnce(f => f());
        renderHook(() => useContactUs());   
        
        expect(useEffect).toHaveBeenCalledTimes(1);
        expect(navigator.resetNavigation).toHaveBeenCalled();
    }) 

    it('check call function makeMessageHandler', () => {
        Object.defineProperty(useContactUsHandlers, 'makeMessageHandler', {value: jest.fn()});
        const { result } = renderHook(() => useContactUs());     
        
        act(() => {
            result.current.addMessage('test');
        });
        act(() => {
            result.current.sendMessage();
        });
        expect(result.current.messageError).toBe(null);
        expect(useContactUsHandlers.makeMessageHandler).toBeCalled();
    })
});
