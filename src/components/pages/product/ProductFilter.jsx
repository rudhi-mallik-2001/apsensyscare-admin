import React, { useEffect, useState } from 'react'
const ProductFilter = ({ handelFilter, filterItem = null }) => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch("http://apsensyscare.com/backend_api/fatch_category", { method: "POST" })
            .then(
                (res) => res.json()
            )
            .then((res) => {
                setCategory(res.category)
            })
    }, [])
    const changeFilter = (id) => {
        // console.log(id)
        handelFilter(id)
    }
    console.log(filterItem)
    return (
        <div className='w-[200px] bg-white border px-2 rounded-md gap-2  '>
            <div
                onClick={() => { changeFilter() }}
                className={`w-full p-1 cursor-pointer ${filterItem===null?'bg-slate-300 text-[#fff]':''} hover:bg-slate-300 hover:text-[#fff] my-1 rounded-md`}
            >
                All
            </div>
            {
                category.length >= 1 ? category.map((item, id) => {
                    const bgclass = item.id === filterItem ? 'bg-slate-300 text-[#fff]' : ''
                    return (
                        <div
                            key={id}
                            onClick={() => { changeFilter(item.id) }}
                            className={`w-full p-1 cursor-pointer ${bgclass} hover:bg-slate-300 hover:text-[#fff] my-1 rounded-md`}
                        >
                            {item.category_name}
                        </div>
                    )
                }) : <></>
            }
        </div>
    )
}

export default ProductFilter 