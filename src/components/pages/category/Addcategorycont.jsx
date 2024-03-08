import React,{useRef, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import AddCategoryDetailsEdit from './AddCategoryDetailsEdit';

function Addcategorycont() {
    const { id } = useParams();
    const ref = useRef()
    const [categoryclick, setCategoryclick] = useState('2');
    const handelclick = (ref) => { 
        setCategoryclick(ref)
    } 
  return (
    <div className='w-[calc(100vw_-_200px)] flex flex-col justify-start px-3'>
    <div className='w-[100%] border rounded-md p-2 flex justify-end  gap-y-2 mb-2'>
        <Link class="w-[10%] border flex flex-row justify-around cursor-pointer rounded-md hover:bg-[#ffb356] hover:text-[#fff] py-1" to={'/add-category'}>Add Category</Link>
    </div>
    <div className='w-full flex flex-col justify-start' action="" method="post">
        <div role="tablist" className="tabs tabs-lifted " >
           

            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Details"
                readOnly
                checked={categoryclick === '2' ? true : false}
                onClick={() => handelclick('2')}
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
                <div className='w-full flex flex-row flex-wrap justify-start items-start gap-2'>
                    <AddCategoryDetailsEdit />
                </div>
            </div>
            <input ref={ref} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="varity and sizing"
                readOnly checked={categoryclick === '3' ? true : false}
                onClick={() => handelclick('3')} />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] ">
                <div className='w-full  flex flex-col justify-start items-start gap-2 p-6'>
                    {/* components */}
                </div>
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab !w-max" aria-label="Magnifying Images"
                readOnly
                checked={categoryclick === '4' ? true : false}
                onClick={() => handelclick('4')}
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
                {/* components */}
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

export default Addcategorycont