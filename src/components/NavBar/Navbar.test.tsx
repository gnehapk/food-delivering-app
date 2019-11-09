import React from 'react';
import TestRenderer from 'react-test-renderer';
import NavBar from './NavBar';

describe('NavBar', () => {
  it('should render correctly', () => {
    const tree = TestRenderer.create(<NavBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

