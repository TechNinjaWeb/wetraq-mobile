import React, { Component } from 'react';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

export default class DashboardPage extends Component<{}> {
  constructor(props)
  {
    super(props);
    this.state = {...props};
  }

  componentWillMount(){
    console.log("Dashboard", this)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text 
          style={{marginTop: 20, 
          textAlign: 'center'}}>
          Dashboard
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
  },
  logo: {
    marginBottom: 30,
  },
});
