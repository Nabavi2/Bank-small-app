import React from 'react';
import { Card, Text, View, Box, VStack, HStack, } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function GraphComponent() {
    return (
        <HStack style={styles.container}>
            <View style={{ flexDirection: 'column', backgroundColor: Colors.secondary, borderRadius: 3, width: 10, marginLeft: 40, marginRight: 50, }}>
                <View style={[{ ...styles.graph, height: 90, backgroundColor: Colors.primary, }]}>
                </View>
                <View style={[{ ...styles.graph, height: 110, backgroundColor: Colors.secondary, }]}>
                </View>
            </View>

            <View style={{ flexDirection: 'column', backgroundColor: Colors.secondary, borderRadius: 3, width: 10, marginRight: 55, }}>
                <View style={[{ ...styles.graph, height: 120, backgroundColor: Colors.primary, }]}>
                </View>
                <View style={[{ ...styles.graph, height: 80, backgroundColor: Colors.secondary, }]}>
                </View>
            </View>
            <View style={{ flexDirection: 'column', backgroundColor: Colors.secondary, borderRadius: 3, width: 10, marginRight: 55, }}>
                <View style={[{ ...styles.graph, height: 70, backgroundColor: Colors.primary, }]}>
                </View>
                <View style={[{ ...styles.graph, height: 130, backgroundColor: Colors.secondary, }]}>
                </View>
            </View>
            <View style={{ flexDirection: 'column', backgroundColor: Colors.secondary, borderRadius: 3, width: 10, }}>
                <View style={[{ ...styles.graph, height: 130, backgroundColor: Colors.primary, }]}>
                </View>
                <View style={[{ ...styles.graph, height: 70, backgroundColor: Colors.secondary, }]}>
                </View>
            </View>
            <View style={{ flexDirection: 'column', marginRight: 3, marginLeft: 2, height: 210 }}>
                <View style={{ width: 100, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 10, marginLeft: 10, marginBottom: 2, }}>
                    <Box _text={{ color: Colors.white, fontSize: 20, }}>2022</Box>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10, }}>
                    <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: Colors.secondary, marginBottom: 2, alignSelf: 'center', }}></View>
                    <View style={{ flexDirection: 'column', backgroundColor: Colors.secondary, borderRadius: 3, width: 10, marginTop: 4 }}>
                        <View style={[{ ...styles.graph, height: 80, backgroundColor: Colors.primary, }]}>
                        </View>
                        <View style={[{ ...styles.graph, height: 37, backgroundColor: Colors.secondary, }]}>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'column', backgroundColor: Colors.secondary, borderRadius: 3, width: 10, marginRight: 40 }}>
                <View style={[{ ...styles.graph, height: 140, backgroundColor: Colors.primary, }]}>
                </View>
                <View style={[{ ...styles.graph, height: 60, backgroundColor: Colors.secondary, }]}>
                </View>
            </View>
        </HStack>
    );
}

export default GraphComponent;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingTop: 15,
        marginBottom: 15,
        paddingBottom: 10,
    },
    graph: {
        width: 10,
        borderRadius: 3,

    }
})
