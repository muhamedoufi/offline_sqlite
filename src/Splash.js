import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(42, 55, 68)',
  },
  loadingText: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 10
  },

});

class Splash extends Component {
  
  componentDidMount() {
    // AsyncStorage.getItem('app_token')
    //   .then(token => {
    //       if (token) {
    //         this._navigate('Home');
    //       }else {
    //         this._navigate('Login');
    //       }
    //   });
    this._navigate('Home');
  }

    //Added this dummy method to cause a delay just to see the splash
  _navigate(screen) {
    setTimeout(() => {
      this.props.navigation.navigate(screen);
    }, 2000 );

  }

  render(){
    return (
      <View style={styles.container}>
         <Text style={styles.loadingText}>Loading ...</Text>
        <ActivityIndicator size={'small'} />
       
      </View>
    );
  }
}

export default Splash;
