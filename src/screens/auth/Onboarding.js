import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Button from '../../components/Button';
import colors from '../../constants/colors';

const Onboarding = ({navigation}) => {
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
        <Text style={styles.title}>Top Task Management App</Text>
        <Text style={styles.subtitle}>
          Enhance your productivity by organizing and sorting through all your
          tasks.
        </Text>
        <Button onPress={() => navigation.navigate('SignIn')}>Log in</Button>
        <Button onPress={() => navigation.navigate('SignUp')} type={'blue'}>
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
    backgroundColor: colors.white,
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
