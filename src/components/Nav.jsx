import React from 'react'
import { useEffect, useState } from 'react'
import { FaSistrix } from "react-icons/fa";
import List from './List';
const Nav = () => {

    const [input, setInput] = useState('paneer');
  const [data, setData] = useState([]);


  const API_ID = 'eda84208';
  const API_KEY = '83c134fe67531dc0113e517de409239d';

  

  const fetchIt = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${input}&app_id=${API_ID}&app_key=${API_KEY}`);
    const info = await response.json();
    setData(info.hits);
  }

  const handleUpdate = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    fetchIt();
  },[input])

    return (
      <>
        <div className="flex p-10 justify-between bg-black text-slate-200 items-center sm:p-4">
          <div className="logo text-3xl sm:text-xl font-mono">
            <p>RecShots</p>
          </div>
          <div className="search flex justify-center items-center">
            <form action="#">
              <input
                type="text"
                name=""
                id=""
                className="w-72 py-1 px-4 text-black md:w-52 sm:w-44 xs:w-20"
                placeholder="Search here..."
                onChange={handleUpdate}
                value={input}
              />
            </form>
            <button className="p-2">
              <FaSistrix></FaSistrix>
            </button>
          </div>
        </div>
        <List data={data} />
      </>
    );
}

export default Nav