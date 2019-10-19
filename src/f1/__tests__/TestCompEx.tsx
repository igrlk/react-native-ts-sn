import { shallow } from 'enzyme';
import React from 'react';

import TestCompEx from '../TestCompEx';

const createTestProps = (props: object) => ({
  ...props,
});

describe('TestCompEx', () => {
  const props = createTestProps({});
  const instance = shallow(<TestCompEx {...props} />);

  describe('rendering', () => {
    it('should render a <View />', () => {
      expect(instance.find('View')).toHaveLength(1);
    });
  });
});