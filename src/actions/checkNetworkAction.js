import * as NetInfo from '@react-native-community/netinfo';
import { IS_CONNECTED } from './types'


// componentDidMount() {
//     NetInfo.isConnected.fetch().then(isConnected => {
//         this.handleConnectivityChange(isConnected : isConnected ===undefined ? true : isConnected)
//     });
//     NetInfo.isConnected.addEventListener(eventName:'connectionChange',this.handleConnectivityChange)
//   };
export const checkNetwork = (isConnected) =>{
    return (dispatch)=>new Promise((resolve) => {
        dispatch({
            isConnected,
            type:IS_CONNECTED
        });
        resolve(isConnected);
    });
};

//RootNavigator
