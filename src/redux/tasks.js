import {createSlice} from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    data: null,
    toUpdate: null,
  },
  reducers: {
    setTasks: (state, action) => {
      state.data = action.payload;
    },
    setToUpdate: state => {
      state.toUpdate = Math.random();
    },
  },
});

export const {setTasks, setToUpdate} = tasksSlice.actions;

export default tasksSlice.reducer;
