import { createBrowserRouter, RouterProvider, Outlet, NavLink } from 'react-router-dom'
import Accueil from './pages/Accueil.jsx'
import Calendar from './pages/Calendar.jsx'
import CardUser from './pages/CardUser.jsx'
import Contact from './pages/Contact.jsx'
import PageError from './pages/PageError.jsx'
import Portfolio from './pages/Portfolio.jsx'
import ToDoList from './pages/ToDoList.jsx'
import './App.css'

const ROUTER = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Accueil />
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
    ],
    errorElement: <PageError />
  },
])

export default function App() {
  return (
    <RouterProvider router={ROUTER} />
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

