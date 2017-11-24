import React, { Component } from 'react';
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Link
} from 'react-native'; 

import { LoginPage } from './LoginPage';


export default class RegisterPage extends Component<{}> {
  constructor(props)
  {
    super(props);
    this.state = {...props, username: "", password: "", confirmation: ""};
    console.log("Props", props)
  }

  componentWillMount(){
  }

  Register()
  {
    console.log("Register");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo}
          source={require('../assets/WeTraq_logo.png')}
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
        <FormLabel>Confirmation</FormLabel>
        <FormInput
          value={this.state.confirmation}
          onChangeText={(text)=>this.setState({confirmation: text || ""})}
        />
        <Button
          style={{marginTop: 50}}
          icon={{name: 'person'}}
          title='Register'
          onPress={this.Register.bind(this)}/>
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
