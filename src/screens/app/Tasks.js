import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import PlusIcon from '../../components/PlusIcon';

const Tasks = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Tasks'} />
      <PlusIcon />
    </SafeAreaView>
  );
};

export default Tasks;

const styles = StyleSheet.create({});
