import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./images/1200px-Amazon_logo.png')}></Image>
        <Text style={styles.textLogo}>Amazon</Text>
        <Text style={styles.textTitle}>Интернет-магазин нового уровня</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  textTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
