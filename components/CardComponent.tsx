import React from 'react';
import { Card, Text, View, } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
function CardComponent() {
    return (
        <Card style={styles.card}>
            <View >
                <Text>This is my Card in the native base provider</Text>
            </View>
        </Card>

    );
}

export default CardComponent;
const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
        backgroundColor: '#7b58b8',
        borderRadius: 20,
    }
})