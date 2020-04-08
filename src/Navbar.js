import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#3949ab',
        paddingBottom: 10,
    },
    title: {
        color: 'black',
        fontSize: 20,
    },
});
