import React from 'react';
import {TextInput} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../constants/colors';

const Input = ({...props}) => {
  return (
    <TextInput
      placeholderTextColor={colors.midGrey}
      style={styles.input}
      {...props}
    />
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 10,
    color: colors.black,
    marginVertical: 12,
    fontSize: 15,
  },
});
