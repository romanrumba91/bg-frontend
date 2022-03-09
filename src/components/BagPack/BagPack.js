import React from 'react'
import axiosClient from '../../config/axios';
import BagPackContext from './../../context/BagPack/BagPackContext';

export default function BagPack() {

    const res = axiosClient.get("/api/bagpack/all");
    const bag = res.data.data
    console.log(bag)
  return (

        <BagPackContext.Provider
        value={{

            BagPack
        }}
        >
        </BagPackContext.Provider>
    )
  
}
