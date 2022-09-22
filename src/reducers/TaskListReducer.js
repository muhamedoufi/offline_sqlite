import {
  LOADING_FAILED,
  LOADING_SUCCESS,
  LOADING_TASKS
} from '../actions/types';
import NetInfo from '@react-native-community/netinfo';

const INITIAL_STATE = { loading: false, error: '',  isNetworkBannerVisible: false, tasks: [] }

export default(state=[], action) => {
  switch(action.type) {
    // case 'persist/REHYDRATE': 
    //   console.log(action.payload.taskList) 
   
    case LOADING_TASKS:
      NetInfo.fetch().then(status => {
          return { loading: status.isInternetReachable? true: false ,tasks:action.tasks}
        })
    case LOADING_SUCCESS:
      return { ...state, loading: false, tasks: action.tasks}
    case LOADING_FAILED:
      return { ...state, loading: false, error: action.error }
    default:
      return state;
  }
}
