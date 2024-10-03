import { useState } from "react";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";
import Todo from "./components/Todo";
import useLocalStorage from "./lib/useLocalStorage";

const FILTER_OPTIONS = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_LABELS = Object.keys(FILTER_OPTIONS);

function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [isAllCompleted, setIsAllCompleted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [editingTodoId, setEditingTodoId] = useState("");

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function deleteAll() {
    setTodos([]);
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  }

  function toggleAll() {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: !todo.completed,
      }))
    );
  }

  function updateTodo(text, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              text: text,
            }
          : todo
      )
    );
  }

  function completeAll() {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: !isAllCompleted,
      }))
    );
    setIsAllCompleted(!isAllCompleted);
  }

  const filterList = FILTER_LABELS.map((label) => (
    <FilterButton
      name={label}
      key={label}
      isPressed={label === activeFilter}
      setFilter={setActiveFilter}
    />
  ));

  return (
    <div className="app-container bg-black flex h-screen">
      <div className="m-auto bg-blue-700 white p-6 rounded-lg text-white max-w-md w-full">
        <h2 className="text-white text-xl font-semibold mb-4">TO DO LIST</h2>
        <Form addTodo={addTodo} />
        <ul className="todos">
          {todos
            .filter(FILTER_OPTIONS[activeFilter])
            .map(({ text, id, completed }) => (
              <Todo
                text={text}
                id={id}
                completed={completed}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                updateTodo={updateTodo}
                isEditing={id === editingTodoId}
                setCurrentlyEditing={setEditingTodoId}
              />
            ))}
        </ul>

        <div className="hidden">
          <button onClick={deleteAll}>Delete All</button>
          <button onClick={toggleAll}>Toggle All</button>
          <button onClick={completeAll}>Complete All</button>
        </div>
        <div className={!todos.length && "hidden"}>{filterList}</div>
      </div>
    </div>
  );
}

export default App;
