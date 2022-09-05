import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';

const ListInputSection = (props) => {

  const [textInput, setTextInput] = useState('');

  const getItem = (text) => {
    setTextInput(text);
  }

  const handlePress = () => {
    props.onAddItem(textInput)
    setTextInput('');
  }

  return (
      <View style={styles.inputContainer}>
            <TextInput placeholder='Add an Item' style={styles.textInput} onChangeText={getItem} value={textInput}/>
            <Button title='ADD ITEM' onPress={handlePress}/>
        </View>
  )
}

export default ListInputSection

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 2
        
      },
      textInput:{
        width:'70%',
        paddingLeft: 10,
        padding: 6,
        borderWidth: 1,
        borderColor: '#ccc'
      },
})