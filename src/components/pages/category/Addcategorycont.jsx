import React,{useState} from 'react'
import { Input,Addcategory, Image } from '../../index'
import { toast } from 'react-toastify'
function Addcategorycont() {
    const keys={
        category_name:"",
        category_url:"",
        category_img:"",
        category_title:"",
        category_des:"",
        topsellers:"",
        topsellers_desc:"",
        top_product:"",
        
    }
    const [addcategory, setAddcategory] = useState(keys)
    const handleclick=(values,key)=>{
        // console.log("Added");
        setAddcategory((prev)=>({...prev,[key]:values}))
    }
    const handleSubmit = () => {
        Addcategory(addcategory).then((res)=>{
            console.log(res);
            toast("Insert success");
        })
        console.log("Submitted:", addcategory);
    };
  return (
    <div className='w-[98%] p-2 flex flex-row  gap-2 border rounded-md'>
         <div className='w-[50%]'>
                <Input
                    label="Category Name*"
                    placeholder="Enter Your Product"
                    type="text"
                    onChange={(e) => handleclick(e.target.value, 'category_name')}

                />
                <Input
                    label="category url*"
                    placeholder="Enter category url"
                    type="text"
                    onChange={(e) => handleclick(e.target.value, 'category_url')}
                    />

                <Input
                    label="category title*"
                    placeholder="Enter category title"
                    type="text"
                    onChange={(e) => handleclick(e.target.value, 'category_title')}            

                />
              
                <Input
                    label="category image*"
                    placeholder="Enter category image"
                    type="text"
                    onChange={(e) => handleclick(e.target.value, 'category_img')}
                />
                <Input
                    label="top seller*"
                    placeholder="Enter topsellers"
                    type="text"
                    onChange={(e) => handleclick(e.target.value, 'topsellers')}
                />
                  <Input
                    label="Top Seller Description*"
                    placeholder="Enter descripption"
                    type="text"
                    onChange={(e) => handleclick(e.target.value, 'topsellers_desc')}
                />
                <Input
                    label="top product*"
                    placeholder="Enter topproduct"
                    type="text"
                    onChange={(e) => handleclick(e.target.value, 'top_product')}
                />
                <Input
                    label="category description*"
                    placeholder="Enter category description "
                    type="text"
                    onChange={(e) => handleclick(e.target.value, 'category_des')}
                />

                <div className='w-full h-[50px] flex  items-center'>
                    <button type='button' className="btn btn-sm btn-success" onClick={handleSubmit}>Add Category </button>
                </div>
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

export default Addcategorycont