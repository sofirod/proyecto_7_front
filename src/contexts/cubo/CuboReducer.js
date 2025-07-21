const CuboReducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_CUBOS":
            return {
                ...globalState,
                cubos: action.payload
            }
        case "OBTENER_CUBO":
            return {
                ...globalState,
                currentCubo: action.payload
            }        
        default:
            return globalState;
    }
}

export default CuboReducer;