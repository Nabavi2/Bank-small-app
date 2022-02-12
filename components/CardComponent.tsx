import React from 'react';
import { Card, Text, View, Box, VStack, HStack } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function CardComponent() {
    return (
        <Card style={styles.card}>
            <HStack style={{ justifyContent: 'space-between' }}>
                <VStack style={{ marginLeft: 15 }}>
                    <FontAwesome5 name="sim-card" size={28} color="#de980b" />

                    <Box _text={{ fontSize: 18, color: Colors.white, marginBottom: 4, marginTop: 3, fontWeight: 'bold' }}>
                        5088 3923 8748 9439
                    </Box>
                    <Box _text={{ fontSize: 15, color: Colors.white, fontWeight: 'bold' }}>
                        Rohullah
                    </Box>
                    <Box _text={{ fontSize: 12, color: Colors.white, marginTop: 2, }}>
                        Entry Date
                    </Box>
                    <Box _text={{ fontSize: 15, color: Colors.white, fontWeight: 'bold' }}>
                        24/2022
                    </Box>
                </VStack>
                <VStack style={{ marginTop: 120 }}>
                    <HStack mr={5}>
                        <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: "#d62718", }}></View>
                        <Box style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: "#de9f1f", }}></Box>
                    </HStack>
                    <Box _text={{ fontSize: 10, color: Colors.white }}>
                        mastercard
                    </Box>
                </VStack>
            </HStack>

        </Card>

    );
}

export default CardComponent;
const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.26,
        margin: 10,
        backgroundColor: Colors.secondary,
        borderRadius: 20,
    }
})