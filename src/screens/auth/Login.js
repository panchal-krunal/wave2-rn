import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React, {useState, useReducer} from 'react';
import {ColorConstants, ImageConstants} from '../../constants';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {TextButton, LinkButton} from '../../components';
import Toast from 'react-native-simple-toast';
import {useSelector} from 'react-redux';

const Login = props => {
  const {navigation} = props;
  const state = useSelector(state => state);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [panMobile, setPanMobile] = useState('');
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={ImageConstants.logo}
          resizeMode="contain"
          style={styles.headerLogo}
        />
      </View>
    );
  };
  const onLoginPress = () => {
    try {
      if (!userId) {
        Toast.show('Please enter valid user id');
        return;
      }
      if (!password) {
        Toast.show('Please enter valid password');
        return;
      }
      if (!panMobile) {
        Toast.show('Please enter valid pan/mobile');
        return;
      }
      navigation?.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };
  const renderLoginButton = () => {
    return (
      <View style={styles.loginButtonContainer}>
        <TextButton
          buttonText={'Login'}
          buttonStyle={styles.loginButtonStyle}
          buttonTextStyle={styles.loginButtonTextStyle}
          onPress={onLoginPress}
        />
        <LinkButton
          buttonText={'Forgot Password ?'}
          buttonTextStyle={styles.forgotButtonTextStyle}
          buttonStyle={styles.forgotButtonStyle}
        />
      </View>
    );
  };
  const renderRegisterButton = () => {
    return (
      <View style={styles.registerButtonContainer}>
        <Text style={styles.registerText}>
          Haven't registered yet? Click here to{' '}
        </Text>
        <LinkButton
          buttonText={'Register'}
          buttonTextStyle={styles.registerButtonTextStyle}
          buttonStyle={styles.registerButtonStyle}
        />
      </View>
    );
  };
  const renderLoginForm = () => {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          placeholder="User ID"
          style={styles.formInput}
          keyboardType="default"
          autoCapitalize="none"
          value={userId}
          onChangeText={val => setUserId(val)}
        />
        <TextInput
          placeholder="Password"
          style={styles.formInput}
          secureTextEntry
          value={password}
          onChangeText={val => setPassword(val)}
        />
        <TextInput
          placeholder="PAN or Mobile No."
          style={styles.formInput}
          secureTextEntry
          value={panMobile}
          onChangeText={val => setPanMobile(val)}
        />
        {renderLoginButton()}
        {renderRegisterButton()}
      </View>
    );
  };
  const renderFooter = () => {
    return <View style={styles.footerContainer}></View>;
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderLoginForm()}
      {renderFooter()}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.white,
  },

  headerContainer: {
    height: 70,
    flexDirection: 'column',
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  headerLogo: {
    width: responsiveWidth(35),
    height: 50,
  },
  formContainer: {
    flex: 0.8,
    flexDirection: 'column',
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  footerContainer: {
    flex: 0.2,
    flexDirection: 'column',
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  loginText: {
    fontSize: responsiveFontSize(4.5),
    marginVertical: 10,
  },
  formInput: {
    height: 45,
    width: responsiveWidth(90),
    marginVertical: 10,
    fontSize: responsiveFontSize(1.5),
    borderRadius: 10,
    borderColor: ColorConstants.darkBlue,
    borderWidth: 0.7,
    padding: 10,
  },
  loginButtonStyle: {
    borderRadius: 10,
    width: 150,
    height: 45,
    padding: 10,
    backgroundColor: ColorConstants.darkBlue,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  loginButtonTextStyle: {
    color: ColorConstants.white,
    fontSize: responsiveFontSize(1.8),
  },
  loginButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(90),
    marginTop: 50,
  },
  forgotButtonStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  forgotButtonTextStyle: {
    color: ColorConstants.darkBlue,
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: responsiveFontSize(1.5),
  },
  registerButtonStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginTop: -2,
  },
  registerButtonTextStyle: {
    color: ColorConstants.darkBlue,
    fontSize: responsiveFontSize(1.8),
    fontWeight: 'bold',
  },
  registerButtonContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
});
