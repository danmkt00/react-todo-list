import "./AddToDo.css";
import { useState } from "react";

const AddToDo = ({ updateHandler }) => {
    const [newTodoText, setNewTodoText] = useState("");
    const [error, setError] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (newTodoText === "") {
            setError("Please enter some text");
            return;
        }
        updateHandler(newTodoText);
        setNewTodoText("");
    };

    const changeHandler = (e) => {
        setError("");
        setNewTodoText(e.target.value);
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="todo-form">
            <div class="inputs-wrapper">
                <input
                    type="text"
                    value={newTodoText}
                    onChange={(e) => changeHandler(e)}
                    placeholder="Enter new todo..."
                />
                <button type="submit">Add ToDo</button>
            </div>
            {error && <div className="error-message">{error}</div>}
        </form>
    );
};

export default AddToDo;
