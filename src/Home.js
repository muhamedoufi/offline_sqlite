//Import needed libraries
import React, { Component } from 'react';
import {
  View, FlatList, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionButton from 'react-native-action-button';
import NetInfo from '@react-native-community/netinfo'
import { ListItem, Spinner } from './common';
// import { store } from './store';
import { fetchTasks } from './actions';
// import { persistStore } from 'redux-persist';
// import { LOADING_FAILED } from './actions/types';

// import 
//Create Component
class Home extends Component {

  constructor() {
    super()
   
  }

  componentDidMount() {
    
    NetInfo.fetch().then(state => {
      console.log('home ',state.isInternetReachable)
      if(state.isInternetReachable){
        this.props.fetchTasks();
      }
    });
   
  }
//
// componentWillUnmount


  _onRefreshTasks() {
    console.log('loading: ',this.props.loading)
        this.props.fetchTasks();
   
  }
  _renderListItem = ({ item }) => {
    return <ListItem title={item.title} completed={item.completed==1?true:false} />
  }
  render(){
    // if (this.props.loading) {
    //   return <Spinner />
    // }
   
      // if(!this.state.rehydrated){
      //   return <Spinner />
      // }
  
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.tasks}
          renderItem={this._renderListItem}
          keyExtractor={item => item.id }
          refreshControl={
            <RefreshControl
              refreshing={this.props.loading}
              onRefresh={this._onRefreshTasks.bind(this)}
            />
          }
        />
         <ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => this.props.navigation.navigate('AddTask')}>
          {/* <ActionButton.Item buttonColor='#9b59b6' title="Add" >
            <Text>+</Text>
          </ActionButton.Item> */}
        </ActionButton>
      </View>
    );
  }
}

const mapStateToProps = (state,network) => {
  const { isConnected } = network;
  return {
    isConnected,
    error: state.taskList.error,
    loading: state.taskList.loading,
    tasks: state.taskList.tasks,
    isNetworkBannerVisible : state.taskList.isNetworkBannerVisible
  }

}

export default connect(mapStateToProps, { fetchTasks })(Home);
