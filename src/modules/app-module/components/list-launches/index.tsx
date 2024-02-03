import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const ListLaunches = () => {
  const {list}: any = useSelector(state => state);
  const navigation: any = useNavigation();

  const onClick = (id: number) => () => {
    navigation.navigate('details', {id});
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={onClick(item?.flight_number)}
        activeOpacity={0.6}
        style={styles.view}>
        <Image
          style={styles.img}
          resizeMode={'contain'}
          source={{uri: item?.links?.mission_patch_small}}
        />
        <View style={styles.devider} />
        <View style={styles.infoView}>
          <Text numberOfLines={1} style={styles.name}>
            {item?.mission_name}
          </Text>
          <Text numberOfLines={2} style={styles.desc}>
            {item?.details}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderSeprator = () => {
    return <View style={styles.seprator} />;
  };

  return (
    <FlatList
      data={list}
      numColumns={2}
      columnWrapperStyle={styles.columnStyle}
      contentContainerStyle={styles.contentStyle}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderSeprator}
    />
  );
};

export default ListLaunches;
