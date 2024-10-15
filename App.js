import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';
import { useState } from 'react';

//https://docs.expo.dev/versions/latest/sdk/speech/?redirected

export default function App() {

  const [text, setText] = useState('');

  const speak = () => {
    const thingToSay = text; //tämä määrittelee teksin, joka puhutaan. 
    Speech.speak(thingToSay);//tämä kutsuu Expo Speech -moduulin speak-metodia, joka muuttaa thingToSay-muuttujan sisällön puheeksi.
  };

  return (
    <View style={styles.container}>
       <TextInput 
        placeholder='Write text' 
        onChangeText={text => setText(text)}
        value={text} 
        style={styles.input}
      /> 
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    height: 50, 
    borderColor: 'black', 
    borderWidth: 1, 
    marginBottom: 20, 
    paddingHorizontal: 10, 
    width: '70%', 
  },
});