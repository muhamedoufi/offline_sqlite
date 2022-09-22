import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import TaskListReducer from './TaskListReducer';
import SaveTaskReducer from './SaveTaskReducer';
// import { reducer as networkReducer } from 'react-native-offline';

export default combineReducers({
  auth: AuthReducer,
  taskList: TaskListReducer,
  saveTask: SaveTaskReducer,
  // network:networkReducer,
});
