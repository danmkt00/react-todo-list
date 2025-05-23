import "./ToDoList.css";

import { useState } from "react";

import ToDo from "./ToDo";
import AddToDo from "./AddToDo";
import Title from "./Title";

const ToDoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Buy groceries", completed: false },
        { id: 2, text: "Walk the dog", completed: true },
        { id: 3, text: "Read a book", completed: false },
        { id: 4, text: "Play the guitar", completed: true },
        { id: 5, text: "Finish the todo list project", completed: false },
    ]);
    const [error, setError] = useState("");

    const changeHandler = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedTodos);
    };

    const updateHandler = (text) => {
        const newTodo = {
            id: todos.length
                ? Math.max(...todos.map((todo) => todo.id)) + 1
                : 1,
            text: text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const deleteHandler = (id) => {
        const updatedTodos = todos.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            }
        });

        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container">
            <Title text="To Do List" />
            {todos.length >= 1 ? (
                todos.map((todo) => (
                    <ToDo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        isChecked={todo.completed}
                        changeHandler={changeHandler}
                        deleteHandler={deleteHandler}
                    />
                ))
            ) : (
                <div className="error-message">Add your first Todo!</div>
            )}

            <AddToDo updateHandler={updateHandler} />
            {error && <div>{error}</div>}
        </div>
    );
};

export default ToDoList;
