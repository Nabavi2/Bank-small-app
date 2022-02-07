import React from 'react';
import { Card, Text, View, Box, VStack, HStack, } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function SmallCardComponet() {
    return (
        <Card style={styles.card}>
            <HStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <SimpleLineIcons name="settings" size={24} color={Colors.light0} />
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


    );
}

export default SmallCardComponet;
const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.12,
        margin: 10,
        backgroundColor: Colors.primary,
        borderRadius: 20,
    }
})