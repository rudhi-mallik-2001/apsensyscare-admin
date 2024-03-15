import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryDetailsEdit,fetchCategoryById } from "../../index"
import { Link } from 'react-router-dom'

const CategoryEdit = () => {
    const { id } = useParams();
    // console.log(id);
    const ref = useRef()
    const [clicktab, setClicktab] = useState('2');
    const[categorydetails,setCategorydetails]=useState({});
    const handelclick = (ref) => {
        setClicktab(ref)
    } 
    useEffect(() => {
      fetchCategoryById(id).then((res) => {  
          console.log('called')
          setCategorydetails(res[0]);
      })
  }, [id])
    const updateCategory = (value, key) => {
      setCategorydetails((prev) => { return { ...prev, [key]: value } }); 
  }
    return (
        <div className='w-full p-3'> 
         <div className='w-[100%] border rounded-md p-2 flex justify-end  gap-y-2 mb-2'>
                <Link class="w-[10%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1" to={'/add-category'}>Add Category</Link>
            </div>

            <div className='w-full flex flex-col justify-start' action="" method="post">
                <div role="tablist" className="tabs tabs-lifted " >
                    

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Category Details"
                        readOnly
                        checked={clicktab === '2' ? true : false}
                        onClick={() => handelclick('2')}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
                        <div className='w-full flex flex-row flex-wrap justify-start items-start gap-2'>
                           <CategoryDetailsEdit category={categorydetails} updateCategory={updateCategory} />
                        </div>
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

export default CategoryEdit 