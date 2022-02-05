import { StyleSheet, TouchableOpacity } from 'react-native';


import { RootStackScreenProps } from '../types';
import { Card, HStack, VStack, Text, View } from 'native-base';
import CardComponent from '../components/CardComponent';


export default function HomeScreen() {
  return (

    <CardComponent />





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
