import { createContext,useContext } from "react";

export const MagnifyingContext=createContext({
    magnifyingImage:[],
    changeImage:(item)=>{}
})

export const useMagnifyingContext=()=>{
    return useContext(MagnifyingContext)
}

export const MagnifyingContextProvider=MagnifyingContext.Provider