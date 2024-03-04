import 'react-native';
import React from 'react';
import Login from '..';

import {render, fireEvent} from '@testing-library/react-native';
import {it, expect, describe} from '@jest/globals';
import renderer from 'react-test-renderer';

describe(Login, function () {
  it('Should render user input', function () {
    const {getByTestId} = render(<Login />);
    const input = getByTestId('user-name');
    expect(input).toBeTruthy();
    expect(input.props.value).toBe('');
    expect(input.props.maxLength).toBe(10);
    expect(input.props.placeholder).toBe('Username');
    fireEvent.changeText(input, 'bhomaram suthar');
    expect(input.props.value).toBe('bhomaram suthar');
  });
  it('Should render password', function () {
    const {getByTestId} = render(<Login />);
    const password = getByTestId('password');
    expect(password).toBeTruthy();
  });
  it('Should click login', function () {
    const {getByTestId} = render(<Login />);
    fireEvent.press(getByTestId('login'));
  });

  describe('Render login', function () {
    it('login rendered correctly', function () {
      const tree = renderer.create(<Login />);
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
