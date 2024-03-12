import React, {  useState } from 'react'
import { Input,Addsize } from '../../index'
import { toast } from 'react-toastify'


export default function Addproductsize() {
    const size={
        size_value:""
    }
    const [sizeadd, setSizeadd] = useState(size)
    const Addsizeclick=()=>{
            // console.log("clicking");
            if(sizeadd.size_value!=""){
                Addsize(sizeadd).then((res)=>{
                    toast.success('Update Success')
                    setSizeadd(size)
                })
            }else{
                toast.warn("check")
            }
        console.log("submitted", sizeadd);

    }
    const handlesize = (val, key) => {
        setSizeadd((prev) => ({ ...prev, [key]: val }))
    }
    return (
        <div className='w-[98%] p-2 flex flex-row  gap-4 border rounded-md gap-y-6'>
            <div className='w-[50%]'>
                <Input
                    label="Enter Size*"
                    placeholder="Enter Product Size"
                    type="text"
                    
                    onChange={(e) => handlesize(e.target.value, 'size_value')}
                />
           
            </div>
            <div className='w-full h-[50px] flex  items-center mt-4'>
                    <button type='button' className="btn btn-sm btn-success" onClick={Addsizeclick}>Add Size </button>
                </div>
        </div>
    )
}
