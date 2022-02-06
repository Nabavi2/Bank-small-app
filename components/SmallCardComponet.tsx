import React from 'react';
import { Card, Text, View, Box, VStack, HStack } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function SmallCardComponet(icon: any, typeOfCard: any, date: string, price: string) {
    return (
        <Card style={styles.card}>
            <HStack style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <MaterialIcons name={icon} size={24} color={Colors.light0} />
                    <Text fontSize="lg" color={Colors.white}>{typeOfCard}</Text>
                    <Text fontSize="sm" color={Colors.light0}>{date}</Text>

                </View>
                <Text fontSize="sm" color={Colors.light0}>{price}</Text>
            </HStack>
        </Card>

    );
}

export default SmallCardComponet;
const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.12,
        margin: 10,
        backgroundColor: Colors.primary,
        borderRadius: 20,
    }
})