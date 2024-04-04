import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../../components/Header';
import PlusIcon from '../../components/PlusIcon';
import Title from '../../components/Title';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Home'} />
      <ScrollView>
        <Title type={'thin'}>Daily Tasks:</Title>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
