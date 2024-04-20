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
  const [taskValue, setTaskValue] = useState('');
  const [category, setCategory] = useState(null);
  const [deadline, setDeadline] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressAddTaskButton = async () => {
    if (!taskValue || !category) {
      Alert.alert('Title and type of task required. !!');
      return;
    }

    const today = new Date();
    const todayFormatted = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    const deadlineFormatted = `${deadline.getFullYear()}-${
      deadline.getMonth() + 1
    }-${deadline.getDate()}`;

    if (deadline > today) {
      Alert.alert('Please enter a future date !!');
      return;
    }

    setIsLoading(true);
    const data = {
      category,
      taskTitle: taskValue,
      deadline: deadlineFormatted,
    };

    try {
      const res = await httpRequest('/task/create', 'post', {}, data);
      navigation.navigate('Tasks');
    } catch (err) {
      Alert.alert('Something went wrong with saving the task');
    } finally {
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
        <Text style={styles.label}>Title</Text>
        <Input
          outlined
          value={taskValue}
          onChangeText={setTaskValue}
          placeholder={'type here...'}
        />
        <Text style={styles.label}>Type</Text>
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
          <Button style={styles.button} onPress={onPressAddTaskButton}>
            Add the task
          </Button>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
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
