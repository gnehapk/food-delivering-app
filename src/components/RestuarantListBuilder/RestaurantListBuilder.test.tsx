import React from 'react';
import TestRenderer from 'react-test-renderer';
import RestaurantListBuilder from './RestaurantListBuilder';

describe('RestaurantListBuilder', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<RestaurantListBuilder />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

