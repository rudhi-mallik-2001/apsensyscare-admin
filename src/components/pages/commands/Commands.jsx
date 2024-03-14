import { useState } from "react";
import Ordertable from "./Ordertable";
import Deliveredtable from "./Deliveredtable";
import Tablecanceled from "./Tablecanceled";

const people = [
  {
    Date: '3-11-24',
    Refrence: '1AZRTU',
    Customer: 'John ',
    Address: 'john@devui.com',
    Item: '2',
    // image:
    //   'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    total: '785.00'
  },
  {
    Date: '3-11-24',
    Refrence: 'FFWOWO',
    Customer: 'jane',
    Address: 'jane@devui.com',
    Item: '4',
    total: '985.00'

    // image:
    //   'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
]

const Commands = () => {
  const [clicktab, setClicktab] = useState('2');

  const handelclick = (ref) => {
    setClicktab(ref)
  }
  return (
    <>
      <div className='w-full p-3'>

        <div className='w-full flex flex-col justify-start' action="" method="post">
          <div role="tablist" className="tabs tabs-lifted " >


            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="ORDERED"
              readOnly
              checked={clicktab === '2' ? true : false}
              onClick={() => handelclick('2')}
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
              <div className='w-full flex flex-row flex-wrap justify-start items-start gap-2'>
                <Ordertable people={people} />

              </div>
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="DELIVERED"
              readOnly
              checked={clicktab === '3' ? true : false}
              onClick={() => handelclick('3')}
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
              <div className='w-full flex flex-row flex-wrap justify-start items-start gap-2'>
                <Deliveredtable people={people} />

              </div>
            </div>
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="CANCELED"
              readOnly
              checked={clicktab === '4' ? true : false}
              onClick={() => handelclick('4')}
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box rounded-b-[0px] p-6">
              <div className='w-full flex flex-row flex-wrap justify-start items-start gap-2'>
               <Tablecanceled people={people}/>

              </div>
            </div>

          </div>
          <div className='flex flex-row justify-between bg-[#d9d9d9] px-6 py-3 rounded-b-[10px]'>
            {/* <button className="btn btn-sm btn-success">Success</button> */}
            {/* <button className="btn btn-sm btn-error">Delete</button> */}
          </div>
        </div>

        <section className="mx-auto w-full max-w-7xl px-4 py-4">

          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                {/* <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                </div> */}
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}

export default Commands;