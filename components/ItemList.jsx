import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';

const ItemList = (props) => {

    const deleteItem = (id) => {
        props.onDeleteItem(id);
    }

  return (
    <View style={styles.listContainer}>
        <FlatList data={props.value} renderItem={itemData => {
          return ( <ListItem value={itemData.item.text} onDelete={deleteItem} id={itemData.item.id} />)
        }}
        keyExtractor={(item,index)=> {return item.id}}>
        </FlatList>
      </View>
  )
}

export default ItemList

const styles = StyleSheet.create({
  listContainer: {
    flex: 5,
    paddingTop: 16
  },
})