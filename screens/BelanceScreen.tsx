import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions } from 'react-native';
import { HStack, View, VStack, Box, Card, Text } from 'native-base';
import { AntDesign, MaterialIcons, Fontisto, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors'
import GraphComponent from '../components/GraphComponent';

export default function BelanceScreen() {
  return (
    <View style={styles.container}>
      <HStack style={{ alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 25, marginTop: 25 }}>
        <MaterialIcons name="menu-open" size={27} color={Colors.white} />
        <Ionicons name="md-person-circle-outline" size={45} color="#ebd10c" />
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
                Jun 16, 2022
              </Box>
              <Box _text={{
                fontSize: 33,
                fontWeight: "bold",
                color: Colors.white,
                ml: 5
              }}>
                $1020203.09
              </Box>

            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 10, alignItems: 'center', justifyContent: 'center', height: 30, width: 50 }}>
            <Box _text={{ fontSize: 16, color: Colors.white, }}>15%</Box>
            <AntDesign name="arrowup" size={24} color={Colors.white} style={{ marginLeft: 4, marginRight: 5 }} />
          </View>
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
          <View style={{ height: 28, width: 30, borderRadius: 6, alignItems: 'center', justifyContent: 'center', borderColor: '#ebd10c', borderWidth: 2, }}>
            <Text style={{ fontSize: 22, color: "#ebd10c", alignSelf: 'center', marginTop: 2 }}>$</Text>
          </View>
        </View>
        <View style={styles.iconView}>
          <MaterialCommunityIcons name="arrow-collapse-up" size={24} color="#89b0a8" />

          {/* <AntDesign name="arrowup" size={24} color="#89b0a8" /> */}
        </View>
      </HStack>
      <HStack style={[{ ...styles.viewContainer, marginTop: 5, marginHorizontal: 15, paddingRight: 6 }]}>
        <Box _text={styles.text}>
          Sent
        </Box>
        <Box _text={styles.text}>
          Receive
        </Box>
        <Box _text={styles.text}>
          Loan
        </Box>
        <Box _text={styles.text}>
          Topup
        </Box>
      </HStack>
      <HStack style={{ alignItems: 'center', justifyContent: 'space-between', margin: 25 }}>
        <Box _text={{ fontSize: 25, color: Colors.white, fontWeight: 'bold' }} >Activities</Box>
        <View style={{ height: 40, width: 110, borderRadius: 30, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.primary }}>
          <Box>This Week</Box>
        </View>
      </HStack>
      <HStack style={[{ ...styles.viewContainer, marginTop: 5, marginHorizontal: 15, paddingRight: 15 }]}>
        <Box _text={styles.text}>
          Jan
        </Box>
        <Box _text={styles.text}>
          Feb
        </Box>
        <Box _text={styles.text}>
          Mar
        </Box>
        <Box _text={styles.text}>
          Apr
        </Box>
        <Box _text={styles.text}>
          May
        </Box>
        <Box _text={styles.text}>
          Jun
        </Box>
      </HStack>
      <GraphComponent />
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
    width: 60,
    height: 60,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5,

  },
  text: {
    fontSize: 15,
    color: Colors.white,
    marginLeft: 3,
    marginBottom: 4
  }
});
