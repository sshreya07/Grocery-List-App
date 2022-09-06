import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import ListInputSection from './components/ListInputSection';
import ItemList from './components/ItemList';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const[modalVisible, setModalVisible] = useState(false);
  const [itemList, setItemList] = useState([]);

  const addItem = () => {
    setModalVisible(true);
  }

  const cancelModal = () => {
    setModalVisible(false);
  }

  const handlePress = (textInput) => {
    setItemList(currentItemList => 
      [...currentItemList,
      {text: textInput, id: Math.random().toString()}]
    )
    cancelModal();
  }

  const onDeleteHandler = (id) => {
    setItemList(currentItemList => {
      return currentItemList.filter(item => item.id !== id);
    })
  }

  return (
    <>
      <StatusBar style='auto'></StatusBar>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Button title='Add New Item' color={'indigo'} onPress={addItem} />
        </View>
        {modalVisible && <ListInputSection onAddItem={handlePress} showModal={cancelModal}/>}
        <ItemList value={itemList} onDeleteItem={onDeleteHandler}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: '15%',
    paddingHorizontal:16
  },
  inputContainer:{
    borderBottomColor:'#ccc',
    borderBottomWidth: 1
  }
});
