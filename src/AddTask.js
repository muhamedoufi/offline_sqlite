// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { Component } from 'react';
import { Text, StyleSheet, Switch, View } from 'react-native';
import { connect } from 'react-redux';

import { addTask } from './actions';
import { Button, Card, CardItem, Input, Spinner } from './common';

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 17,
    alignSelf: 'center',
    color: 'red'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems : 'center',
    height: 40
  },
  label: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
});


class AddTask extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      completed: 0,
      complete :false
    };
  }


  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.saved) {
      this.props.navigation.goBack();
    }
  }

  _onSaveTask() {
    const { title, completed } = this.state;
    // const complete = completed ? 1 : 0;
    // AsyncStorage.getItem('app_token')
    //   .then(token => {
    //     console.log(token)
        
    //     const url = 'http://lab.amnir.mr:3003/test_to_do_list/create';
    //     // const config = {
    //     //   headers: { 'Authorization': `Bearer ${token}` }
    //     // };

    //     axios.post('http://lab.amnir.mr:3003/test_to_do_list/create',{title, completed:complte})
    //       .then(resp => console.log(resp.data))
    //       .catch(err => console.log('ERROR',err)
    //       );

    //   });
    this.props.addTask({ title, completed });

  }

  _renderButton() {
    // if (this.props.loading) {
    //   return <Spinner />;
    // }
    return (
      <Button onPress={this._onSaveTask.bind(this)}>Save Task</Button>
    );
  }

  render(){
    return (
      <Card>

        <CardItem>
          <Input
            label='Name'
            placeholder='Enter Task Name'
            secureTextEntry={false}
            onChangeText={(title) => this.setState({ title  }) }
          />
        </CardItem>

        <CardItem>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Task Status</Text>
            <Switch
              onValueChange={(complete) => 
               
                this.setState({ complete,completed:complete?1:0 })
              }
              value={this.state.complete}
            />
          </View>
        </CardItem>

        <CardItem>
            { this._renderButton() }
        </CardItem>

        {/* <Text style={styles.errorStyle}>{this.props.error}</Text> */}

      </Card>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    addTask: ({ title, completed }) => {
      dispatch(addTask({ title, completed }));
    },
  };
};

const mapStateToProps = state => {
  return {
    error: state.saveTask.error,
    loading: state.saveTask.loading,
    saved: state.saveTask.saved
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddTask);