import React, { useContext, useEffect, useState } from "react";
import BagPackContext from './../../context/BagPack/BagPackContext'
import { useNavigate } from "react-router-dom";
import { useParams, Link } from 'react-router-dom'


export default function BagPackEdit() {

    const navigate = useNavigate()

    const ctxBag = useContext(BagPackContext)

    const {
		bagpacks,
		editBagPack
	} = ctxBag

    const {id} = useParams;

    const foundPlace = bagpacks.find((oneBagpack) => {

        return oneBagpack._id === id

    }) || {}

    const [newBag, setNewBag] = useState(foundPlace)


  const handleChange = (event) => {

		setNewBag({
			...newBag,
			[event.target.name]: event.target.value
		})

	}

  const handleSubmit = (event) => {	
		event.preventDefault()

        editBagPack(newBag)

        console.log("esta es mi nueva mochila", newBag)

	}


  return (
      <>

<form onSubmit={(evt) => { handleSubmit(evt) }}>
			<label>Name</label>
			<input
                
				name="nameBagPack"
				value={newBag.nameBagPack}
				onChange={(evt) => { handleChange(evt) }}
				className="py-3 px-4 block w-96 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md "
			/>


			<label>Image</label>
			<input 
                
				name="imageBagPack"
				value={newBag.imageBagPack}
				onChange={(evt) => { handleChange(evt) }}
				className="py-3 px-4 block w-96 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
			/>
			<label>Description</label>
			<input 
				name="descriptionBagPack"
				value={newBag.descriptionBagPack}
				onChange={(evt) => { handleChange(evt) }}
				className="py-3 px-4 block w-96 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
			/>
			<label>Price</label>
			<input 
				name="priceBagPack"
				value={newBag.priceBagPack}
				onChange={(evt) => { handleChange(evt) }}
				className="py-3 px-4 block w-96 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
			/>
			<label>Color</label>
			<input 
				name="color"
				value={newBag.color}
				onChange={(evt) => { handleChange(evt) }}
				className="py-3 px-4 block w-96 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
			/>

			<button  onClick={()=> { editBagPack(newBag) ; navigate("/bagpacks")}}type="submit"
			className="w-96 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

			>Create BagPack</button>

		</form>



      </>

  )
}
