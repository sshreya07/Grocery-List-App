import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ListItem = (props) => {

  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItems}>
            <Text style={styles.listItem}>{props.value}</Text>
        </View>
    </Pressable>
  
  )
}

export default ListItem

const styles = StyleSheet.create({
  listItems:{
    backgroundColor: 'indigo',
    borderRadius: 10,
    padding:10,
    marginVertical:6
  },
  listItem:{
    color:'white',
    fontSize:18
  }
})