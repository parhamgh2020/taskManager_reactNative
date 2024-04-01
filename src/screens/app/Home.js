import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import PlusIcon from '../../components/PlusIcon';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <Header title={'Home'} />
      <ScrollView>
        <Text>Home</Text>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
