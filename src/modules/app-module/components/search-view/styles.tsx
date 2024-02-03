import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    backgroundColor: '#DBF0E8',
    marginTop: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    height: 46,
    paddingHorizontal: 16,
  },
  clearBtn: {
    height: 48,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clear: {
    fontSize: 16,
  },
  devider: {
    height: 36,
    width: 1,
    backgroundColor: 'white',
  },
});
