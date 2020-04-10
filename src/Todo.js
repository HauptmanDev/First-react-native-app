import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => alert(props.todo.title)}
            onLongPress={() => props.removeTodo(props.todo.id)}>
            <View style={styles.todo}>
                <Text style={styles.title}>{props.todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    todo: {
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#3949ab',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    title: {
        color: '#000',
        fontSize: 20,
    },
});
