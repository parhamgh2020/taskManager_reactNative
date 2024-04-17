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
      console.log('updating...')
      state.data = action.payload;
    },
    updateTasks: async state => {
      try {
        const res = await requestHttp('/task/list', 'get', {}, {})
        console.log("🚀 ~ res:", res)
        console.log("🚀 ~ res:", res.data)
        state.data = res.data;
      } catch (err) {
          console.log("🚀 ~ err:", err)
      }
    },
  },
});

export const {setTasks, updateTasks} = tasksSlice.actions;

export default tasksSlice.reducer;
