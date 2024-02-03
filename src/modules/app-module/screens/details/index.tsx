import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDetalsSpacex} from '../../services';
import {unmount} from '../../reducer';

const Details = (props: any) => {
  const {navigation} = props;
  const id = props.route.params.id;

  const dispatch: any = useDispatch();
  const {detail}: any = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchDetalsSpacex(id));
    return () => {
      dispatch(unmount());
    };
  }, []);

  const onClose = () => {
    navigation.pop();
  };

  if (detail == null) {
    return null;
  }

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.close}>
          <Text style={styles.text}>Close</Text>
        </TouchableOpacity>
        <Image
          style={styles.img}
          resizeMode={'contain'}
          source={{uri: detail?.links?.mission_patch_small}}
        />
        <Text style={styles.name}>{detail?.mission_name}</Text>
        <Text style={styles.name}>{detail?.details}</Text>

        <Text style={styles.name}>Launch Site</Text>
        <Text style={styles.name}>{detail?.launch_site?.site_name}</Text>
        <Text style={styles.name}>{detail?.launch_site?.site_name_long}</Text>
      </View>
    </View>
  );
};

export default Details;
