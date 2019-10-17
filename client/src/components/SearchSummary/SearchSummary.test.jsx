import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchSummary from './SearchSummary';

describe('Search Summary', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SearchSummary origin="a" destination="b" cabinClass="eco" numTravellers={2} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

