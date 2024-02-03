import React, {useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetchAllSpacex} from '../../services';
import ListLaunches from '../../components/list-launches';
import LaunchFilter from '../../components/launch-filter';
import SearchView from '../../components/search-view';

const Dashboard = () => {
  const dispatch: any = useDispatch();
  const {filter} = useSelector(state => state);

  useEffect(() => {
    const info = filter.find(item => item.selected);
    console.log('Selected:: ', info, filter);
    dispatch(fetchAllSpacex(info?.key));
  }, [filter]);

  return (
    <View style={styles.container}>
      <SearchView />
      <LaunchFilter />
      <ListLaunches />
    </View>
  );
};

export default Dashboard;
