import React from 'react'

export default function Customertable() {
    return (
        <div className="w-full">
            <table className="table border border-black ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Last seen</th>
                        <th>Orders</th>
                        <th>Total spend</th>
                        <th>Latest Purchase</th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover">
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        
                    </tr>
                    <tr className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                       
                    </tr>
                    <tr className="hover">
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
