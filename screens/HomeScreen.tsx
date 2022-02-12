import { StyleSheet, TouchableOpacity } from 'react-native';


import { RootStackScreenProps } from '../types';
import { Box, Card, HStack, VStack, Text, View } from 'native-base';
import CardComponent from '../components/CardComponent';


export default function HomeScreen() {
  return (
    <Box _text={{ alignSelf: 'center', fontSize: 'lg', justifyContent: 'center', marginTop: 100 }}>This is Home screen</Box>
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
