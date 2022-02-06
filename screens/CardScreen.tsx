import { StyleSheet } from 'react-native';
import CardComponent from '../components/CardComponent';

import EditScreenInfo from '../components/EditScreenInfo';
import { HStack, View, VStack, Box } from 'native-base';
import { Entypo, Ionicons, FontAwesome5, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Text, Card } from 'native-base';
import { Dimensions } from 'react-native';
import Colors from '../constants/Colors';

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

      <Box _text={{
        fontSize: 20,
        fontWeight: "medium",
        color: Colors.white,
        ml: 10
      }}>
        Recent transaction
      </Box>
      <Card style={styles.card}>
        <HStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <SimpleLineIcons name="paypal" size={24} color={Colors.light0} />
            <View style={{ flexDirection: 'column' }}>

              <Box _text={{
                fontSize: 20,
                fontWeight: "medium",
                color: Colors.white,
                ml: 10
              }}>
                KFC
              </Box>
              <Box _text={{
                fontSize: 12,
                fontWeight: "medium",
                color: Colors.light0,
                ml: 10
              }}>
                jun 26
              </Box>

            </View>
          </View>
          <Text fontSize="sm" color={Colors.light0}>$2010</Text>
        </HStack>
      </Card>


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
  card: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.85,
    height: Dimensions.get('window').height * 0.12,
    margin: 10,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  }
});
