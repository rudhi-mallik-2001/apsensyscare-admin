import React, { useState, useEffect } from 'react'
import { Input, fetchSize } from '../../index'

function Addproductvarities({ product }) {
    const varities = {
        price: "",
        size_id: "",
        stock_qty: ""
    }
    const [addvarities, setAddvarities] = useState(varities)
    const [size, setSize] = useState([])
    const handleVarities = (val, key) => {
        setAddvarities((prev) => ({ ...prev, [key]: val }))
    }
    const Varityclick = () => {
        console.log("submitted", addvarities);
    }
    useEffect(() => {
        fetchSize().then((res) => {
            console.log('called')
            setSize(res);
        })
    }, [])
    return (
        <div className='w-[100%] flex flex-row justify-between items-start flex-wrap gap-2 p-4  relative'>
            <div className="w-[20%] relative">
                <h2><strong>Price</strong></h2>
                <Input
                    placeholder="Enter Your Product"
                    type="text"
                    onChange={(e) => handleVarities(e.target.value, 'price')}

                />
            </div>
            {/* <div className="w-[20%] relative">
        <h2><strong>Size</strong></h2>
        <Input
        placeholder="Enter Your Product"
        type="text"
        onChange={(e) => handleVarities(e.target.value, 'size_id')}
       
    />
    </div> */}
            <label className="form-control w-[20%] ">

                <h2><strong>Select Size</strong></h2>

                <select className="select  select-md rounded-md border border-black/30" onChange={(e) => handleVarities(e.target.value, 'size_id')}>
                    <option disabled selected>Select Sizes</option>
                    {
                        size.map((item) => {
                            return (
                                <option value={item.id}>{item.size_value}</option>
                            )
                        })
                    }
                </select>
            </label>
         
            <div className="w-[20%] relative">
                <h2><strong>Stock</strong></h2>
                <Input
                    placeholder="Enter Your Product"
                    type="text"
                    onChange={(e) => handleVarities(e.target.value, 'stock_qty')}

                />
            </div>
            <button type="submit" class="w-[15%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] p-1 mt-5" onClick={Varityclick}>Add</button>
        </div>
    )
}

export default Addproductvarities;