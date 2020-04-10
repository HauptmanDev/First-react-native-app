import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const TodoCreator = (props) => {
    const [title, setTitle] = useState('');
    const pressHandler = () => {
        if (title.trim()) {
            props.onSubmit(title);
            setTitle('')
        } else {
            Alert.alert('Ошибка','Не введено имя')
        }
    };
    return (
        <View style={styles.creator}>
            <TextInput onChangeText={setTitle} style={styles.input} value={title} placeholder='Введите имя' autocorrect={false} keyboardType='default'/>
            <Button onPress={pressHandler} style={styles.button} title='Добавить'/>
        </View>
    )
};

const styles = StyleSheet.create({
    creator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 15,
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
