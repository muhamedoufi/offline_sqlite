import {
  LOADING_FAILED,
  LOADING_SUCCESS,
  LOADING_TASKS
} from './types';

import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { storeEngine } from '../store';




const handleResponse = (dispatch, data ) => {
  
  if (data) {
    // storeEngine.getAllKeys().then((lon)=>console.log('keys :',lon))
    // storeEngine.getItem('persist:root').then(data =>console.log('dfkkdfjdkfjdkfjdkfjdkfjdkf',JSON.parse(data).taskList))

    dispatch({ type: LOADING_SUCCESS, tasks: data })

  }else{
   
    dispatch({ type: LOADING_FAILED, error: 'Error, No thing Found' })
  }
}

export const fetchTasks = () => {
 
    return (dispatch) => {
      // AsyncStorage.getAllKeys().then(key=>console.log(key))
      storeEngine.getItem('persist:root').then((task) =>{
        console.log('task',JSON.parse(JSON.parse(task).taskList).tasks)
        const tasksList = JSON.parse(JSON.parse(task).taskList).tasks
        console.log('taskslist:',tasksList)
        dispatch({ type: LOADING_TASKS, tasks:tasksList});

      })
      // dispatch({ type: LOADING_TASKS});
      //Get Token from local storage
      // AsyncStorage.getItem('app_token')
        // .then(token => {
          //Call the back-end api
          // const url = 'https://jsonplaceholder.typicode.com/todos';
          const url ='http://lab.amnir.mr:3003/test_to_do_list/get_all'
          // const config = {
          //   headers: { 'Authorization': `Bearer ${token}` }
          // };
  
          axios.get(url)
            .then(resp => handleResponse(dispatch, resp.data))
            .catch(error => console.log('yes',error));
  
        // });
    }

  
   
  }
    
   
    
      

