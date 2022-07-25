import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {ImageConstants, ColorConstants} from '../../constants';

const Splash = props => {
  const {navigation} = props;
  const redirectUser = () => {
    setTimeout(() => {
      navigation?.push('Login');
    }, 2000);
  };
  useEffect(() => {
    redirectUser();
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={ImageConstants.logo}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorConstants.white,
  },
  logo: {
    width: responsiveScreenWidth(80),
    height: 200,
  },
});
