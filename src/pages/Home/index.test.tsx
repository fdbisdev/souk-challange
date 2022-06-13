import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { fireEvent, act } from '@testing-library/react-native';
import Home from '.';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Home page', () => {
  it('should useSelector have been called on init', async () => {
    const useSelector = jest.spyOn(reactRedux, 'useSelector');
    useSelector.mockReturnValue({ name: 'test' });
    renderer.create(<Home />);
    expect(useSelector).toHaveBeenCalled();
  });

  it('should render correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should set upcoming movie', () => {
    const component = renderer.create(<Home />);
    const instance = component.root;
    const instanceChild = instance.findByProps({ testID: 'upcomingMovie' });
    expect(instanceChild.props.isSelected).toEqual(true);
    act(() => {
      fireEvent.press(instanceChild);
    });
    expect(instanceChild.props.isSelected).toEqual(false);
  });

  it('should set popular movie', () => {
    const component = renderer.create(<Home />);
    const instance = component.root;
    const instanceChild = instance.findByProps({ testID: 'popularMovie' });
    expect(instanceChild.props.isSelected).toEqual(false);
    act(() => {
      fireEvent.press(instanceChild);
    });
    expect(instanceChild.props.isSelected).toEqual(true);
  });
});
