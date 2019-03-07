import React, { Component } from 'react';
import { TextInput,Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input,Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '',loading: false };

  onButtonPress(){
      const { email, password, error } = this.state;

      this.setState({ error: '',loading: true });

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess(){
    this.setState({
        email: '',
        password: '',
        loading: false,
        error: ''
      });
  }

  onLoginFail(){
    this.setState({
      error: 'Authentication failed.',
      loading: false
    })
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry ={false}
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
      <CardSection>
        <Input
          secureTextEntry ={true}
          placeholder="password"
          label="Password"
          value={this.state.password}
          onChangeText={text => this.setState({ password: text })}
          style={{ height: 20, width: 100 }}
        />
      </CardSection>
      <Text style={style.errorTextStyle}>
  					{this.state.error}
  				</Text>
      <CardSection>
        {this.renderButton()}
      </CardSection>
     </Card>
      );
  }
}

const style = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};


export default LoginForm;
