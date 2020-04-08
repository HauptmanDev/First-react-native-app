import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Todo = (props) => {
    return (
        <View style={styles.todo}>
            <Text>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    todo: {
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
