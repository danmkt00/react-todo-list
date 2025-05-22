import "./AddToDo.css";
import { useState } from "react";

const AddToDo = ({ updateHandler }) => {
    const [newTodoText, setNewTodoText] = useState("");
    const submitHandler = (e) => {
        updateHandler(e, newTodoText);
        setNewTodoText("");
    };

    return (
        <form
            onSubmit={(e) => submitHandler(e)}
            className="todo-form"
        >
            <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Enter new todo..."
            />
            <button type="submit">Add ToDo</button>
        </form>
    );
};

export default AddToDo;
