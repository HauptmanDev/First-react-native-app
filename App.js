import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from "react-native";
import {Navbar} from "./src/Navbar";
import {TodoCreator} from "./src/TodoCreator";
import {Todo} from "./src/Todo";


export default function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = newTitle => {
        const newTodo = {
            id: Date.now().toString(),
            title: newTitle,
        };
        setTodos(prev => [...prev, newTodo])
    };
    const removeTodo = (id) => {
            setTodos(prev => prev.filter(el => {
                if (id !== el.id) return el.id
            }))
    };
    return (
        <View>
            <Navbar title={'Todo App'}/>
            <View style={styles.content}>
                <TodoCreator onSubmit={addTodo}/>

                <FlatList
                    data={todos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <Todo todo={item} removeTodo={removeTodo}/>}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        color: '#000',
    }
});
