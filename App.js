import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ListInputSection from './components/ListInputSection';
import ItemList from './components/ItemList';

export default function App() {

  const [itemList, setItemList] = useState([]);

  const handlePress = (textInput) => {
    setItemList(currentItemList => 
      [...currentItemList,
      {text: textInput, id: Math.random().toString()}]
    )
  }

  const onDeleteHandler = (id) => {
    setItemList(currentItemList => {
      return currentItemList.filter(item => item.id !== id);
    })
  }

  return (
    <View style={styles.container}>
      <ListInputSection onAddItem={handlePress}/>
      <ItemList value={itemList} onDeleteItem={onDeleteHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30,
    paddingHorizontal:16
  },
});
