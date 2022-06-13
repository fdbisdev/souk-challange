import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import MovieList from '.';

describe('Movie List Component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<MovieList popular={false} upcoming />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
