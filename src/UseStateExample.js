import { useReducer } from "react";
import { useState } from "react";
import {reducer,initialState} from "./UseReducerExample"
const UseStateExample = () => {
  // const [catImage, setCatImage] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

//  const dispatch = useSelector()
//  const [reducer,initialState] = useReducer
//  console.log(reducer);

 const [state, dispatch] = useReducer(reducer, initialState);


  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    // setLoading(true);
    dispatch({type:"START"})
    try {
      const res = await fetch(url);
      const data = await res.json();
      // setCatImage(data[0].url);
      // setError("");
      dispatch({type:"SUCCESS", payload:data[0].url})
    } catch (error) {
      console.log(error.message)
      // setError("DATA CAN NOT BE FETCHED");
      // setCatImage("");
      // console.log(error);
      dispatch({type:"FAIL", payload:error.message})
    } 
    // finally {
    //   // setLoading(false);
    // }
  };


  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={state.loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {state.error && <h2>{state.error}</h2>}
      {state.catImage && <img width="50%" src={state.catImage} alt="img" />}
    </div>
  );
};

export default UseStateExample;
