import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import TimeLocation from './TimeLocation';

describe('TimeLocation', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TimeLocation time="2019-10-21T12:55:00" location="EDI" />);

    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

