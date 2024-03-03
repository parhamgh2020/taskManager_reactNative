import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default React.memo(Title);

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 24,
  },
});
