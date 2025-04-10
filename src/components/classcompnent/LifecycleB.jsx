import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      snapshotValue: null,
    };
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    //same as the mounting phase like change the state using  the props
    console.log('getDerivedStateFromProps');
    // No state change here, just logging
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    //to avoid rerender's when state and props change 
    //returns boolean values
    console.log('shouldComponentUpdate');
    // Let all updates proceed
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    // Capture a value before the DOM updates
    return `Previous count was ${prevState.count}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    //snap the previous dom value
    console.log('componentDidUpdate');
    console.log('Snapshot:', snapshot);
    // Save snapshot value to state (not common, just for demo)
    if (snapshot !== this.state.snapshotValue) {
      this.setState({ snapshotValue: snapshot });
    }
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    console.log('render');
    return (
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Count: {this.state.count}</Text>
        <Button title="Increment" onPress={this.increment} />
        {this.state.snapshotValue && (
          <Text style={{ marginTop: 10 }}>
            Last snapshot: {this.state.snapshotValue}
          </Text>
        )}
      </View>
    );
  }
}

export default LifecycleB;
