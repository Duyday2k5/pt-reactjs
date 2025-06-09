import TodoOwner from './component/todo/todoOwner';
import TodoData from './component/todo/todoData';
import './component/todo/todo.css';
import LogoReact from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const name = "Duy";
  const work = "Student";
  const info = {
    name: "Nhat Duy",
    age: 20,
  }

  const [todosList, setTodoList] = useState([
    {
      id: 1,
      name: "Nhat Duy",
      age: 20,
      work: "Student"
    },
    {
      id: 2,
      name: "Nhat Minh",
      age: 11,
      work: "Student"
    }
  ])
  const randomId = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomId(0, 1000000),
      name: name,
      work: work,
    }
    setTodoList([...todosList, newTodo])
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoOwner
          addNewTodo={addNewTodo}
        />
        <TodoData
          name={name}
          work={work}
          info={info}
          todosList={todosList}
        />
        <img className="logo-react" src={LogoReact} alt="Logo React" />
      </div>
    </>
  );
}

export default App;