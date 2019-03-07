//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


//create a component.
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    ShadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    height: 60,
    elevation: 2
  },
  textStyle: {
    fontSize: 20
  }
};
export { Header };


//Make the created component available to the application.
