import {configureStore} from '@reduxjs/toolkit';
import userSlice from './user';
import tasksSlice from './tasks';

export default configureStore({
  reducer: {
    user: userSlice,
    tasks: tasksSlice,
  },
});
