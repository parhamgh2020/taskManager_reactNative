import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
console.log('🚀 ~ useSelector:', useSelector);
import {FlatList, View, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
//
import Header from '../../components/Header';
import PlusIcon from '../../components/PlusIcon';
import colors from '../../constants/colors';
import Checkbox from '../../components/Checkbox';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import {categories} from '../../constants/categories';
// import tasks from '../../constants/tasks';
import {setToUpdate} from '../../redux/tasks';
import {fetchTasksAsync, updateTaskAsync} from '../../redux/tasks';

const Tasks = () => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [category, setCategory] = useState('all');
  const tasks = useSelector(state => state.tasks.data);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchTasksAsync());
    }
  }, [isFocused]);

  useEffect(() => {
    if (category && category !== 'all') {
      const filtered = tasks?.filter(task => task?.category === category);
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [category, tasks]);

  const onTaskUpdate = item => {
    const updatedItem = {...item, checked: !item.checked};
    dispatch(updateTaskAsync(updatedItem));
  };

  const renderTask = ({item}) => {
    return (
      <View style={styles.row}>
        <Checkbox checked={item.checked} onPress={() => onTaskUpdate(item)} />
        <Text style={[styles.taskText, item?.checked ? styles.checked : {}]}>
          {item.taskTitle}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Tasks'} />
      <FlatList
        ListHeaderComponent={
          <View style={{marginBottom: 24}}>
            <Title type="thin">To Do Tasks</Title>
            <Categories
              categories={[{label: 'All', value: 'all'}, ...categories]}
              selectedCategory={category}
              onCategoryPress={setCategory}
            />
          </View>
        }
        data={filteredTasks}
        renderItem={renderTask}
        keyExtractor={item => String(item?.id)}
      />
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Tasks);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginVertical: 8,
  },
  taskText: {
    color: colors.black,
    marginLeft: 8,
    fontSize: 16,
  },
  checked: {
    textDecorationLine: 'line-through',
  },
});
