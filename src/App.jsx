import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import Calendar from './pages/Calendar.jsx'
import CardUser from './pages/CardUser.jsx'
import Contact from './pages/Contact.jsx'
import PageError from './pages/PageError.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ToDoList from './pages/ToDoList.jsx'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Accueil />
      }
    ],
    errorElement: <PageError />
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    children: [
      {
        path: "/portfolio/carduser",
        element: <CardUser />
      },
      {
        path: "/portfolio/calendar",
        element: <Calendar />
      },
      {
        path: "/portfolio/todolist",
        element: <ToDoList />
      }
    ]
  },
  {
    path: "/contact",
    element: <Contact />
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

function Root() {
  return (
    <>
      <header>
        <h1>Mon Portfolio</h1>
        <nav>
          <NavLink to={"/"}><button className="linkButton">Accueil</button></NavLink>
          <NavLink to={"/portfolio"}><button className="linkButton">Portfolio</button></NavLink>
          <NavLink to={"/contact"}><button className="linkButton">Contact</button></NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}

