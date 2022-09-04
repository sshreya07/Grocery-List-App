import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Add an Item' style={styles.textInput} />
        <Button title='ADD ITEM' />
      </View>
      <View style={styles.listContainer}>
        <Text>List of Items...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 30,
    paddingHorizontal:16
  },
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
  listContainer: {
    flex: 5,
    paddingTop: 16
  }
});
