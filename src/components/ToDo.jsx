import "./ToDo.css";

const ToDo = ({ id, text, isChecked, changeHandler }) => {
    return (
        <div key={id} className="todo-item">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => changeHandler(id)}
            />
            <label htmlFor="myCheckbox">{text}</label>
        </div>
    );
};

export default ToDo;
