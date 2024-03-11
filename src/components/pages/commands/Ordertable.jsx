import React, { useEffect, useState } from 'react';
import { orderCommand } from '../../../api/Api';


export default function Ordertable() {
    const [ordertable, setOrdertable] = useState([])
    useEffect(() => {
        orderCommand("ordered")
          .then((res) => {
            // setOrdertable(res)
          })
      }, [])
    return (
        <div className='w-full flex flex-col'>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                 
                    <tr>
                        <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                            <span>Date</span>
                        </th>
                        <th
                            scope="col"
                            className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                            Refernce
                        </th>

                        <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                            Customer
                        </th>

                        <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                            Address
                        </th>
                        <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                            Nb Item
                        </th>
                        <th
                            scope="col"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                            Total
                        </th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                    {ordertable.map((data) => (
                        <tr key={data.order_date}>
                            <td className="whitespace-nowrap px-4 py-4">
                                <div className="flex items-center">
                                    <div className="text-sm font-medium text-gray-900">{data.order_date}</div>
                                    {/* <div className="h-10 w-10 flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full object-cover"
                                            src={person.image}
                                            alt=""
                                        />
                                    </div> */}
                                    {/* <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">{person.name}</div>
                                        <div className="text-sm text-gray-700">{person.email}</div>
                                    </div> */}
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-12 py-4">
                                <div className="text-sm text-gray-900 ">{data.order_date}</div>

                            </td>
                            <td className="whitespace-nowrap px-4 py-4">
                                <div className="text-sm text-gray-900 ">{data.order_date}</div>

                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                {data.order_date}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4  text-sm font-medium">
                                {data.order_date}

                            </td>
                            <td className="whitespace-nowrap px-4 py-4  text-sm font-medium">
                                {data.order_date}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex items-center justify-center pt-6">
                <a href="#" className="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900">
                    <span className="hidden lg:block">&larr; Previous</span>
                    <span className="block lg:hidden">&larr;</span>
                </a>
                <a
                    href="#"
                    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
                >
                    1
                </a>
                <a
                    href="#"
                    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
                >
                    2
                </a>
                <a
                    href="#"
                    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
                >
                    3
                </a>
                <a
                    href="#"
                    className="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
                >
                    4
                </a>
                <a href="#" className="mx-2 text-sm font-semibold text-gray-900">
                    <span className="hidden lg:block">Next &rarr;</span>
                    <span className="block lg:hidden">&rarr;</span>
                </a>
            </div>
        </div>
    )
}
