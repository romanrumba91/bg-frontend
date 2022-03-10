const reducer = (globalState, action) => {


	switch (action.type) {

		case "OBTENER_MOCHILAS":
			return {
				...globalState,
				bagpacks: action.payload
			}
		case "EDIT_PLACE":
            return{
                ...globalState,
                formData: action.payload
            }

		default:
			return globalState

	}


}

export default reducer