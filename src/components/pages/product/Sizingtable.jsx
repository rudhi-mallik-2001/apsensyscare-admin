import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductSizes,deleteproductvarity } from '../../index';
import { toast } from 'react-toastify';

function Sizingtable({isadded,updatestatus}) {
    const { id } = useParams();

    const [productsize, setProductsize] = useState([])
    const deleteClick =(id)=>{
        deleteproductvarity(id).then((res)=>{
            toast.success("Delete Success")
            updatestatus()
        })
    }
    useEffect(() => {
        getProductSizes(id).then((res) => {
            setProductsize(res)
        })
    }, [id,isadded])

    return (
        <div className='w-full'>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Size
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Stock
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        productsize.map((item) => {
                            return (
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.size_value}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.stock_qty}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <a href="#" className="text-red-600 hover:text-red-900" onClick={()=>deleteClick(item.id)}>Delete</a>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </table>

        </div>
    )
}

export default Sizingtable