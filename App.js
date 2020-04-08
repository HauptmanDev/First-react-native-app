import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, View} from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>Hello Nat!!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    greeting: {
        color: 'white',
        fontSize: 50,
    }
});
