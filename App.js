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


export default class App extends Component<{}> {
  constructor(props)
  {
    super(props);
    this.state = {...props, username: "", password: ""};
  }

  componentWillMount(){
  }

  Login()
  {
    console.log("You are about to sign in with the following credentials:"+
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
          value={this.state.username}
          onChangeText={(text)=>this.setState({username: text || ""})}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          value={this.state.password}
          onChangeText={(text)=>this.setState({password: text || ""})}
        />
        <Button
          style={{marginTop: 50}}
          icon={{name: 'person'}}
          title='Login'
          onPress={this.Login.bind(this)}/>
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
