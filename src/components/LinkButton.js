import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({buttonText, buttonStyle, buttonTextStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...buttonStyle}}
      onPress={onPress}>
      <Text style={{...styles.buttonText, ...buttonTextStyle}}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

LinkButton.propTypes = {
  buttonText: PropTypes.string,
  buttonStyle: PropTypes.any,
  buttonTextStyle: PropTypes.any,
  onPress: PropTypes.func,
};
LinkButton.defaultProps = {
  buttonText: 'Button',
  buttonStyle: {},
  buttonTextStyle: {},
  onPress: () => {
    console.log('LINKBUTTON');
  },
};

const styles = StyleSheet.create({
  button: {},
  buttonText: {},
});

export default LinkButton;
