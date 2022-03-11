import { useState, useContext, useEffect } from "react";
import BagPackContext from './../../context/BagPack/BagPackContext'
import UsersContext from '../../context/Users/UsersContext'
import { useParams, Link } from 'react-router-dom'

export default function BagDetails(props) {

    
    const ctxBag = useContext(BagPackContext)

    const {
		bagpacks,
	} = ctxBag

    const {id} = useParams();

    const ctxUser = useContext(UsersContext)

    const {
		
		authStatus

	} = ctxUser

    const foundPlace = bagpacks.find((oneBagpack) => {
 
        return oneBagpack._id === id

    })
    return(
        <>

            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            

   


                {/* <> */}

                
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none"> 
                    <img src= {foundPlace.imageBagPack} className="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
                </div>
                <div className="mt-4 flex justify-between">
                <div>
                <h3 className="text-sm text-gray-700">
                 <p>{foundPlace.nameBagPack}</p>
                <p> {foundPlace.descriptionBagPack}</p>
                
                <p> {foundPlace.colorBagPack}</p>
                </h3>
                </div>
                <p> {foundPlace.priceBagPack}</p>
                </div>
                <Link
                              to={`/bagpack/${foundPlace._id}/edit`}
                              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >Configuration</Link>
               
                {/* </> */}
                </div> 
                </div> 
  
      </>
    )
}
