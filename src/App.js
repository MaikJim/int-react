//import './App.css';
import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import {CreateTodoButton} from './Components/CreateTodoButton';

const todos = [
  {text:'Cortar cebollas', completed:true},
  {text:'Tomar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false},
  { text: 'LALALALAA', completed:false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => {
          return <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { App };
