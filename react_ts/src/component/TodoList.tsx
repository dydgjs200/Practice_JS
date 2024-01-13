import { useState } from "react";
import { TodoItemProp } from "../types/types";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState<TodoItemProp[]>([
    { id: 1, content: "첫번째 메모", complated: false },
    { id: 2, content: "두번째 메모", complated: true },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    const updateTodo = [
      ...todos,
      { id: Date.now(), content: newTodo, complated: false },
    ];
    // 전체 todo에 새로운 todo 추가
    setTodos(updateTodo);
    setNewTodo(""); //초기화 필요
  };

  const toggleTodo = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId
        ? { ...todo, complated: !todo.complated }
        : todo;
    });

    // 변경된 todos를 setTodos를 사용하여 업데이트하는 로직이 필요합니다.
    setTodos(updatedTodos);
  };
  return (
    <>
      <h1>Todo list</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button onClick={addTodo}>add</button>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          content={todo.content}
          complated={todo.complated}
        />
      ))}
    </>
  );
}

export default TodoList;
