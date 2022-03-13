import { StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { RootStackScreenProps } from '../types';
import { Box, Card, HStack, VStack, Text, View } from 'native-base';
import CardComponent from '../components/CardComponent';
import Colors from '../constants/Colors'

export default function HomeScreen() {
  return (
    <View flex={1} backgroundColor={Colors.black}>
      <HStack style={{ justifyContent: 'space-between', marginHorizontal: 20, marginTop: 30, }}>
        <Ionicons name="chevron-back" size={24} color="#FFF" />
        <Entypo name="dots-three-vertical" size={24} color="#FFF" />
      </HStack>
      <Box _text={{ fontSize: 30, color: Colors.white, fontWeight: 'bold' }} style={{ alignSelf: 'center', marginTop: 20, }}>
        General Report</Box>
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
      <HStack justifyContent="space-between" marginBottom={70}>
        <Box _text={{ fontSize: 30, color: Colors.white, marginLeft: 10, marginTop: 5, fontWeight: 'bold' }}>
          Statistics
        </Box>
        <View style={styles.iconView}>
          <Entypo name="dots-three-vertical" size={24} color="#FFF" />
        </View>
      </HStack>

      <HStack style={{ width: 300, alignSelf: 'center', marginBottom: 40, borderRadius: 10, backgroundColor: Colors.primary, height: 50, alignItems: 'center', justifyContent: 'center' }}>
        <Box _text={{ color: Colors.white, alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }} style={{ backgroundColor: Colors.secondary, height: 40, width: 125, borderRadius: 8, marginRight: 35, justifyContent: 'center' }}>
          incomings
        </Box>

        <Box _text={{ color: Colors.white, fontWeight: 'bold' }} style={{ width: 125, paddingLeft: 15, }}  >
          Outgoings
        </Box>
      </HStack>
      <VStack style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Box _text={{ color: Colors.white, fontSize: 22, }} style={{ marginBottom: 20 }}>
          Saved in January
        </Box>
        <Box _text={{ fontWeight: 'bold', fontSize: 30, color: Colors.white }} style={{ marginBottom: 100 }}>
          $12,122,212.67
        </Box>
      </VStack>
    </View >
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
    borderWidth: 9,
    borderColor: Colors.secondary,
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: Colors.black,

  },
  outGoing: {
    borderWidth: 9,
    borderColor: Colors.primary,
    height: 160,
    width: 160,
    borderRadius: 80,
    borderTopColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',

  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 45,
    height: 50,
    borderRadius: 15,
    marginRight: 40,
    backgroundColor: Colors.primary
  }
});
