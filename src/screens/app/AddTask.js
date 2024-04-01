import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const AddTask = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable style={styles.backIcon} onPress={onPressBack}>
      <MaterialIcons name={'arrow-back-ios-new'} size={30} color={'black'} />
    </Pressable>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  backIcon: {
    marginLeft: 20,
    marginTop: 25,
  },
});
