import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const onLoginSuccess = (dispatch, user, token) => {

  // AsyncStorage.setItem('app_token',token)
    // .then(() => {
      dispatch({ type: LOGIN_SUCCESS, user })
    // });
};

const onLoginFailed = (dispatch, errorMessage) => {
  dispatch({ type: LOGIN_FAILED, error: errorMessage})
};


const handleResponse = (dispatch, data,userLogin) => {
  let success = false 
  data.map(user=>{
    if ((user.email==userLogin.email) && (user.username==userLogin.username)){
      success = true;
    }
    return 
  });
  if (!success) {
    onLoginFailed(dispatch, 'Account not Found');
  }else {
    onLoginSuccess(dispatch, userLogin, '8ZCottq+{am5WwJ98AFsr(LiQ~[~Pb')
  }
}

export const loginUser = ({ username, password }) => {
 const user = {email:username,username:password}
  return (dispatch) => {
    dispatch({ type: LOGIN_ATTEMPT });

    //Call the back-end API
    //Please do not spam/abuse it so others can use it as well.
    https://jsonplaceholder.typicode.com/users
    //https://mean-app-tutorial.herokuapp.com/users/auth
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => handleResponse(dispatch, resp.data,user))
      .catch(error => console.error(error));

  };
}
