import { useContext } from 'react'

import UsersContext from './../../context/Users/UsersContext'
import Carousel from "flat-carousel";


export default function Home() {

	// const ctxUsers = useContext(UsersContext)

	// const {
	// 	currentUser,
	// 	verifyingToken
	// } = ctxUsers

	// console.log(currentUser)

  return (
	<>


		{/* <p>Verificar autenticación</p>
		<button onClick={() => { verifyingToken() }}>VERIFICAR</button>

		<h1>Tu usuario:</h1>
		<p>{currentUser.name}</p>
		<p>{currentUser.lastname}</p>
		<p>{currentUser.email}</p> */}

			<img className='imageMain' src="https://i.postimg.cc/tgJrFZDq/imghome.png" alt="Workflow" />





	</>
  )

}



