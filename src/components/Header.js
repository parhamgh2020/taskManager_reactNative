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
    <View style={styles.container}>
      <Pressable onPress={openDrawer} hitSlop={8}>
        <Ionicons name={'menu'} size={25} color={'black'} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon} />
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 16,
    color: colors.purple,
    fontWeight: '500',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
