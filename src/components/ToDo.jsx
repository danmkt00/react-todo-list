import "./ToDo.css";

const ToDo = ({ id, text, isChecked, changeHandler, deleteHandler }) => {
    return (
        <div key={id} className="todo-item">
            <input
                type="checkbox"
                id={`checkbox-${id}`}
                checked={isChecked}
                onChange={() => changeHandler(id)}
            />
            <label
                htmlFor={`checkbox-${id}`}
                style={{ textDecoration: isChecked ? "line-through" : "none" }}
            >
                {text}
            </label>
            <button
                className="delete-button"
                onClick={() => deleteHandler(id)}
                type="button"
            >
                X
            </button>
        </div>
    );
};

export default ToDo;
