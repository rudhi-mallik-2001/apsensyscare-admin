import { useNavigate } from "react-router-dom";

const UpperBar = () => {
    const navigate = useNavigate()

    const handellogout=()=>{
        localStorage.removeItem('REFRESSTOKEN')
        navigate('/');
    }
    return (
        <div className="navbar bg-base-100 justify-between border-b-2 mb-2">
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000" className="inline-block w-5 h-5 "><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        {/* <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li> */}
                        <li onClick={handellogout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UpperBar;