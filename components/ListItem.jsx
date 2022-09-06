import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ListItem = (props) => {

  return (
    <View style={styles.listItems}>
        <Pressable android_ripple={{color: '#001224'}} onPress={props.onDelete.bind(this, props.id)} style={({pressed}) => pressed && styles.pressedItem}>
            <Text style={styles.listItem}>{props.value}</Text>
        </Pressable>
    </View>
  
  )
}

export default ListItem

const styles = StyleSheet.create({
  listItems:{
    backgroundColor: 'indigo',
    borderRadius: 10,
    marginVertical:6
  },
  listItem:{
    color:'white',
    fontSize:18,
    padding:10,
  },
  pressedItem: {
    opacity: 0.5
  }
})