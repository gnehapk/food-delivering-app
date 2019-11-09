import React from 'react';
import TestRenderer from 'react-test-renderer';
import RestaurantImg from './RestaurantImg';

describe('RestaurantImg', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<RestaurantImg restaurantImg="kithcen.png"/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

