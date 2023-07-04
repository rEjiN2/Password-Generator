import React,{ useContext } from 'react'
import axios from '../Utils/axios'
import ResponseContext from "../Context/ResponseContext"


function Main() {

  const { response } = useContext(ResponseContext);
      
  return (
    <div className="flex justify-center items-center mt-8 w-50 h-20 bg-white relative">
      <div className="input-group flex items-center">
        <input
          type="text"
          className="px-8 py-2 w-full border border-gray-300 rounded"
          value={response || ''}
          readOnly
        />
        <span className="input-icon text-gray-600 text-3xl ml-2 cursor-pointer" title="Copy">
          &#x2398;
        </span>
        <span className="input-icon text-gray-600 text-3xl ml-2 cursor-pointer" title="Refresh">
          &#x21BB;
        </span>
      </div>
    </div>
  )
}

export default Main