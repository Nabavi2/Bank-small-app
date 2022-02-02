import { StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
    </View>
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
