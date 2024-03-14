import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {  ProductDetailsEdit, fetchProductdetailsById } from "../../index"
import Magnifingimage from './Magnifingimage';
import Varitysizingimage from './Varitysizingimage';
// import Addproductcont from './Addproductcont';
const ProductEdit = () => {
    const { id } = useParams();
    // console.log(id);
    const ref = useRef()
    const [clicktab, setClicktab] = useState('2');
    const [details, setDetails] = useState({});
    const handelclick = (ref) => { 
        setClicktab(ref)
    } 
    useEffect(() => {
        fetchProductdetailsById(id).then((res) => { 
            setDetails(res[0]);
        }) 
    }, [id])

    const updateDetails = (value, key) => {
        setDetails((prev) => { return { ...prev, [key]: value } });
    }
 
 
    return (
        <div className='w-[calc(100vw_-_200px)] flex flex-col justify-start px-3'>
            <div className='w-[100%] border rounded-md p-2 flex justify-end  gap-y-2 mb-2'>
                <Link class="w-[10%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1" to={'/add-product'}>Add Product</Link>
            </div> 
            <div className='w-full flex flex-col justify-start' action="" method="post">
                <div role="tablist" className="tabs tabs-lifted " >
                   

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Details"
                        readOnly
                        checked={clicktab === '2' ? true : false}
                        onClick={() => handelclick('2')}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
                        <div className='w-full flex flex-row flex-wrap justify-start items-start gap-2'>
                            <ProductDetailsEdit product={details} updateDetails={updateDetails} />
                        </div>
                    </div> 
                    <input ref={ref} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="varity and sizing"
                        readOnly checked={clicktab === '3' ? true : false}
                        onClick={() => handelclick('3')} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] ">
                        <div className='w-full  flex flex-col justify-start items-start gap-2 p-6'>
                            <Varitysizingimage  /> 
                        </div>
                    </div>
                    <input type="radio" name="my_tabs_2" role="tab" className="tab !w-max" aria-label="Magnifying Images"
                        readOnly
                        checked={clicktab === '4' ? true : false}
                        onClick={() => handelclick('4')}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
                        <Magnifingimage />
                    </div>
                 

                </div>
                <div className='flex flex-row justify-between bg-[#d9d9d9] px-6 py-3 rounded-b-[10px]'>
                    {/* <button className="btn btn-sm btn-success">Success</button> */}
                    <button className="btn btn-sm btn-error">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default ProductEdit 