import TodoOwner from './component/todo/todoOwner';
import TodoData from './component/todo/todoData';
import './component/todo/todo.css';
import LogoReact from './assets/react.svg';

const App = () => {
  const name = "Duy";
  const work = "Student";
  const info = {
    name: "Nhat Duy",
    age: 20,
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoOwner />
      <TodoData
        name={name}
        work={work}
        info={info}
      />
      <img className="logo-react" src={LogoReact} alt="Logo React" />
    </div>
  )
}

export default App
