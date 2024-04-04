import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Title from '../../components/Title';
import Input from '../../components/Input';
import colors from '../../constants/colors';
import Categories from '../../components/Categories';
import {categories} from '../../constants/categories';
import DateInput from '../../components/DateInput';

const AddTask = () => {
  const [category, setCategory] = useState();
  const [deadline, setDeadline] = useState(new Date());

  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backIcon} onPress={onPressBack}>
        <MaterialIcons name={'arrow-back-ios-new'} size={30} color={'black'} />
      </Pressable>
      <Title type={'thin'}>Add new task</Title>
      <Text style={styles.label}>describe the task</Text>
      <Input outlined placeholder={'type here...'} />
      <Text style={styles.label}>type</Text>
      <Categories
        categories={categories}
        selectedCategory={category}
        onCategoryPress={setCategory}
      />
      <Text style={styles.label}>Deadline</Text>
      <DateInput value={deadline} onChange={setDeadline} />
    </SafeAreaView>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {},
  backIcon: {
    marginLeft: 20,
    marginTop: 25,
  },
  label: {
    fontSize: 14,
    color: colors.black,
    marginHorizontal: 24,
    fontWeight: '500',
    marginTop: 12,
  },
  button: {
    margin: 24,
  },
});
