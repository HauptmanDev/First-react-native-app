import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text, View, Data} from "react-native";
import {Navbar} from "./src/Navbar";
import {TodoCreator} from "./src/TodoCreator";
import {Todo} from "./src/Todo";


export default function App() {
    const [todos, setTodo] = useState([]);
    const addTodo = (title) => {
        const newTodo = {
            // id: Data.now().toString(),
            title: title
        };
        setTodo([...todos, newTodo])
    };
    return (
        <View style={styles.container}>
            <Navbar title={'Todo App'}/>
            <View style={styles.content}>
                <TodoCreator addTodo={addTodo}/>
                <View>
                    {todos.map(el => <Todo title={el.title}/>)}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
});
