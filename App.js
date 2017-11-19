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
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Overlay,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';


import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';


export default class App extends Component<{}> {
  constructor(props)
  {
    super(props);
    this.state = {...props, username: "", password: ""};
  }

  componentWillMount(){
    console.log("App.js")
  }

  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={LoginPage} title="Login" initial={true}/>
          <Scene key="register" component={RegisterPage} title="Register"/>
          <Scene key="dashboard" component={DashboardPage} title="Dashboard"/>
        </Stack>
      </Router>
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
