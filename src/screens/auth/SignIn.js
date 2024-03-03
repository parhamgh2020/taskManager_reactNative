import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Sign in</Title>
      <View style={styles.inputContainer}>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Confirm Password" secureTextEntry />
      </View>
      <Button style={styles.button}>Sign in</Button>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingHorizontal: 25,
    justifyContent: 'space-around',
  },
  inputContainer: {
    width: '100%',
    paddingBottom: 25,
  },
});
