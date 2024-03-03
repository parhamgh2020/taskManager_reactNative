import {StyleSheet, Text, SafeAreaView, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';

const SignIn = () => {
  const [values, setValues] = useState({});

  const onChangeText = (val, key) => {
    setValues(vals => ({
      ...vals,
      [key]: val,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Sign in</Title>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={val => onChangeText(val, 'email')}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={val => onChangeText(val, 'password')}
        />
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
