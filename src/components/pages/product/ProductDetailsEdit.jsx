import React, { useEffect, useState } from 'react'
import { Input, updateProductsById, Image, getProductSizes, fetchAllCategory } from '../../index'
import { toast } from 'react-toastify'

function ProductDetailsEdit({ product, updateDetails }) {
    const [categories, setCategory] = useState([])
    const [productsize, setProductsize] = useState([])
    const [deafultprice, setDeafultprice] = useState(null)

    const handelInputs = (value, key) => { 
        console.log("entered")
        updateDetails(value, key)
    }
    const updateproduct = (value) => {
        updateProductsById(value).then((res) => {
            toast.success("Update success");
        })
    }
    useEffect(() => {
        // getProductSizes(product.id).then(()=>{

        // })
        fetchAllCategory().then((res) => {
            setCategory(res)
        })
        getProductSizes(product.id).then((res) => {
            setProductsize(res)
        })
        setDeafultprice(product.default_price)
    }, [product.id])
    const hanelPrice = (str, pid) => {
        const temparr = str.split('@@@')
        handelInputs(temparr[1], 'default_size')
        setDeafultprice(temparr[2])
        handelInputs(temparr[2], 'default_price')
    }
    return (
        <div className='w-[100%] p-2 flex flex-row  gap-2 '>
            <div className='w-[100%] flex flex-col  gap-2'>
                <Input
                    label="Brand Name*"
                    placeholder="Enter Your Product"
                    type="text"
                    value={product.brand_name}
                    onChange={(e) => handelInputs(e.target.value, 'brand_name')}
                />
                

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Select Category</span>
                    </div>
                    <select className="select  select-md rounded-md border border-black/30 px-3 py-2" onChange={(e) => handelInputs(e.target.value, 'category_id')}>
                        {
                            categories.map((item) => {
                                if (product.category_id === item.id) {
                                    return (
                                        <option value={item.id} selected>{item.category_name}</option>
                                    )
                                } else {
                                    return (
                                        <option value={item.id} >{item.category_name}</option>
                                    )
                                }
                            })
                        }
                    </select>
                </label>
                <Input
                    label="Product Name*"
                    placeholder="Enter Name of Product"
                    type="text"
                    value={product.name}
                    onChange={(e) => handelInputs(e.target.value, 'name')}
                />
                <Input
                    label="Short Name*"
                    placeholder="Enter short Name"
                    type="text"
                    value={product.short_name}
                    onChange={(e) => handelInputs(e.target.value, 'short_name')}
                />
                <Input
                    label="Search keyword*"
                    placeholder="Enter Search keyword"
                    type="text"
                    value={product.search_keywords}
                    onChange={(e) => handelInputs(e.target.value, 'search_keywords')}

                />
                <Input
                    label="Product Url*"
                    placeholder="Enter Product Url"
                    type="text"
                    value={product.product_url}
                    onChange={(e) => handelInputs(e.target.value, 'product_url')}
                />
                <Input
                    label="Product Default Price*"
                    placeholder="Enter price of your Product "
                    type="text"
                    value={deafultprice === null ? product.default_price + ".00" : deafultprice + ".00"}
                // onChange={(e) => handelInputs(e.target.value, 'default_price')}
                />
                
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text">Select Size</span>
                    </div>
                    <select className="select  select-md rounded-md border border-black/30 px-3 py-2" onChange={(e) => hanelPrice(e.target.value, product.id)}>
                        {
                            productsize.map((item) => {
                                if (product.default_size === item.size_value) {
                                    return (
                                        <option value={item.id + "@@@" + item.size_value+"@@@"+item.price} selected>{item.size_value >= 1000 ? item.size_value / 1000 + "L" : item.size_value + "ML"} </option>
                                    )
                                } else {
                                    return (
                                        <option value={item.id + "@@@" + item.size_value+"@@@"+item.price} >{item.size_value >= 1000 ? item.size_value / 1000 + "L" : item.size_value + "ML"}</option>
                                    )
                                }
                            })
                        }
                    </select>
                </label>
                <Input
                    label="Product Description*"
                    placeholder="Enter description of your Product "
                    type="text"
                    value={product.description}
                    onChange={(e) => handelInputs(e.target.value, 'description')}
                />
                <Input
                    label="Product Long Description*"
                    placeholder="Enter longdescription of your Product "
                    type="text"
                    value={product.long_description}
                    onChange={(e) => handelInputs(e.target.value, 'long_description')}
                />
                <Input
                    label="Product Image*"
                    placeholder="Enter Image Name "
                    type="text"
                    value={product.product_image}
                    onChange={(e) => handelInputs(e.target.value, 'long_description')}
                />
                <div className='w-full h-[50px] flex  items-center'>
                    <button type='button' className="btn btn-sm btn-success" onClick={() => updateproduct(product)}>Update</button>
                </div>
            </div>
            <div className='w-full  flex flex-col justify-start items-start gap-2 p-6'>
                <div className='border-2 rounded-md'>
                    <img src={`https://apsensyscare.com/Image/all_products/${product.product_image}`} alt="" srcSet="" />
                </div>

                <Image folder="all_products"/>
            </div>
        </div>
    )
}

export default ProductDetailsEdit