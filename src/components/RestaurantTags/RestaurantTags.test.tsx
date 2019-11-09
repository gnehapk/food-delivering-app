import React from 'react';
import TestRenderer from 'react-test-renderer';
import RestaurantTags from './RestaurantTags';

describe('RestaurantTags', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<RestaurantTags tags={['tag1', 'tag2']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

