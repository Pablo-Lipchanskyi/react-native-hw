import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Platform, KeyboardAvoidingView } from 'react-native';

export default function App() {
  const [value, setValue] = useState("");
  const handleInput = (text) => setValue(text)
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior = {Platform.OS === "ios" ? "padding" : "height"}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        placeholder="Text"
        value={value}
        onChangeText = {handleInput}
      />
        <StatusBar style="auto" />
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
