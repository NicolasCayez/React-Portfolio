import { Outlet, NavLink } from 'react-router-dom'
import '../App.css'

export default function Portfolio () {
  return (
    <>
      <h1>Portfolio</h1>
      <nav>
        <NavLink to={"/"}><button className="linkButton">Accueil</button></NavLink>
        <NavLink to={"/portfolio"}><button className="linkButton">Portfolio</button></NavLink>
        <NavLink to={"/contact"}><button className="linkButton">Contact</button></NavLink>
        <br />
        <NavLink to={"/portfolio/carduser"}><button className="linkButton linkPortfolio">CardUser</button></NavLink>
        <NavLink to={"/portfolio/calendar"}><button className="linkButton linkPortfolio">Calendar</button></NavLink>
        <NavLink to={"/portfolio/todolist"}><button className="linkButton linkPortfolio">ToDoList</button></NavLink>
      </nav>
      <Outlet />
    </>
  )
}
