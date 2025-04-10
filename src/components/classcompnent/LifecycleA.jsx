import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class LifecycleA extends Component {
    constructor(props){
        super()
        this.state={
            msg:"naveen"
        }
        console.log("this is constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("props--->",props)
        console.log("state--->",state)
        if(props != state){
            return {msg:"Mnavennn"}
        }
    }
    componentDidMount(){
        //this metohod called only single time 
        //mostly using when api calls
        console.log("componentDidmount is render")  
    }
  render() {
    console.log("this is render")
    return (
      <View>
         <Text>Hii {this.state.msg}</Text>
      </View>
    )
  }
}

export default LifecycleA