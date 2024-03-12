import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {

    const [selectedItem, setSelectedItem] = useState({
        current: "dashboard",
        order: false,
        product: false,
        category: false,
        customer: false,
        dashboard: true
    });
    const sidebarClick=(click)=>{
        const current=selectedItem.current
        if(selectedItem.current!==click)
            setSelectedItem((prev)=>({...prev,[click]:true,[current]:false,current:click}))
    }
    return (
        <div className='w-[200px] flex flex-col bg-[#dedede] border-r-2 p-2 pl-[24px] gap-2 font-medium'>
            <Link to="/" className={`w-full flex flex-row justify-start items-center gap-2 cursor-pointer hover:bg-[#f6f6f6] py-2 px-1 ${selectedItem.dashboard === true ? "border-l-4  border-indigo-500" : ""}`} onClick={() => sidebarClick("dashboard")}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#747475" className="bi bi-microsoft" viewBox="0 0 16 16">
                        <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
                    </svg>
                </div>
                <div>
                    <p>
                        Dashboard
                    </p>
                </div>
            </Link>
            <div className='w-full flex flex-row justify-start items-center gap-2'>
                <div className="collapse ">
                    <input type="checkbox" className='min-h-0' checked/>
                    <div className="flex flex-row collapse-title min-h-0 p-0 gap-3 py-2 px-1 hover:bg-[#f6f6f6] rounded-md">
                        <div className='w-auto '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
                                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                            </svg>
                        </div>
                        Sales
                    </div>
                    <div className="collapse-content flex flex-col gap-2 py-0">
                        <Link to="/commands" className={`w-full flex flex-row justify-start items-center gap-2 cursor-pointer hover:bg-[#f6f6f6] py-2 px-1 ${selectedItem.order === true ? "border-l-4  border-indigo-500" : ""}`} onClick={() => sidebarClick("order")}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stickies" viewBox="0 0 16 16">
                                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1z" />
                                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293z" />
                                </svg>
                            </span>
                            Orders
                        </Link>
                        {/* <Link to={'/category'} className='flex flex-row gap-2 cursor-pointer py-2 px-1 hover:bg-[#f6f6f6] rounded-md'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                                    <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                                </svg>
                            </span>
                            Category
                        </Link> */}
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-row justify-start items-center gap-2'>
                <div className="collapse ">
                    <input type="checkbox" className='min-h-0' checked/>
                    <div className="flex flex-row collapse-title min-h-0 p-0 gap-3 py-2 px-1  hover:bg-[#f6f6f6] rounded-md">
                        <div className='w-auto '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bookmark-plus" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                                <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4" />
                            </svg>
                        </div>
                        Catelogs
                    </div>
                    <div className="collapse-content flex flex-col gap-2 py-0">
                        <Link to="/products" className={`w-full flex flex-row justify-start items-center gap-2 cursor-pointer hover:bg-[#f6f6f6] py-2 px-1 ${selectedItem.product === true ? "border-l-4  border-indigo-500" : ""}`} onClick={() => sidebarClick("product")}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stickies" viewBox="0 0 16 16">
                                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1z" />
                                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293z" />
                                </svg>
                            </span>
                            Products
                        </Link>
                        <Link to={'/category'} className={`w-full flex flex-row justify-start items-center gap-2 cursor-pointer hover:bg-[#f6f6f6] py-2 px-1 ${selectedItem.category === true ? "border-l-4  border-indigo-500" : ""}`} onClick={() => sidebarClick("category")}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                                    <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                                </svg>
                            </span>
                            Category
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-row justify-start items-center gap-2'>
                <div className="collapse py-2">
                    <input type="checkbox" className='min-h-0' />
                    <Link to="/customers" className={`w-full flex flex-row justify-start items-center gap-2 cursor-pointer hover:bg-[#f6f6f6] py-2 px-1 ${selectedItem.customer === true ? "border-l-4  border-indigo-500" : ""}`} onClick={() => sidebarClick("customer")}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                            </svg>
                        </div>
                        <div>
                            <p>
                                Customer
                            </p>
                        </div>
                    </Link>
                    {/* <div className="collapse-content flex flex-col gap-2">
                        <div className='flex flex-row gap-2 cursor-pointer pt-3'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stickies" viewBox="0 0 16 16">
                                    <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1z" />
                                    <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293z" />
                                </svg>
                            </span>
                            Products
                        </div>
                        <div className='flex flex-row gap-2 cursor-pointer'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16">
                                    <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                                    <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                                </svg>
                            </span>
                            Category
                        </div>
                    </div> */}
                </div>
            </div>


        </div>
    )
}

export default SideBar