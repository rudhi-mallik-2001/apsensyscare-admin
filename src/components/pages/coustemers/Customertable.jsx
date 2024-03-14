import React, { useEffect, useState } from 'react'
import { customerfetch } from '../../../api/Api'
import { useNavigate } from "react-router-dom";
export default function Customertable() {
    const navigate = useNavigate()
    const [coustemer, setcoustemer] = useState([])
    useEffect(() => {
        customerfetch("fetch")
            .then((res) => {
                setcoustemer(res);
                console.log(coustemer);
            

            })
    }, [])

    return (
        <>
            <div className="w-full">

                <table className="table border  ">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Refrence</th>
                            <th>Customer</th>
                            <th>Last seen</th>
                            <th>Orders</th>
                            <th>Total spend</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            coustemer.map((custmer, id) => {
                                return (

                                    <tr className="hover cursor-pointer" key={id} onClick={()=>navigate(`/customers/${custmer.userId}`)}>
                                        <td>
                                            <div className="text-sm font-medium text-gray-900">{++id}</div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-gray-900">{custmer.userId}</div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-gray-900">
                                                {custmer.f_name}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-gray-900">
                                                {custmer.last_seen}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-gray-900">
                                                {custmer.total_quantity}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-sm font-medium text-gray-900">
                                                {custmer.order_total}
                                            </div>
                                        </td>


                                    </tr>
                                )

                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}
