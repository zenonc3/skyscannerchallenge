import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import LegMeta from './LegMeta';

describe('Leg Meta', () => {
  it('should render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<LegMeta duration={20} numStops={2} />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

