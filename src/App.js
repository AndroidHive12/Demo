import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import  LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    const config  = {
      apiKey: 'AIzaSyC74veh5IHpKM4-v3nbZdT_5ft3Y3Rmvks',
      authDomain: 'authentication-fa008.firebaseapp.com',
      databaseURL: 'https://authentication-fa008.firebaseio.com',
      projectId: 'authentication-fa008',
      storageBucket: 'authentication-fa008.appspot.com',
      messagingSenderId: '205805169571'
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ loggedIn: true });
      } else{
        this.setState({ loggedIn: false });
      }
      });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out
        </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

render() {
return (
  <View>
    <Header headerText="Authentication" />
    {this.renderContent()}
  </View>
);
}

}

export default App;
