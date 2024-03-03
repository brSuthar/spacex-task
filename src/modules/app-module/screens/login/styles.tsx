import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
  },
  view: {
    width: '100%',
    height: 52,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'gray',
    textAlignVertical: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  loginBtn: {
    width: '80%',
    height: 52,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    alignSelf: 'center',
  },
  login: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
