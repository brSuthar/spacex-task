import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {clearFilter, searchFilter} from '../../reducer';

const SearchView = () => {
  const {searchText}: any = useSelector(state => state);
  const dispatch: any = useDispatch();

  const onSearchText = (text: string) => {
    dispatch(searchFilter(text));
  };

  const onClearText = () => {
    dispatch(clearFilter());
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={searchText}
        placeholder={'Search'}
        onChangeText={onSearchText}
        style={styles.input}
      />
      <View style={styles.devider} />
      <TouchableOpacity onPress={onClearText} style={styles.clearBtn}>
        <Text>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchView;
