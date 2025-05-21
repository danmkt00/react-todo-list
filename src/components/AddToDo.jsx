import "./AddToDo.css";
import { useState } from "react";

const AddToDo = ({ updateHandler }) => {
    const [newTodoText, setNewTodoText] = useState("");

    return (
        <div className="todo-input">
            <input
                type="text"
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Enter new todo..."
            />
            <button
                type="button"
                value={newTodoText}
                onClick={() => updateHandler(newTodoText)}
            >
                Add ToDo
            </button>
        </div>
    );
};

export default AddToDo;
