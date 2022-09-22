import { networkSaga  } from "react-native-offline";

import { fork, all } from "redux-saga/effects";

export default function* rootSaga(){
    yield all([
      fork(networkSaga, { pingInterval: 20000 }),
    ]);
  }