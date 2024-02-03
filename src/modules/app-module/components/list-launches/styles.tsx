import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    height: 230,
    width: '48%',
    backgroundColor: '#DBF0E8',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  columnStyle: {
    justifyContent: 'space-between',
  },
  img: {
    width: '100%',
    height: '66%',
  },
  seprator: {
    height: 16,
  },
  contentStyle: {
    paddingVertical: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212725',
  },
  desc: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 3,
    color: '#3C4F48',
  },
  devider: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
    marginVertical: 8,
  },
  infoView: {
    flex: 1,
  }
});
