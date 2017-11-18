import React, { Component } from 'react';
import { Button, FormLabel, FormInput } from 'react-native-elements'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { LoginPage } from './pages/LoginPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props)
  {
    super(props);

    this.username;
    this.password;
  }

  Login()
  {
    alert("You are about to sign in with the following credentials:"+
      `\nUsername: ${this.username}\n` +
      `Password: ${this.password}`
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('./assets/WeTraq_logo.png')}
        />
        <FormLabel>Username</FormLabel>
        <FormInput
          value={this.username}
          onChangeText={(text)=>this.username = text}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          value={this.password}
          onChangeText={(text)=>this.password = text}
        />
        <Button
          raised
          icon={{name: 'cached'}}
          title='Login'
          onPress={this.Login.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginLeft: 20,
    marginRight: 20,
  },
  logo: {
    marginBottom: 30,
  },
  welcome: {
    alignSelf: 'center',
    // fontSize: 20,
    // textAlign: 'center',
    // margin: 10,
  },
});
