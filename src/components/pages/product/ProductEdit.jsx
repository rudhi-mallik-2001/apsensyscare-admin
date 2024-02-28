import React, { useRef, useState } from 'react'

const ProductEdit = () => {
    const ref = useRef()
    const [clicktab, setClicktab] = useState('1')
    const handelclick = (ref) => {
        setClicktab(ref)
    }
    return (
        <div className='w-full'>
            <form className='w-full flex flex-col justify-start' action="" method="post">
                <div role="tablist" className="tabs tabs-lifted " >
                    <input ref={ref} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1"
                        readOnly checked={clicktab === '1' ? true : false}
                        onClick={() => handelclick('1')} />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] ">
                        <div className='w-full  flex flex-col justify-start items-start gap-2 p-6'>
                            <div className='w-[100px] h-[100px] bg-[red]'>
                                <img src="" alt="" srcset="" />
                            </div>
                            <div>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" placeholder="Daisy" />
                            </div>
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2"
                        readOnly
                        checked={clicktab === '2' ? true : false}
                        onClick={() => handelclick('2')}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">Tab content 2</div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3"
                        readOnly
                        checked={clicktab === '3' ? true : false}
                        onClick={() => handelclick('3')}
                    />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">Tab content 3</div>
                </div>
                <div className='flex flex-row justify-between bg-[#d9d9d9] px-6 py-3 rounded-b-[10px]'>
                    <button className="btn btn-sm btn-success">Success</button>
                    <button className="btn btn-sm btn-error">Delete</button>
                </div>
            </form>
        </div>
    )
}

export default ProductEdit