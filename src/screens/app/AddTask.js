import {
  ActivityIndicator,
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
//
import {categories} from '../../constants/categories';
import colors from '../../constants/colors';
//
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import Input from '../../components/Input';
import DateInput from '../../components/DateInput';
import Button from '../../components/Button';
//
import httpRequest from '../../http/httpRequest';

const AddTask = () => {
  const [taskValue, setTaskValue] = useState();
  const [category, setCategory] = useState();
  const [deadline, setDeadline] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressButton = async () => {
    if (!taskValue) {
      Alert.alert('Please enter the task title !!');
      return;
    }
    const today = moment(new Date()).format('YYYY-MM-DD');
    const deadlineDate = moment(deadline).format('YYYY-MM-DD');
    if (moment(deadlineDate).isBefore(today)) {
      Alert.alert('Please enter future date !!');
    }
    try {
      setIsLoading(true);
      const data = {
        category: category,
        taskTitle: taskValue,
        deadline: deadlineDate,
        user: 1,
      };
      const res = await httpRequest('/task/create', 'post', data);
      console.log('🚀 ~ onPressButton ~ res:', res);
    } catch (err) {
      console.log('🚀 ~ onPressButton ~ err:', err);
      setIsLoading(false);
      Alert.alert('Something went wrong with saving task');
    }
    navigation.navigate('Tasks');
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backIcon} onPress={onPressBack}>
        <MaterialIcons name={'arrow-back-ios-new'} size={30} color={'black'} />
      </Pressable>
      <ScrollView>
        <Title type={'thin'}>Add new task</Title>
        <Text style={styles.label}>describe the task</Text>
        <Input
          outlined
          value={taskValue}
          onChangeText={setTaskValue}
          placeholder={'type here...'}
        />
        <Text style={styles.label}>type</Text>
        <Categories
          categories={categories}
          selectedCategory={category}
          onCategoryPress={setCategory}
        />
        <Text style={styles.label}>Deadline</Text>
        <DateInput value={deadline} onChange={setDeadline} />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Button style={styles.button} onPress={onPressButton}>
            Add the task
          </Button>
        )}
      </ScrollView>
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
    marginTop: 24,
  },
});
