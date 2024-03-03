/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src';

import {render} from '@testing-library/react-native';
import {it, describe, expect} from '@jest/globals';

describe(App, function () {
  it('Should render title react native', () => {
    const {getByText} = render(<App />);
    const text = getByText('React Native');
    expect(text).toBeTruthy();
  });
});
