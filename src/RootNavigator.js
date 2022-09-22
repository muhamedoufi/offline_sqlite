/**
* Root Navigator : Zay al router keda
* We define all our routes here
*/
import React from 'react';
import Home from './Home';
import LoginForm from './LoginForm';
import Splash from './Splash';

import { NavigationContainer } from '@react-navigation/native';
import AddTask from './AddTask';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from "@react-navigation/stack";
// import { NetworkProvider } from 'react-native-offline';
const Stack = createNativeStackNavigator()
const RootNavigator = ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen 

          name='Splash' component={Splash}
          options={{
            header: ()=>false
          }}
        />
         <Stack.Screen 
          name='Login' component={LoginForm}
          />  */}
          <Stack.Screen 
          name='Home' component={Home}
          /> 
          <Stack.Screen 
          name='AddTask' component={AddTask}
          // options={{
          //   headerLeft: ()=>false
          // }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
  }

  const Root = () => (
    <NetworkProvider>
      <RootNavigator />
    </NetworkProvider>
  );
  
  export default RootNavigator;
