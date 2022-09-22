import {
  ADDING_FAILED,
  ADDING_SUCCESS,
  ADDING_TASK
} from './types';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';



// var data_sended = {title:title,completed:complete}
export const addTask = ({ title, completed}) => ({
  type: ADDING_TASK,
  payload: { title, completed},
  meta: {
    offline: {
      // the network action to execute:
      effect: { url: 'http://lab.amnir.mr:3003/test_to_do_list/create', method: 'POST', json:{_post_data_:{ title, completed}}, },
      // action to dispatch when effect succeeds:
      commit: { type: ADDING_SUCCESS, meta: { title, completed} },
      // action to dispatch if network action fails permanently:
      rollback: { type: ADDING_FAILED, meta: { title, completed} }
    }
  }
});
// const handleResponse = (dispatch, data ) => {
//   console.log('data',data)
//   if (data) {
//     dispatch({ type: ADDING_SUCCESS })
//   }else{
//     dispatch({ type: ADDING_FAILED, error: data.message })
//   }
// }

// export const addTask = ({ title, completed}) => {
//   const complete = completed ? 1 : 0;
//   return (dispatch) => {
//     dispatch({ type: ADDING_TASK });

//     //Get Token from local storage
//     // AsyncStorage.getItem('app_token')
//       // .then(token => {
//         console.log('data sended',{completed:complete,title})
        
//         const url = 'http://lab.amnir.mr:3003/test_to_do_list/create';
//         // const config = {
          
//         // };
//         var data_sended = {title:title,completed:complete}

//         axios.post(url,{_post_data_:data_sended})
//          .then(resp => handleResponse(dispatch,resp.data))
//           // .then(resp => console.log('data',resp.data))
//           .catch(err => console.log('some thing',err)
//           );

//       // });
//   }
// }
