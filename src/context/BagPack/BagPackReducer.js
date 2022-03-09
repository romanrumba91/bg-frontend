const reducer = (globalState, action) => {


	switch (action.type) {

		case "OBTENER_MOCHILAS":
			return {
				...globalState,
				bagpacks: action.payload
			}

		default:
			return globalState

	}


}

export default reducer