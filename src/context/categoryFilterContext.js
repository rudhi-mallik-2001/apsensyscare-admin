import { createContext,useContext } from "react";

export const CategoryFilter=createContext({
    filteredItem:'',
    changeFilter:(item)=>{}
})

export const usefilterContext=()=>{
    return useContext(CategoryFilter)
}

export const FilterProvider=CategoryFilter.Provider