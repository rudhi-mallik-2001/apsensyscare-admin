import React, { useState } from 'react'
import { Addproductvarities } from '../../index'
import Sizingtable from './Sizingtable'

function Varitysizingimage() {
    const [isadded,setIsadded]=useState(false)
    const updatestatus=()=>{
        setIsadded((prev)=>!prev)
    }
    return (
        <div className='w-full flex flex-col justify-start items-start  gap-2 '>
            <div className='w-full flex flex-row justify-start items-start  gap-2 '>
                <Addproductvarities  updatestatus={updatestatus}/>
            </div>
            <Sizingtable isadded={isadded} updatestatus={updatestatus}/>
        </div>
    )
}

export default Varitysizingimage 