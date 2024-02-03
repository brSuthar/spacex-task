import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {updateFilter} from '../../reducer';

const LaunchFilter = () => {
  const {filter}: any = useSelector(state => state);
  const dispatch: any = useDispatch();

  const onClick = (id: any) => () => {
    dispatch(updateFilter(id));
  };

  const render = (item: any) => {
    const bgColor = item.selected ? '#0000FF' : '#DBF0E8';
    const color = item.selected ? '#FFFFFF' : '#2A3430';

    return (
      <TouchableOpacity
        onPress={onClick(item?.id)}
        style={[styles.container, {backgroundColor: bgColor}]}>
        <Text style={[styles.title, {color: color}]}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return <View style={styles.View}>{filter.map(render)}</View>;
};

export default LaunchFilter;
