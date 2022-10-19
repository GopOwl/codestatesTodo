import './App.css';
import Template from './components/template';
import TodoList from './components/todoList';
import { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import TodoInsert from './components/todoInsert';

let nextId = 4;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    }
  ]);

  function onInsertToggle() {
    setInsertToggle(prev => !prev)
  }

  function onInsertTodo(text) {
    if (text === '') {
      return alert('할 일을 입력하시오')
    }
    else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo));
      nextId++;
    }
  }

  function onCheckToggle(id) {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo ))
  }

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle}/>
      <div className='add-btn' onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && <TodoInsert onInsertToggle={onInsertToggle}  onInsertTodo={onInsertTodo}/>}
    </Template>
  );
}

export default App;
