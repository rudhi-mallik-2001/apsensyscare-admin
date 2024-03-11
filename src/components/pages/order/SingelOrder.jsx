import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchorderDetails } from '../../index'
const people = [
  {
    name: 'John Doe',
    title: 'Front-end Developer',
    department: 'Engineering',
    email: 'john@devui.com',
    role: 'Developer',
    image:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    name: 'Jane Doe',
    title: 'Back-end Developer',
    department: 'Engineering',
    email: 'jane@devui.com',
    role: 'CTO',
    image:
      'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
]

const SingelOrder = () => {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState({})
  const [userDetails, setUserDetails] = useState({})
  const [order_lineDetails, setorder_lineDetails] = useState([])
  const [addressDetails, setAddressDetails] = useState({})
  useEffect(() => {
    fetchorderDetails(id).then((res) => {
      setOrderDetails(res.shoporder[0])
      setUserDetails(res.user[0])
      setorder_lineDetails(res.order_line)
      setAddressDetails(res.address[0])
    })
  }, [id])
  console.log(orderDetails)
  return (
    <div className='w-full flex justify-start items-start px-2'>
      <div className='w-full lg:w-[50%] flex flex-col justify-start border-2 rounded-md p-2'>

        <div className='w-full flex flex-row justify-between items-start px-4 py-4'>
          <div className='w-[30%] flex flex-col'>
            <h2 className='font-bold text-[20px]'>Order</h2>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Status</span>
                </div>
                <select className="select select-bordered">
                  <option disabled selected>Pick one</option>
                  {
                    orderDetails.order_status === 'pending' ? <option value="pending" selected>Pending</option> : <option value="pending">Pending</option>
                  }
                  {
                    orderDetails.order_status === 'delivered' ? <option value="delivered" selected>Delivered</option> : <option value="delivered">Delivered</option>
                  }
                  {
                    orderDetails.order_status === 'return' ? <option value="return" selected>Return</option> : <option value="return">Return</option>
                  }
                  {
                    orderDetails.order_status === 'cancelled' ? <option value="cancelled" selected>Cancelled</option> : <option value="cancelled">Cancelled</option>
                  }
                  {
                    orderDetails.order_status === 'other' ? <option value="other" selected>Other</option> : <option value="other">Other</option>
                  }

                </select>
              </label>
            </div>
          </div>
          <div className='w-[30%]'>
            <h2 className='font-bold text-[20px]'>
              Referance
            </h2>
            <p>
              {orderDetails?.order_id}
            </p>
            {/* <h2 className='font-bold text-[20px]'>Return</h2>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Returned</span>
                <input type="checkbox" className="toggle" />
              </label>
            </div> */}

          </div>
          <div className='w-[30%] flex flex-col'>
            <h2 className='font-bold text-[20px]'>Customer</h2>
            <p className='text-[blue] font-semibold	'>{userDetails.f_name}</p>
            <a  href={`mailto:${decodeURIComponent(userDetails.email_address)}`} className='text-[blue] font-semibold	'>
              {decodeURIComponent(userDetails.email_address)}
              </a>
            <h2 className='font-bold text-[20px]'>Shipping Address</h2>
            <p class="text-sm md:text-base ">
              {addressDetails.name},{addressDetails.contact},<br/>
              {addressDetails.house_flat_office},<br/>{addressDetails.area_landmark},<br/>{addressDetails.city},{addressDetails.state},{addressDetails.pincode}
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-5 ">
          <h2 className='font-bold text-[20px]'>
            Items
          </h2>
        </div>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          <span>Product</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Title
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Price
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Quantity
                        </th>
                        <th scope="col" className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {order_lineDetails.map((product) => (
                        <tr key={product.id} className='hover:bg-[#f6f6f6] cursor-pointer'>
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-12 w-12 rounded-full object-cover"
                                  src={`https://apsensyscare.com/Image/all_products/${product.product_image}`}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900 ">{product.name}</div>
                            <div className="text-sm text-gray-700">{product.department}</div>
                          </td>
                          <td className="whitespace-nowrap px-4 py-4">
                            {product.ordered_price}.00
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                            {product.quantity}
                          </td>
                          <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                            {product.ordered_price * product.quantity}.00
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='w-full flex flex-col justify-start items-start px-4 py-4 gap-2'>
          <h2 className='font-bold text-[20px]'>Total</h2>
          <div className='w-full flex flex-row justify-between items-center'>
            <div>price</div>
            <div>{orderDetails.order_total}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingelOrder