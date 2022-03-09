import axios from 'axios'
import { useReducer } from 'react'
import { Navigate } from "react-router-dom";
import axiosClient from '../../config/axios';
import BagPackContext from './BagPackContext';
import BagPackReducer from './BagPackContext';

const BagState = (props) => {



    const bagPack = async () => {

        const res = await axiosClient.get("/api/bagpack/all");
        const bag = res.data.data
        console.log(bag)




  

  }



  return (
    <BagPackContext.Provider
    value={{

        bagPack
    }}
>
</BagPackContext.Provider>
  )
}
export default BagState()
