
import { Button, StyleSheet, Text, View,TextInput} from 'react-native';


export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.design}>
        <TextInput style = {styles.box} placeholder = 'Put your goals..'/>
        <Button title='Add goals'/>
      </View>
      <View>
        <Text>Your goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  },
  design:{
    flexDirection: 'row',
    justifyContent:'space-between',
    width: '80%',
    padding: 20
  },
  box:{
    borderWidth: 2,
    borderColor: 'maroon',
    padding: 6
  }
});
