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
        { id: 4, text: "Finish todo list project", completed: false },
        { id: 5, text: "Something", completed: true },
    ]);

    const changeHandler = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedTodos);
    };

    const updateHandler = (text) => {
        if (text === "") return;
        const newTodo = {
            id: todos.length
                ? Math.max(...todos.map((todo) => todo.id)) + 1
                : 1,
            text: text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    return (
        <div className="todo-container">
            <Title text="To Do List" />
            {todos.map((todo) => (
                <ToDo
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    isChecked={todo.completed}
                    changeHandler={changeHandler}
                />
            ))}
            <AddToDo updateHandler={updateHandler} />
        </div>
    );
};

export default ToDoList;
