import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//
import colors from '../constants/colors';

const Header = ({title}) => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: colors.blue,
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  plus: {
    fontSize: 32,
    marginTop: -2,
    color: colors.white,
    fontWeight: '600',
  },
});
