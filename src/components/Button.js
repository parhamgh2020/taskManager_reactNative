import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const Button = ({onPress, type, children}) => {
  return (
    <TouchableOpacity
      style={[styles.container, type === 'blue' ? styles.blueBg : {}]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);

styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 13,
    marginVertical: 8,
    width: '80%',
    alignSelf:'center'
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  blueBg: {
    backgroundColor: colors.blue,
  },
});
