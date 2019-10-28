import React from 'react';
import renderer from 'react-test-renderer';

import ContactUs from '../ContactUs';

describe('ContactUs', () => {
	it('match to snapshot', () => {
        const tree = renderer.create(
            <ContactUs />
        ).toJSON();
		expect(tree).toMatchSnapshot();
    });
});
