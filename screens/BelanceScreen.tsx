import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions } from 'react-native';
import { HStack, View, VStack, Box, Card, Text } from 'native-base';
import { AntDesign, MaterialIcons, Fontisto } from '@expo/vector-icons';
import Colors from '../constants/Colors'

export default function BelanceScreen() {
  return (
    <View style={styles.container}>
      <HStack style={{ alignItems: 'center', justifyContent: 'space-between', margin: 25 }}>
        <MaterialIcons name="menu-open" size={27} color={Colors.white} />
        <Fontisto name="person" size={30} color={Colors.white} />
      </HStack>
      <Box _text={styles.title}> Your Belance </Box>
      <Card style={styles.card}>
        <HStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column' }}>

              <Box _text={{
                fontSize: 18,
                fontWeight: "medium",
                color: Colors.white,
                ml: 10
              }}>
                Total amount
              </Box>
              <Box _text={{
                fontSize: 33,
                fontWeight: "bold",
                color: Colors.white,
                ml: 10
              }}>
                $1020203.09
              </Box>

            </View>
          </View>

          <Text fontSize="sm" color={Colors.white} mt={10}>15%</Text>
          <AntDesign name="arrowup" size={24} color={Colors.white} />

        </HStack>
      </Card>
      <HStack style={[{ ...styles.viewContainer }, { marginTop: 15, marginHorizontal: 15 }]}>
        <View style={styles.iconView}>
          <AntDesign name="arrowup" size={28} color="#f53b95" />
        </View>

        <View style={styles.iconView}>
          <AntDesign name="arrowdown" size={24} color="#30f230" />
        </View>
        <View style={styles.iconView}>
          <AntDesign name="arrowup" size={24} color="black" />
        </View>
        <View style={styles.iconView}>
          <AntDesign name="arrowup" size={24} color="black" />
        </View>
      </HStack>
      {/* <HStack style={[{ ...styles.viewContainer, marginTop: 5, marginHorizontal: 15 }]}>
        <Box _text={{
          fontSize: 18,
          color: Colors.white,
        }}>
          sent
        </Box>
        <Box _text={{
          fontSize: 18,
          color: Colors.white,
        }}>
          sent
        </Box>
        <Box _text={{
          fontSize: 18,
          color: Colors.white,
        }}>
          sent
        </Box>
        <Box _text={{
          fontSize: 18,
          color: Colors.white,
        }}>
          sent
        </Box>
      </HStack> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  title: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white,
    marginLeft: 5,
  },
  card: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.89,
    height: Dimensions.get('window').height * 0.18,
    margin: 10,
    backgroundColor: Colors.primary,
    borderRadius: 20,
  },
  iconView: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',

  }
});
