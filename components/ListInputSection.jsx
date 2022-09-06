import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native';

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
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/empty-cart.webp')}></Image>
            <TextInput placeholder='Add an Item' style={styles.textInput} onChangeText={getItem} value={textInput}/>
          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button title='Cancel' onPress={props.showModal} color="#f31245"/>
            </View>
            <View style={styles.buttons}>
              <Button title='ADD ITEM' onPress={handlePress} color="#204567"/>
            </View>
          </View>
        </View>
      </Modal>
  )
}

export default ListInputSection

const styles = StyleSheet.create({
    inputContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#311b60'
      },
      textInput:{
        width:'80%',
        padding: 16,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        margin: 16,
        color:'#120438',
        borderRadius: 6
      },
      buttonContainer: {
        flexDirection: 'row'
      },
      buttons:{
        marginHorizontal: 16,
        width: '30%'
      }
})