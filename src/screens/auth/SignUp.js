import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Linking,
  ScrollView,
  Alert,
} from 'react-native';
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
import {Context as AuthContext} from '../../context/AuthContext';
import {useContext} from 'react';

const SignUp = () => {
  //
  const {signUp} = useContext(AuthContext);
  //
  const [agreed, setAgreed] = useState(false);
  const [values, setValue] = useState({});
  //
  const onCheckboxPress = () => {
    setAgreed(val => !val);
  };
  //
  const onLinkPress = url => {
    Linking.openURL(url);
  };
  //
  const onChangeText = (value, key) => {
    setValue(vals => ({
      ...vals,
      [key]: value,
    }));
  };
  //
  const onSubmit = () => {
    if (!values.first_name || !values.last_name) {
      Alert.alert('Please enter first name and last name');
      return;
    }
    if (!values.password || !values.confirm_password) {
      Alert.alert('Please enter password and confirm password');
      return;
    }
    if (values.password !== values.confirm_password) {
      Alert.alert('Passwords do not match');
      return;
    }
    if (!agreed) {
      Alert.alert('You should agree to the terms');
      return;
    }
    signUp(values);
  };
  //
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Sign up</Title>
        <View style={styles.inputContainer}>
          <Input
            placeholder="Username"
            onChangeText={val => onChangeText(val, 'username')}
          />
          <Input
            placeholder="First Name"
            onChangeText={val => onChangeText(val, 'first_name')}
          />
          <Input
            placeholder="Last Name"
            onChangeText={val => onChangeText(val, 'last_name')}
          />
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
          <Input
            placeholder="Confirm Password"
            secureTextEntry
            onChangeText={val => onChangeText(val, 'confirm_password')}
          />
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
        <Button style={styles.button} type={'blue'} onPress={onSubmit}>
          Submit
        </Button>
      </ScrollView>
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
