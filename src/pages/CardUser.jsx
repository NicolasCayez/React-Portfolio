import { useState } from 'react'
import '../App.css'
import './CardUser.css'

//? Partie 2
const USER_JP = {image:"https://picsum.photos/id/2/200", pseudo:"Jean-Pierre", email:"jp@monfai.fr", description:"Lorem ipsum dolor sit amet. Denetur nesciunt nulla nostrum non omnis sed nam aperiam!", sexe:"homme"}
const USER_BOB = {image:"https://picsum.photos/id/3/200", pseudo:"Bob", email:"bob@monfai.fr", description:"Lorem ipsum dolor sit amet. Reprehenderit, tenetur nesciunt nulla nostrum non omnis sed nam aperiam!", sexe:"non-binaire"}
const USER_JANE = {image:"https://picsum.photos/id/4/200", pseudo:"Jane", email:"jane@monfai.fr", description:"Lorem ipsum dolor omnis sed nam aperiam!", sexe:"femme"}
const USER_BERTRAND = {image:"https://picsum.photos/id/5/200", pseudo:"Bertrand", email:"bebert@monfai.fr", description:"Lorem ipsum dolor omnis sed nam aperiam!", sexe:"homme"}
const USERS = [USER_JP, USER_BOB, USER_JANE, USER_BERTRAND]
 console.log(USERS)
export default function CardUser() {
  //TP2 Partie 3
  const [search, setSearch] = useState('')
  const USERS_LIST = USERS.filter(element => {
    if (!element.pseudo.includes(search)) {
      return false
    }else{
      return true
    }
  })
  
  //? Partie 1
  // return (
  //   <>
  //     <h1>Liste des utilisateurs</h1>
  //     <Card />
  //   </>
  // )

  //? Partie 2
  // return (
  //   <>
  //     <h1>Liste des utilisateurs</h1>
  //     <Card image={USER_JP.image} pseudo={USER_JP.pseudo} email= {USER_JP.email} description={USER_JP.description}/>
  //     <Card image={USER_BOB.image} pseudo={USER_BOB.pseudo} email= {USER_BOB.email} description={USER_BOB.description}/>
  //     <Card image={USER_JANE.image} pseudo={USER_JANE.pseudo} email= {USER_JANE.email} description={USER_JANE.description}/>
  //   </>
  // )

  //? Partie 3
  // return (
  //   <>
  //     <h1>Liste des utilisateurs</h1>
  //     {USERS.map((oneUser, index) =>
  //         <Card key={index} image={oneUser.image} pseudo={oneUser.pseudo} email= {oneUser.email} description={oneUser.description}/>
  //       )
  //     }
  //   </>
  // )

  //? Partie 4
  return (
    <>
      <h1>CardUser</h1>
      {USERS.length>0 ? <h2>Liste des utilisateurs</h2> : <h2>Aucun utilisateur d’inscrit</h2>}
      <input type="text" name="" id="" onChange={(event)=>setSearch(event.target.value)} />
      {/* {USERS.map((oneUser, index) => */}
      <div class="content">
        {USERS_LIST.map((oneUser, index) =>
            <Card key={index} image={oneUser.image} pseudo={oneUser.pseudo} email= {oneUser.email} description={oneUser.description} sexe={oneUser.sexe}/>
          )
        }
      </div>
      {USERS.length>0 && <p>il y a {USERS.length} utilisateurs inscrits !</p>}
    </>
  )
}

//? Partie 1
// function Card() {
//   return (
//     <>
//       <article className="card">
//         <img src="https://picsum.photos/200" alt="profile_Picture" />
//         <h2>Jean-Pierre</h2>
//         <h3>JP@monfai.fr</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequatur cum vitae dolorum vero. Dolorem, a corporis doloremque unde at, reprehenderit, tenetur nesciunt nulla nostrum non omnis sed nam aperiam!</p>
//       </article>
//     </>
//   )
// }

//? Partie 2 et 3
// function Card({image, pseudo, email, description}) {
//   return (
//     <>
//       <article className="card">
//         <img src={image} alt="profile_Picture" />
//         <h2>{pseudo}</h2>
//         <h3>{email}</h3>
//         <p>{description}</p>
//       </article>
//     </>
//   )
// }

//? Partie 4
function Card({image, pseudo, email, description, sexe}) {
  //? TP 2 Partie 1
  function handleMouseOver(event) {
    event.target.classList.add("border")
  }
  function handleMouseLeave(event) {
    event.target.classList.remove("border")
  }
  return (
    <>
      <article className={sexe == "homme" ? "card blue" : (sexe == "femme" ? "card pink" : "card yellow")}
        onMouseOver={(event)=>handleMouseOver(event)} onMouseLeave={(event)=>handleMouseLeave(event)}
      >
        <img src={image} alt="profile_Picture" onMouseOver={event=>event.stopPropagation()} onMouseLeave={event=>event.stopPropagation()}/>
        <h2 onMouseOver={event=>event.stopPropagation()} onMouseLeave={event=>event.stopPropagation()}>{pseudo}</h2>
        <h3 onMouseOver={event=>event.stopPropagation()} onMouseLeave={event=>event.stopPropagation()}>{email}</h3>
        <p onMouseOver={event=>event.stopPropagation()} onMouseLeave={event=>event.stopPropagation()}>{description}</p>
        <div onMouseOver={event=>event.stopPropagation()} onMouseLeave={event=>event.stopPropagation()}>
          <Like />
        </div>
      </article>
    </>
  )
}

//? TP 2 Partie 2
function Like() {

  const [like, setLike] = useState(42);

  function handleClick(event) {
    event.stopPropagation()
    event.target.classList.toggle('like')
    if (event.target.classList.contains('like')) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  }

  return (
    <>
      <div className="likeRow">
        <div className="likeCircle" onClick={(event)=>handleClick(event)}></div>
        <span>{like} Likes</span>
      </div>
    </>
  )
}