import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'

export const TodoCreator = (props) => {
    const [title, setTitle] = useState('');
    const setValue = (e) => {
        setTitle(e.currentTarget.value)
    };
    const addTodo = () => {
        props.addTodo(title);
        setTitle('')
    };
    return (
        <View style={styles.creator}>
            <TextInput onChange={setValue} style={styles.input}/>
            <Button onPress={addTodo} style={styles.button} title='Добавить'/>
        </View>
    )
};

const styles = StyleSheet.create({
    creator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
    },
    input: {
        width: '70%',
        padding: 10,
        height: 35,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        borderRadius: 5,
    },
});
