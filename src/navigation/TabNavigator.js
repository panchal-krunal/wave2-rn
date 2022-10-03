import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F8f8f8',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {flex: 1, alignItems: 'center'},
  tabLabelFocused: {color: '#673ab7'},
  tabLabelNormal: {color: '#222'},
});

function TabBar({state, descriptors, navigation}) {

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const buttonStyle = isFocused
          ? styles.tabLabelFocused
          : styles.tabLabelNormal;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            <Text style={buttonStyle}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar;
