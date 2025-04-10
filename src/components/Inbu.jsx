import React, { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';

const Inbu = () =>{

    const [name,setName] = useState('');
   

    const handleSubmit = () => {
        Alert.alert(`Hello ${name}`);
        console.log("name",name)
    }
    return(
        <View>
             <TextInput 
                placeholder='enter the text here...'
                value={name}
                onChangeText={setName}
            />

            <Button title='click' onPress={handleSubmit}/>
        </View>
    )
}
export default Inbu;