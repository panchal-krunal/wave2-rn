import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ColorConstants} from '../../constants';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {Chance} from 'chance';
import {changePrice} from '../../redux/actions/watchlist';
// import Carousel from 'react-native-snap-carousel';

const WatchListCard = ({itemData, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(itemData)}
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
    </TouchableOpacity>
  );
};

const ScriptCarousel = ({isVisible, onClose}) => {
  const ENTRIES1 = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
    {
      title: 'Middle Earth, Germany',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/lceHsT6l.jpg',
    },
  ];
  // _renderItem = ({item, index}) => {
  //   return (
  //     <View style={styles.slide}>
  //       <Text style={styles.title}>{item.title}</Text>
  //     </View>
  //   );
  // };
  return (
    <Modal animationType="slide" transparent visible={isVisible}>
      <TouchableOpacity onPress={onClose}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,.5)',
          }}>
          {/* <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={ENTRIES1}
            renderItem={this._renderItem}
            // sliderWidth={sliderWidth}
            // itemWidth={itemWidth}
          /> */}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
const Dashboard = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const watchListData = state?.watchlistReducer;
  let intervalRef = useRef(null);
  const chance = new Chance();

  // states
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onWatchListItemPress = item => {
    console.log(item);
    toggleScriptModal();
  };

  const renderWatchListItem = item => {
    return (
      <WatchListCard
        itemData={watchListData?.[item?.item]}
        onPress={onWatchListItemPress}
      />
    );
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

  const toggleScriptModal = () => setIsModalVisible(!isModalVisible);

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

  return (
    <View style={styles.container}>
      {renderWatchList()}
      <ScriptCarousel isVisible={isModalVisible} onClose={toggleScriptModal} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.white,
  },
});
