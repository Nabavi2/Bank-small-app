import { StyleSheet } from 'react-native';
import CardComponent from '../components/CardComponent';

import EditScreenInfo from '../components/EditScreenInfo';
import { HStack, View, VStack, Box } from 'native-base';
import { Entypo, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Text } from 'react-native';

export default function CardScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', }}>
      <VStack style={{ marginTop: 25, marginBottom: 20 }}>
        <HStack style={{ justifyContent: 'space-between', marginHorizontal: 20 }}>
          <Ionicons name="chevron-back" size={24} color="#FFF" />
          <Entypo name="dots-three-vertical" size={24} color="#FFF" />
        </HStack>
        <HStack style={{ justifyContent: 'space-between', marginTop: 30, height: 100, alignItems: 'center', marginHorizontal: 20, }}>
          <VStack>
            <Box alignItems="center" _text={{ fontSize: 25, fontWeight: 'bold', color: '#FFF' }} >
              Your Cards
            </Box>
            <Box alignItems="center" _text={{ fontSize: 12, color: '#FFF', marginLeft: 25 }}>
              You have 3 active cards
            </Box>
          </VStack>

          <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'yellow', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesome5 name="plus" size={24} color="black" />

          </View>
        </HStack>
      </VStack>


      <CardComponent />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
