import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Button from '../../components/Button';
import colors from '../constants/colors';

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={styles.image}
          source={require('../../assets/onBoarding.jpg')}
        />
        <View style={styles.imageFooter} />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.title}>Best task management app</Text>
        <Text style={styles.subtitle}>
          Get organized by sorting out all your tasks and boost your
          productivity.
        </Text>
        <Button onPress={() => navigation.navigate('Signin')}>Log in</Button>
        <Button onPress={() => navigation.navigate('Signup')} type={'blue'}>
          Get started
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  imageFooter: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  footerContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10%',
    paddingTop: 0,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    fontSize: 15,
    color: colors.grey,
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default Onboarding;
