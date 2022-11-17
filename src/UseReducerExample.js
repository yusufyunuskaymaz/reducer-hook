export const initialState = {
    error:"",
    loading:false,
    catImage:""
}

export const reducer=(state,action)=>{
    switch(action.type){
        case "START":
            return {...state, loading:true}
        case "SUCCESS":
            return {...state, loading:false,catImage:action.payload}
        case "FAIL":
            return{...state, error:action.payload}
    }
}