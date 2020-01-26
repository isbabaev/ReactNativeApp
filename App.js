import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'react-native';
import SvgUri from 'react-native-svg-uri';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Text style={styles.textLogo}>NoName</Text>
        <Text style={styles.textTitle}>Интернет-магазин</Text>
      </View>
      <View style={styles.startButtonView}>
        <Button title='Начать'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  textLogo: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
  },
  textTitle: {
    color: '#fff',
    fontSize: 17,
  },
  startButtonView: {
    marginTop: 30
  },
  logoView: {
    marginBottom: 30
  }
});
