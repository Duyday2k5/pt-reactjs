import Header from './component/layout/header.jsx'
import Footer from './component/layout/footer.jsx';
import { Outlet } from 'react-router-dom';
import TodoApp from './component/todo/TodoApp.jsx';


const App = () => {
  // Chay thu giao dien
  // const name = "Duy";
  // const work = "Student";
  // const info = {
  //   name: "Nhat Duy",
  //   age: 20,
  // }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;