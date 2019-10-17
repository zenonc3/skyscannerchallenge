import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ItineraryView from './ItineraryView';


describe('Itinerary', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ItineraryView itineraries={[]} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

