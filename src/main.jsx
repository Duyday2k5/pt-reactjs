import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import page
import UsersPage from './pages/users.jsx'
import ProductsPage from './pages/products.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import './styles/global.css'
import TodoApp from './component/todo/TodoApp.jsx';
import ErrorPage from './errors/error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/products", //link dan
        element: <ProductsPage />
      },
      {
        path: "/users",
        element: <UsersPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
