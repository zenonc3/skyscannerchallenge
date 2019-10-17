import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ActionBar from './ActionBar';

describe('Pricing', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ActionBar />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

