import React, {useContext} from 'react';
import colors from '../constants/colors';
import {PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK} from '../constants/links';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Linking, StyleSheet, Text, View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const CustomDrawerContent = props => {
  const {signOut} = useContext(AuthContext);
  const {navigation} = props;
  return (
    <DrawerContentScrollView>
      <Text
        style={styles.link}
        onPress={() => navigation.navigate('Tabs', {screen: 'Home'})}>
        home
      </Text>
      <Text
        style={styles.link}
        onPress={() =>
          navigation.navigate('Tabs', {
            screen: 'Tasks',
          })
        }>
        tasks
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>
        condition
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>
        terms
      </Text>
      <View style={styles.separator} />
      <Text style={[styles.link, styles.logout]} onPress={signOut}>
        logout
      </Text>
    </DrawerContentScrollView>
  );
};

export default React.memo(CustomDrawerContent);

const styles = StyleSheet.create({
  link: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 15,
    margin: 12,
    marginHorizontal: 16,
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 12,
    marginLeft: 15,
    marginRight: 25,
  },
  logout: {
    color: 'red',
  },
});
