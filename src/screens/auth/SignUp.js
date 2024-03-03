import {StyleSheet, Text, SafeAreaView, View, Linking} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import {
  TERMS_CONDITIONS_LINK,
  PRIVACY_POLICY_LINK,
} from '../../constants/links';

const SignUp = () => {
  const [agreed, setAgreed] = useState(false);
  const onCheckboxPress = () => {
    setAgreed(value => !value);
  };
  //
  const onLinkPress = url => {
    Linking.openURL(url);
  };
  //
  return (
    <SafeAreaView style={styles.container}>
      <Title>Sign up</Title>
      <View style={styles.inputContainer}>
        <Input placeholder="First Name"/>
        <Input placeholder="Last Name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Confirm Password" secureTextEntry />
      </View>
      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={onCheckboxPress} />

        <Text style={styles.agreeText}>
          I agree to
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
            {' '}
            Terms and Conditions
          </Text>{' '}
          and
          <Text
            style={styles.link}
            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
            {' '}
            Privacy Policy
          </Text>
        </Text>
      </View>
      <Button style={styles.button} type={'blue'}>
        Sign up
      </Button>
    </SafeAreaView>
  );
};

export default SignUp;

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
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  agreeText: {
    color: colors.grey,
    fontSize: 12,
    marginLeft: 8,
    paddingVertical: 2,
  },
  link: {
    textDecorationLine: 'underline',
  },
});
