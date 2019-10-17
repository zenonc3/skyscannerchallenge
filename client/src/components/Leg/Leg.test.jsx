import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Leg from './Leg';


describe('Itinerary', () => {
  const dummyLeg = {
    origin: '',
    destination: '',
    departure: '',
    arrival: '',
    duration: 10,
    numStops: 1,
    carrier: '',
  };
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Leg {...dummyLeg} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

