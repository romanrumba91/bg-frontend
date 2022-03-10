import { useState, useContext, useEffect } from 'react'
import BagPackContext from './../../context/BagPack/BagPackContext'
import { Card, Col, Button } from 'antd';
import { Divider,Row } from 'antd';
export default function BagPack() {

  const ctxBag = useContext(BagPackContext)

	const {
		bagpacks,
		getBagPack,
		createBagPack
	} = ctxBag


  const [newBag, setNewBag] = useState({
		nameBagPack: "",
		imageBagPack: "",
		descriptionBagPack: "",
		priceBagPack: "",
		color: ""

	})

  const handleChange = (event) => {

		setNewBag({
			...newBag,
			[event.target.name]: event.target.value
		})

	}

  const handleSubmit = (event) => {	
		event.preventDefault()

		createBagPack(newBag)

		setNewBag({
			nameBagPack: "",
			imageBagPack: "",
			descriptionBagPack: "",
			priceBagPack: "",
			color: ""

		})

	}

  useEffect(() => {(getBagPack())},[])

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

			<button type="submit"
			className="w-96 inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

			>Create BagPack</button>

		</form>


    <center><h1>BagPack list</h1></center>

    <button onClick={() => { getBagPack() }}>
      
    </button>

	<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

    {
      bagpacks.map((elt) => {
        return (
			<div key={elt.id} className="group relative">
				<div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
					<img src={elt.imageBagPack} alt="elt" className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
				</div>
			<div className="mt-4 flex justify-between">
			<div>
			<h3 className="text-sm text-gray-700">
				<p>Brand: {elt.nameBagPack}</p>
				<p>Description: {elt.descriptionBagPack}</p>
				<p>Color: {elt.color}</p>
			</h3>
			</div>
			<p>Price: {elt.priceBagPack}</p>


			</div>
			<button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Editar</button>
			<button type="submit" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Borrar</button>
			</div>

		

        )
      })
    }

    </div> 
	</div>
    </> 
  )
}





