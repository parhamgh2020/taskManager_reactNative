import {createSlice} from '@reduxjs/toolkit';
import requestHttp from '../http/httpRequest';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: [],
    toUpdate: null,
  },
  reducers: {
    setTasks: (state, action) => {
      state.data = action.payload;
    },
    updateTask: (state, action) => {
      const updatedTask = action.payload;
      state.data = state.data.map(task => {
        if (task.id === updatedTask.id) {
          return {...task, ...updatedTask};
        }
        return task;
      });
    },
  },
});

export const {setTasks, updateTask} = tasksSlice.actions;
export default tasksSlice.reducer;

// Thunk action creator for updating tasks asynchronously
export const fetchTasksAsync = () => async dispatch => {
  try {
    console.log('fetching tasks...');
    const res = await requestHttp('/task/list', 'get', {}, {});
    dispatch(setTasks(res.data)); // Dispatch the action to update the state
  } catch (error) {
    console.log('🚀 ~ tasksSlice error:', error);
  }
};

export const updateTaskAsync = item => async dispatch => {
  try {
    console.log('updating task...');
    const res = await requestHttp(`/task/update/${item.id}`, 'patch', {}, item);
    dispatch(updateTask(item));
  } catch (error) {
    console.log('🚀 ~ tasksSlice error:', error);
  }
};
