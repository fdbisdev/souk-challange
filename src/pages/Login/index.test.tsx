import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import * as reactNativeSnackbar from 'react-native-snackbar';
import Login from '.';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  dispatch: jest.fn(),
}));

jest.mock('react-native-snackbar', () => ({
  show: jest.fn(),
}));

describe('Login Page', () => {
  it('should render correctly', () => {
    renderer.create(<Login />);
  });

  it('should useDispatch have been called on init', () => {
    const useDispatch = jest.spyOn(reactRedux, 'useDispatch');
    renderer.create(<Login />);
    expect(useDispatch).toHaveBeenCalled();
  });

  it('should dispatch have been called', () => {
    const dispatch = jest.fn();
    const useDispatch = jest
      .spyOn(reactRedux, 'useDispatch')
      .mockReturnValue(dispatch);
    const component = renderer.create(<Login />);
    const loginButton = component.root.findByProps({ testID: 'loginButton' });
    loginButton.props.onPress();
    expect(useDispatch).toHaveBeenCalled();
  });

  it('should show a success message', () => {
    const dispatch = jest.fn();
    const useDispatch = jest
      .spyOn(reactRedux, 'useDispatch')
      .mockReturnValue(dispatch);
    const show = jest.fn();
    const useSnackbar = jest
      .spyOn(reactNativeSnackbar, 'show')
      .mockReturnValue(show);
    const component = renderer.create(<Login />);
    const loginButton = component.root.findByProps({ testID: 'loginButton' });
    loginButton.props.onPress();
    expect(useSnackbar).toHaveBeenCalled();
    expect(useDispatch).toHaveBeenCalled();
  });

  it('should keyboard dismiss', () => {
    const dismiss = jest.fn();
    const useDispatch = jest
      .spyOn(reactRedux, 'useDispatch')
      .mockReturnValue(dismiss);
    const component = renderer.create(<Login />);
    const keyboardDismissButton = component.root.findByProps({
      testID: 'KeyboardDismissButton',
    });
    keyboardDismissButton.props.onPress();
    expect(useDispatch).toHaveBeenCalled();
  });
});
