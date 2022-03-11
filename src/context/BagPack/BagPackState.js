import { useReducer } from 'react'
import axiosClient from '../../config/axios';
import BagPackContext from './BagPackContext';
import BagPackReducer from './BagPackReducer';
import { Navigate } from "react-router-dom";

const BagPackState = (props) => {

  const initialState = {

		bagpacks: []

	}

  const [globalState, dispatch] = useReducer(BagPackReducer, initialState)


    const getBagPack = async () => {

        const res = await axiosClient.get("/api/bagpack");
        const bag = res.data.data
        console.log(bag)

        dispatch({
          type: "OBTENER_MOCHILAS",
          payload: bag
        })
  }

  const createBagPack = async (dataForm) => {

		const res = await axiosClient.post("/api/bagpack/create", dataForm)

		getBagPack()

	}

  const editBagPack = async (formData) => {

    
		const res = await axiosClient.post(`/api/bagpack/${formData._id}/edit`, formData)
    dispatch({
      type: "EDIT_PLACE",
      payload: formData
  })

    // return (<Navigate replace to="/bagpack" />);

	}
  const deleteBagPack = async (id) => {

    const res = await axiosClient.post(`/api/bagpack/${id}/delete`)

    getBagPack()
}



  return (
        <BagPackContext.Provider
			value={{
				bagpacks: globalState.bagpacks,
				getBagPack,
				createBagPack,
        editBagPack,
        deleteBagPack
			}}
		>
			{props.children}
    </BagPackContext.Provider>
  )
}
export default BagPackState
