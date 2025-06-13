import TodoOwner from './component/todo/todoOwner';
import TodoData from './component/todo/todoData';
import './component/todo/todo.css';
import LogoReact from './assets/react.svg';
import { useState } from 'react';
import Header from './component/layout/header.jsx'
import Footer from './component/layout/footer.jsx';

const App = () => {
  // Chay thu giao dien
  // const name = "Duy";
  // const work = "Student";
  // const info = {
  //   name: "Nhat Duy",
  //   age: 20,
  // }

  const [todosList, setTodoList] = useState([
    {
      id: 1,
      name: "Nhat Duy",
      age: 20,
      work: "Student"
    },
    {
      id: 2,
      name: "Nhat Banh",
      age: 11,
      work: "Student"
    }
  ]);

  const randomId = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const addNewTodo = (name, age, work) => {
    const newTodo = {
      id: randomId(0, 99999),
      name: name,
      age: age,
      work: work,
    }
    setTodoList([...todosList, newTodo])
  }
  const buttonDelete = (id) => {
    const delTodo = todosList.filter(item => item.id != id)
    setTodoList(delTodo)
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoOwner
          addNewTodo={addNewTodo}
        />
        {
          todosList.length > 0 ?
            <TodoData
              // name={name}
              // work={work}
              // info={info}
              buttonDelete={buttonDelete}
              todosList={todosList}
            />
            :
            <img className="logo-react" src={LogoReact} alt="Logo React" />
        }
      </div>
      <Footer />
    </>
  );
}

export default App;