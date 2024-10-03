import { useEffect, useState, useRef } from "react";
import trashcan from "../icons/trashcan.svg";
import edit from "../icons/edit.svg";

function Todo({
  text,
  id,
  completed,
  deleteTodo,
  toggleTodo,
  updateTodo,
  isEditing,
  setCurrentlyEditing,
}) {
  const [editedText, setEditedText] = useState(text);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedText = editedText.trim();
    if (!trimmedText) return;
    updateTodo(trimmedText, id);
    setCurrentlyEditing();
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
    updateTodo(e.target.value, id);
  };

  const handleEditClick = () => {
    isEditing ? setCurrentlyEditing("") : setCurrentlyEditing(id);
  };

  return (
    <li
      className="relative flex items-center text-white bg-primary-400 mb-3 p-2"
      id={id}
      key={id}
      data-completed={completed}
    >
      <label htmlFor={`checkbox-${id}`} className="group cursor-pointer">
        <input
          checked={completed}
          onChange={() => toggleTodo(id)}
          value={completed}
          className="appearance-none w-3.5 h-3.5 mr-2 border rounded-full ease-linear duration-400 group-hover:shadow-checkbox group-hover:border-secondary checked:border-secondary checked:bg-secondary"
          id={`checkbox-${id}`}
          type="checkbox"
        />
        <span className={completed ? "line-through text-light" : ""}>
          {text}
        </span>
      </label>

      <form className={!isEditing && "hidden"} onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          className="absolute left-7.5 top-2 bg-primary-400 outline-none border-0 border-b border-white"
          id={`edit-input-${id}`}
          type="text"
          value={editedText}
          onChange={handleInputChange}
        />
        <button className="hidden" type="submit">
          Save
        </button>
      </form>

      <button className="ml-auto text-white" onClick={handleEditClick}>
        <img src={edit} alt="Edit Task" />
      </button>
      <button className="ml-2 text-white" onClick={() => deleteTodo(id)}>
        <img src={trashcan} alt="Delete Task" />
      </button>
      <button className="hidden" onClick={() => toggleTodo(id)}>
        Toggle
      </button>
    </li>
  );
}

export default Todo;
