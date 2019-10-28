import React from 'react';
import renderer from 'react-test-renderer';

import ShareViaEmail from '../ShareViaEmail';

describe('ShareViaEmail', () => {
	it('match to snapshot', () => {
        const tree = renderer.create(
            <ShareViaEmail
                navigation={ {state: { params: { data: [] } } } as any}
            />
        ).toJSON();
		expect(tree).toMatchSnapshot();
    });
});
