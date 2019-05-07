import React from 'react';
import { StyleSheet, Text,
   View, TouchableOpacity,
    Image, Animated } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      uri: require("./assets/dice_one.png"),
      animateValue: new Animated.Value(0)
    }
    this.getRandomNumber = this.getRandomNumber.bind(this);
    this.buttonPressed = this.buttonPressed.bind(this);
    this.setAnimation = this.setAnimation.bind(this);
  }

  /* componentWillMount() {
    this.animateValue = new Animated.Value(0);
  } */

  componentDidMount(){
   this.setAnimation();
  }

  setAnimation = () =>{
    Animated.timing(this.state.animateValue,{
      toValue: 1,
      duration: 3000
    }).start()
  }
  getRandomNumber = () => {
    return Math.floor((Math.random() *  6)) + 1
  }
  buttonPressed = async () => {
    let number = this.getRandomNumber();
    switch(number) {
      case 1:
       await this.setState({
          uri: require("./assets/dice_one.png"),
          animateValue:new Animated.Value(0)
        })
      break
      case 2:
      await this.setState({
          uri: require("./assets/dice_two.png"),
          animateValue:new Animated.Value(0)
        })
      break
      case 3:
      await this.setState({
        uri: require("./assets/dice_three.png"),
        animateValue:new Animated.Value(0)
      })
      break
      case 4:
      await this.setState({
        uri: require("./assets/dice_four.png"),
        animateValue:new Animated.Value(0)
      })
      break
      case 5:
      await this.setState({
        uri: require("./assets/dice_five.png"),
        animateValue:new Animated.Value(0)
      })
      break
      case 6:
      await this.setState({
        uri: require("./assets/dice_six.png"),
        animateValue:new Animated.Value(0)
      });
      break
    }
    await this.setAnimation();
  }


  render() {
    const interpolateRotation = this.state.animateValue.interpolate({
      inputRange:[0,1],
      outputRange:["0deg", "360deg"]
    })
    const animateStyle = {
      transform:[
        {rotate: interpolateRotation}
      ]
    }
    return (
      <View style={styles.container}>
    
      <Animated.Image 
      style={animateStyle}
      source={this.state.uri}/>
     
      <TouchableOpacity onPress={ () => this.buttonPressed()}>
        <Text style={styles.buttonStyle}>Click to Roll</Text>
      </TouchableOpacity> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23abab',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    borderColor: "#fff",
    borderRadius: 5,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10
  }
});
