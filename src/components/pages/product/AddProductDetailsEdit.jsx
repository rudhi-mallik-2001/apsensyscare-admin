import React, { useState, useEffect } from 'react'
import { Input, Image, fetchAllCategory, fetchSize } from '../../index'

export default function AddProductDetailsEdit({updateDetails}) {
   
    const [addproduct, setAddproduct] = useState()
    const [adddetails, setAdddetails] = useState([])
    const [productsize, setproductsize] = useState([])

    const handleProduct = (val, key) => {
        updateDetails(val,key)
    }
   
    useEffect(() => {
       
        fetchAllCategory().then((res) => {
            setAdddetails(res)
        })

    }, [])
    useEffect(() => {
        fetchSize().then((res) => {
            setproductsize(res);
        })
    }, [])
 
    return (
        <div className='w-[98%] p-2 flex flex-row  gap-2 border rounded-md'>
            <div className='w-[50%]'>
                
                <Input
                    label="Enter the brand Name*"
                    placeholder="Enter Your Product"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'brand_name')}
                    
                />
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Select Category</span>
                    </div>
                    <select className="select  select-md rounded-md border border-black/30 px-3 py-2" onChange={(e) => handleProduct(e.target.value, 'category_id')}>
                        <option selected disabled>Select categories</option>
                        {
                            adddetails.map((item, idx) => {
                                return (
                                    <option value={item.id} key={idx}>{item.category_name}</option>
                                )
                            })
                        }
                    </select>
                </label>
                <Input
                    label="Enter the Name*"
                    placeholder="Enter Your Name"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'name')}

                />
                <Input
                    label="Enter the short Name*"
                    placeholder="Enter short Name Product"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'short_name')}

                />
                <Input
                    label="Enter the search keyword*"
                    placeholder="Enter search keyword of Product"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'search_keywords')}

                />
                <Input
                    label="Enter  url*"
                    placeholder="Enter product url"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'product_url')}
                />

                <Input
                    label="Enter default price*"
                    placeholder="Enter price"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'default_price')}

                />

                <Input
                    label="Enter stock*"
                    placeholder="Enter stock"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'stock_qty')}
                />

                <label className="form-control w-full ">

                    <h2><strong>Select default Size</strong></h2>

                    <select
                        className="select  select-md rounded-md border border-black/30"
                        onChange={(e) => handleProduct(e.target.value, 'default_size')}>
                        <option selected>Select default Sizes</option>
                        {
                            productsize.map((item) => {
                                return (
                                    <option value={item.size_value}>{item.size_value}</option>
                                )
                            })
                        }
                    </select>
                </label>

                <Input
                    label="Product description*"
                    placeholder="Enter Product description "
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'description')}
                />
                <Input
                    label="Long description*"
                    placeholder="Enter Long description"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'long_description')}
                />
                <Input
                    label="Product Image*"
                    placeholder="Enter Product Image"
                    type="text"
                    onChange={(e) => handleProduct(e.target.value, 'product_image')}
                />
                {/* <div className='w-full h-[50px] flex  items-center'>
                    <button type='button' className="btn btn-sm btn-success" onClick={productclick}>Add Product </button>
                </div> */}
            </div>
            <div className='w-full  flex flex-col  justify-start items-start gap-2 p-6'>
                <div className='border-2 rounded-md'>
                    <img src="https://apsensyscare.com/Image/all_products/stainpro-lemon-dish-wash-gel.png" alt="" srcset="" />
                </div>
                <Image />
            </div>
        </div>
    )
}
 