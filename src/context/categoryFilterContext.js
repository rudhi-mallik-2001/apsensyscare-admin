import { createContext,useContext } from "react";

export const MagnifyingContext=createContext({
    magnifyingImage:[],
    editmagnifyingImage:{
        image_100:[],
        image_230:[],
        image_1200:[]
    },
    changeImage:(item)=>{}
})

export const useMagnifyingContext=()=>{
    return useContext(MagnifyingContext)
}

export const MagnifyingContextProvider=MagnifyingContext.Provider