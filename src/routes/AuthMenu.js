import { useContext, useState, useEffect } from 'react'

import { Navigate, useParams } from 'react-router-dom'
import UsersContext from './../context/Users/UsersContext'


export default function AuthMenu({ component: Component }) {

	const userCtx = useContext(UsersContext)

	const { 
		authStatus, 
		verifyingToken,
        currentUser } = userCtx

        const {id} = useParams()
        console.log(id)


	useEffect(() => {
		verifyingToken()
	}, [authStatus])

    console.log(authStatus)
  return (
	<div>

		{
			authStatus ?
			// SI EL USUARIO YA ESTÁ LOGGEADO, ENTONCES, ENVÍAME AL HOME
            (<Component params={id} user={currentUser._id} />)
			
			:
			// SI EL USUARIO NO ESTÁ LOGGEADO, ENTONCES, DÉJAME ACCEDER AL COMPONENTE PROP QUE TRAE LA RUTA
			(<Navigate replace to ="/" />)
		}

		
	</div>
  )
}