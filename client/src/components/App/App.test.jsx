import React from 'react';
import { BpkExtraLargeSpinner } from 'bpk-component-spinner';
import ShallowRenderer from 'react-test-renderer/shallow';
import { create } from 'react-test-renderer';

import App from './App';
import ItineraryView from '../ItineraryView';

describe('App', () => {
  beforeAll(() => {
    global.URL = jest.fn(() => ({
      searchParams: {
        append: jest.fn(),
      },
    }));

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
  });

  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });

  it('should render a spinner before the data is loaded', () => {
    const { root } = create(<App />);
    expect(root.instance.state.isLoaded).toBeFalsy();
    expect(root.findByType(BpkExtraLargeSpinner)).toBeTruthy();
  });

  it('should render an Itinerary View after the data is loaded', () => {
    const { root } = create(<App />);
    root.instance.setState({
      isLoaded: true,
      itineraries: [],
    });
    expect(root.findByType(ItineraryView)).toBeTruthy();
  });
});

