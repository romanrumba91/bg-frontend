import { useReducer } from 'react'
import axiosClient from '../../config/axios';
import BagPackContext from './BagPackContext';
import BagPackReducer from './BagPackReducer';

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



  return (
        <BagPackContext.Provider
			value={{
				bagpacks: globalState.bagpacks,
				getBagPack,
				createBagPack
			}}
		>
			{props.children}
    </BagPackContext.Provider>
  )
}
export default BagPackState
