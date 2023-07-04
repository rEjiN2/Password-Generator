import React, { useState ,useContext } from 'react';
import axios from "../Utils/axios"
import ResponseContext from "../Context/ResponseContext"

function Sub() {
  const [length, setLength] = useState(0);
  const { setResponse } = useContext(ResponseContext);

  const handleSliderChange = (event) => {
    const newValue = event.target.value;
    setLength(newValue);
  };

  const handleInputChange = async(event) => {
    let newValue = event.target.value;
    if (newValue > 30) {
      newValue = 30; 
    }
    setLength(newValue);
  };
  const handleSubmit  = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/getPassword', {
        passwordLength: length,
      });
      setResponse(response.data.password);
      
     
    } catch (err) {
    console.log(err);
    }
  }

  return (
    <div className="p-8 w-50 mt-8 h-50 bg-zinc-500 flex flex-col items-center justify-center">
      <h1>Customize your Length</h1>
      <br />
      <input
        type="number"
        className="w-12"
        value={length}
        onChange={handleInputChange}
        max={30} 
      />
      <br />
      <input
        type="range"
        className="range-slider"
        value={length}
        onChange={handleSliderChange}
        max={30} 
      />
      <button onClick={handleSubmit} >Submit</button>
    </div>
  );
}

export default Sub;
