import {StyleSheet, SafeAreaView, View} from 'react-native';
import React, {useContext, useState} from 'react';
//
import Input from '../../components/Input';
import Button from '../../components/Button';
import Title from '../../components/Title';
//
import {Context as AuthContext} from '../../context/AuthContext';

const SignIn = () => {
  const [values, setValues] = useState({});
  const {signIn} = useContext(AuthContext);

  const onChangeText = (val, key) => {
    setValues(vals => ({
      ...vals,
      [key]: val,
    }));
  };

  const onSubmit = () => {
    signIn(values);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Title>Sign in</Title>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Username"
          // keyboardType="email-address"
          onChangeText={val => onChangeText(val, 'username')}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={val => onChangeText(val, 'password')}
        />
      </View>
      <Button style={styles.button} onPress={onSubmit}>Sign in</Button>
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
