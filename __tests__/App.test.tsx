import { shallow } from 'enzyme';
import React from 'react';

import App from '../App';

const createTestProps = (props: object) => ({
  ...props,
});

describe('App', () => {
  const props = createTestProps({});
  const instance = shallow(<App {...props} />);

  describe('rendering', () => {
    it('should render a <View />', () => {
      expect(instance.find('View')).toHaveLength(1);
    });
  });
});