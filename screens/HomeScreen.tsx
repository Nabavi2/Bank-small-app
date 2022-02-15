import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { RootStackScreenProps } from '../types';
import { Box, Card, HStack, VStack, Text, View } from 'native-base';
import CardComponent from '../components/CardComponent';
import Colors from '../constants/Colors'

export default function HomeScreen() {
  return (
    <View flex={1} backgroundColor={Colors.black}>
      <View alignItems="center" justifyContent="center" flex="1">
        <View style={styles.icomContainer}>
          <View style={styles.outGoing}>
            <VStack>
              <Box _text={{ color: Colors.white, fontSize: 30, fontWeight: 'bold' }}>
                75%
              </Box>
              <Box _text={{ color: Colors.white, fontSize: 16, }}>
                Review
              </Box>
            </VStack>
          </View>
        </View>
      </View>
      <HStack justifyContent="flex-end" marginBottom={150}>
        <View style={{ alignItems: 'center', justifyContent: 'center', width: 20, height: 30, borderRadius: 2, }}>
          <Entypo name="dots-three-vertical" size={24} color="#FFF" />
        </View>
      </HStack>
      <HStack style={{ width: 300, alignSelf: 'center', marginBottom: 150, borderRadius: 10, backgroundColor: Colors.primary, height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Box _text={{ color: Colors.white, alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }} style={{ backgroundColor: Colors.secondary, height: 40, width: 125, borderRadius: 8, marginRight: 25, justifyContent: 'center' }}>
          incomings
        </Box>
        <View >

        </View>
        <Box _text={{ color: Colors.white, width: 130, }} >
          Outgoings
        </Box>
      </HStack>
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
  icomContainer: {
    borderWidth: 7,
    borderColor: Colors.secondary,
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: Colors.black,
  },
  outGoing: {
    borderWidth: 7,
    borderColor: Colors.primary,
    height: 160,
    width: 160,
    borderRadius: 80,
    borderTopColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
