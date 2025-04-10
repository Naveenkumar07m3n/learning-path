import React from "react";
import { Text, View, Dimensions } from "react-native";

class LifecycleC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('window').width,
    };
  }

  componentDidMount() {
    this.dimListener = Dimensions.addEventListener('change', this.handleResize);
  }

  handleResize = ({ window }) => {
    console.log('Window resized:', window.width);
    this.setState({ screenWidth: window.width });
  };

  componentWillUnmount() {
    this.dimListener?.remove(); // Cleanup listener
  }

  render() {
    return (
      <View style={{ padding: 20 }}>
        <Text>Listening to screen size changes...</Text>
        <Text>Current width: {this.state.screenWidth}</Text>
      </View>
    );
  }
}

export default LifecycleC;
