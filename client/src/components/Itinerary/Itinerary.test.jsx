import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Itinerary from './Itinerary';


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
  const dummyPricing = {
    price: 123,
    agent: '',
    bookingUrl: '',
  };
  const dummyItinerary = {
    outbound: dummyLeg,
    inbound: dummyLeg,
    pricing: dummyPricing,
  };
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Itinerary
      outbound={dummyItinerary.outbound}
      inbound={dummyItinerary.inbound}
      pricing={dummyItinerary.pricing}
    />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

