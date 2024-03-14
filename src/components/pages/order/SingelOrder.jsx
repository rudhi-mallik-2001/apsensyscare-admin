import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchorderDetails, Updatestatus } from '../../index'

const SingelOrder = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [orderDetails, setOrderDetails] = useState({})
  const [userDetails, setUserDetails] = useState({})
  const [order_lineDetails, setorder_lineDetails] = useState([])
  const [addressDetails, setAddressDetails] = useState({})
  const [updateproduct, setUpdateproduct] = useState({
    order_id: "",
    status: ""
  })
  useEffect(() => {
    fetchorderDetails({order_id:id}).then((res) => {
      setOrderDetails(res.shoporder[0])
      setUserDetails(res.user[0])
      setorder_lineDetails(res.order_line)
      setAddressDetails(res.address[0])
    })
  }, [id])
  const updateclick = () => {
    Updatestatus(updateproduct).then(() => {
      // console.log("clicking");
      toast.success('Update Success')
    })
  }
  console.log("submitted", updateproduct);
  // console.log(userDetails)
  console.log(orderDetails)
  const handleChange = (e) => {
    setUpdateproduct((prev) => ({ ...prev, status: e.target.value }))
    setUpdateproduct((prev) => ({ ...prev, order_id: orderDetails.order_id }))
  }
  return (
    <div className='w-full flex flex-col justify-start items-start px-2'>
      <div className='w-full lg:w-[50%] flex flex-col justify-start gap-2 '>
        <div className='w-full flex flex-col justify-start border-2 rounded-md p-2'>
          <div className='w-full flex flex-row justify-between items-start px-4 py-4'>
            <div className='w-[30%] flex flex-col'>
              <h2 className='font-bold text-[20px]'>Order</h2>
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Status</span>
                  </div>
                  <select className="select select-bordered" onChange={(e) => handleChange(e)}>
                    <option disabled selected>Pick one</option>
                    {
                      orderDetails.order_status === "payment pending" ? <option value="payment pending" selected>Pending</option> : <option value="payment pending">Pending</option>
                    }
                    {
                      orderDetails.order_status === 'payment_success' ? <option value="payment_success" selected>Ordered</option> : <option value="payment_success">Ordered</option>
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
              <a href={`mailto:${decodeURIComponent(userDetails.email_address)}`} className='text-[blue] font-semibold	'>
                {decodeURIComponent(userDetails.email_address)}
              </a>
              <h2 className='font-bold text-[20px]'>Shipping Address</h2>
              <p class="text-sm md:text-base ">
                {addressDetails.name},{addressDetails.contact},<br />
                {addressDetails.house_flat_office},<br />{addressDetails.area_landmark},<br />{addressDetails.city},{addressDetails.state},{addressDetails.pincode}
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
                          <tr key={product.id} className='hover:bg-[#f6f6f6] cursor-pointer' onClick={()=>navigate(`../../products/edit/${product.id}`)}>
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
              <div className='font-bold'>Price</div>
              <div className='font-bold'>{orderDetails.order_total}.00</div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-row justify-between border-2 rounded-md p-2'>
          {
            updateproduct.order_id !== "" ? updateproduct.status!== orderDetails.order_status?
              <button className="py-2 px-5 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-400 focus:ring-opacity-75" onClick={updateclick}>Update</button>:<button className="py-2 px-5 btn-active btn-ghost btn-disabled text-[#000] font-semibold rounded-full " onClick={updateclick}>Update</button> :
              <button className="py-2 px-5 btn-active btn-ghost btn-disabled text-[#000] font-semibold rounded-full " onClick={updateclick}>Update</button>}
          <button className="btn btn-error text-white font-semibold rounded-full shadow-md" >Delete</button>
        </div>
      </div>
    </div>
  )
}

export default SingelOrder