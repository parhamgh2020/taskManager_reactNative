import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../../components/Header';
import PlusIcon from '../../components/PlusIcon';
import Title from '../../components/Title';
import StatusCard from '../../components/StatusCard';
import moment from 'moment';
import colors from '../../constants/colors';

const Home = ({navigation}) => {
  const tasks = useSelector(state => state.tasks.data);
  const user = useSelector(state => state.user.data);
  const toUpdate = useSelector(state => state.tasks.toUpdate);
  const [counts, setCounts] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (tasks?.length) {
      const highPriority = tasks?.filter(
        task => task?.category === 'urgent' || task?.category === 'important',
      );
      const today = moment(new Date()).format('YYYY-MM-DD');
      const dueDeadline = tasks?.filter(task => {
        const deadline = task?.deadline
        const deadlineFormatted = moment(deadline, 'YYYY-MM-DD')
        return moment(deadlineFormatted).isBefore(today);
      });
      const quickWin = tasks?.filter(task => task?.category === 'quick_task');

      setCounts({
        highPriority: highPriority?.length,
        dueDeadline: dueDeadline?.length,
        quickWin: quickWin?.length,
      });
    }
  }, [tasks]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />

      <ScrollView>
        <Title type="thin">Daily Tasks:</Title>
        <View style={styles.row}>
          <StatusCard label="High Priority" count={counts?.highPriority} />
          <StatusCard
            label="Due Deadline"
            type="error"
            count={counts?.dueDeadline}
          />
          <StatusCard label="Quick Win" count={counts?.quickWin} />
        </View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.title}>Review My Tasks</Text>
          <Text style={styles.subtitle}>
            Explore all tasks and easily filter them based on the categories you've chosen during their creation
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <PlusIcon />
    </SafeAreaView>
  );
};

export default React.memo(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
  },
  box: {
    backgroundColor: colors.lightGrey,
    borderRadius: 15,
    padding: 22,
    marginHorizontal: 24,
    marginVertical: 72,
  },
  title: {
    color: colors.purple,
    fontSize: 16,
  },
  subtitle: {
    color: 'rgba(64,53,114,0.5)',
    fontSize: 12,
    marginTop: 8,
  },
});
