import { useReducer } from "react";
import CuboContext from "./CuboContext";
import CuboReducer from "./CuboReducer";
import axiosClient from "../../config/axios";

const CuboState = (props) => {
  const initialState = {
    cubos: [],
    currentCubo: {
      _id: null,
      idProd: '',
      name: '',
      img: '',
      price: '',
      description: '',
      slug: ''
    }
  };

  const [globalState, dispatch] = useReducer(CuboReducer, initialState);

  const getCubos = async () => {
    try {
      const res = await axiosClient.get("/cubos"); // http://localhost:3000/api/guitars
      dispatch({
        type: "OBTENER_CUBOS",
        payload: res.data.cubos,
      });
    } catch (error) {
        console.log(error);
    }
  };

  const setCurrentCubo = (cuboData) => {
    dispatch({
      type: "OBTENER_CUBO",
      payload:cuboData
    })
  }

  return (
    <CuboContext.Provider
      value={{
        cubos: globalState.cubos,
        currentCubo: globalState.currentCubo,
        getCubos,
        setCurrentCubo
      }}
    >
      {props.children}
    </CuboContext.Provider>
  );
};

export default CuboState;
