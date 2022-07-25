import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const TextButton = ({
  buttonText,
  buttonStyle,
  buttonTextStyle,
  showLoader,
  loaderColor,
  loaderSize,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.button, ...buttonStyle}}
      disabled={showLoader}>
      {!showLoader && (
        <Text style={{...styles.buttonText, ...buttonTextStyle}}>
          {buttonText}
        </Text>
      )}
      {showLoader && (
        <ActivityIndicator color={loaderColor} size={loaderSize} />
      )}
    </TouchableOpacity>
  );
};

TextButton.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.any,
  buttonTextStyle: PropTypes.any,
  showLoader: PropTypes.bool,
  loaderColor: PropTypes.string,
  loaderSize: PropTypes.string,
  onPress: PropTypes.func,
};
TextButton.defaultProps = {
  buttonText: 'Button',
  buttonStyle: {},
  buttonTextStyle: {},
  showLoader: false,
  loaderColor: '#ffff',
  loaderSize: 'small',
  onPress: () => {
    console.log('TEXTBUTTON');
  },
};

const styles = StyleSheet.create({
  button: {},
  buttonText: {},
});

export default TextButton;
