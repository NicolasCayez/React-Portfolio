import { NavLink } from 'react-router-dom'
import '../App.css'
import './Contact.css'
export default function Contact () {
  return (
    <>
      <h1>Contact</h1>
      <nav>
          <NavLink to={"/"}><button className="linkButton">Accueil</button></NavLink>
          <NavLink to={"/portfolio"}><button className="linkButton">Portfolio</button></NavLink>
          <NavLink to={"/contact"}><button className="linkButton">Contact</button></NavLink>
      </nav>
      <article className="cardCustom">
        <h2>Nicolas Cayez</h2>
        <h3>ceci sera un email</h3>
        <h3>ceci sera un lien réseau social</h3>
      </article>
    </>
  )
}
