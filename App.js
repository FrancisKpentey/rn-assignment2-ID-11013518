import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const yourName = "Francis";
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is </Text>
      <Text style={styles.boldText}>{yourName}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#08f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  boldText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
