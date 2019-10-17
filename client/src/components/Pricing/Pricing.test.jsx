import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Pricing from './Pricing';

describe('Pricing', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Pricing agent="myagent" bookingUrl="http://url.com" price={30} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

