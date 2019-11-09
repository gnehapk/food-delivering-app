import React from 'react';
import TestRenderer from 'react-test-renderer';
import Restaurant from './Restaurant';

describe('Restuarant', () => {
  it('should render correctly', () => {
    const details = {
      id: '1',
      name: 'Kitchen',
      image: 'http://kitchen.png',
      url: 'http://kitchen.png',
      price: 100,
      tags: ['tag1', 'tag2'],
    };
    const tree = TestRenderer.create(<Restaurant details={details} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

