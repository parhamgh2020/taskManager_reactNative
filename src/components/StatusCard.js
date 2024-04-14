import colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Pressable} from 'react-native';
import { StyleSheet } from 'react-native';

const StatusCard = ({label, count, type}) => {
  const navigation = useNavigation();
  const styles = getStyles(type);

  const onPress = () => {
    navigation.navigate('Tasks');
  };

  return (
    <Pressable style={styles.container} onPress={onPress} hitSlop={8}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.count}>{count}</Text>
    </Pressable>
  );
};

export default React.memo(StatusCard);


const getStyles = type =>
  StyleSheet.create({
    container: {
      backgroundColor: type === 'error' ? colors.lightRed : colors.lightGrey,
      borderRadius: 15,
      padding: 12,
      marginRight: 8,
      width: '30%',
    },
    label: {
      marginBottom: 13,
      fontSize: 10,
      color: type === 'error' ? colors.red : colors.blue,
    },
    count: {
      fontSize: 28,
      fontWeight: '500',
      color: type === 'error' ? colors.red : colors.blue,
      marginBottom: 8,
    },
  });
