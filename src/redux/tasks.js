import {createSlice} from '@reduxjs/toolkit';
import requestHttp from '../http/httpRequest';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: null,
    toUpdate: null,
  },
  reducers: {
    setTasks: (state, action) => {
      console.log('updating...');
      state.data = action.payload;
    },
  },
});

export const {setTasks} = tasksSlice.actions;
export default tasksSlice.reducer;

// Thunk action creator for updating tasks asynchronously
export const fetchTasksAsync = () => async dispatch => {
  try {
    console.log('fetch tasks...');
    const res = await requestHttp('/task/list', 'get', {}, {});
    dispatch(setTasks(res.data)); // Dispatch the action to update the state
  } catch (error) {
    console.log('🚀 ~ tasksSlice error:', error);
  }
};

export const updateTasksAsync = () => async dispatch => {
  try {
    console.log('updating tasks...');
    const res = await requestHttp('/task/update', 'patch', {}, {});
    dispatch(setTasks(res.data)); // Dispatch the action to update the state
  } catch (error) {
    console.log('🚀 ~ tasksSlice error:', error);
  }
};
