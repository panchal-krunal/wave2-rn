import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ColorConstants} from '../../constants';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Chance} from 'chance';
import {changePrice} from '../../redux/actions/watchlist';

const WatchListCard = ({itemData}) => {
  return (
    <View
      style={{
        marginVertical: 10,
        width: responsiveWidth(90),
        alignSelf: 'center',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 0.7,
        paddingBottom: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.85,
            justifyContent: 'space-between',
          }}>
          <View>
            <View>
              <Text style={{fontWeight: 'bold'}}>{itemData?.code}</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text>NSE</Text>
            </View>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <View>
              <Text style={{fontWeight: 'bold', textAlign: 'right'}}>
                {itemData?.price}
              </Text>
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  color: itemData?.changeType === 'UP' ? 'green' : 'red',
                  textAlign: 'right',
                }}>
                {itemData?.changedValue}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{flex: 0.15, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              borderRadius: 100,
              width: 25,
              height: 25,
              borderWidth: 0.7,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>T</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const Dashboard = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const watchListData = state?.watchlistReducer;
  let intervalRef = useRef(null);
  const chance = new Chance();
  const renderWatchListItem = item => {
    return <WatchListCard itemData={watchListData?.[item?.item]} />;
  };

  const renderWatchList = () => {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderWatchListItem}
        data={Object?.keys(watchListData)}
      />
    );
  };

  const updateWatchListDataEverySecond = () => {};

  useEffect(() => {
    const scriptsIds = Object.keys(watchListData);
    const interval = setInterval(() => {
      let changedValue = chance.floating({min: 0, max: 10, fixed: 2});
      let price = chance.integer({min: 100, max: 1000});
      let randomScriptNumber = Math.floor(Math.random() * scriptsIds.length);
      dispatch(
        changePrice(scriptsIds[randomScriptNumber], price, changedValue),
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <View style={styles.container}>{renderWatchList()}</View>;
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.white,
  },
});
