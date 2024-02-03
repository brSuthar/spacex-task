import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#96AAA2CC',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: 'white',
    height: '70%',
    width: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  img: {
    width: '100%',
    height: 200,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    marginTop: 6,
  },
  close: {
    paddingRight: 16,
    paddingVertical: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  }
});
