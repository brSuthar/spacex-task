import React, {useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {fetchAllSpacex} from '../../services';

const Dashboard = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchAllSpacex());
  }, []);

  return <View style={styles.container}></View>;
};

export default Dashboard;
