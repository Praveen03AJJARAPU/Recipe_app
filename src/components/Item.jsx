import React from 'react'
import pic from './profile.jpg'
import { Link, useNavigate } from 'react-router-dom';


const Item = ({ val }) => {
  const navigate = useNavigate();
  const updateHandler = () => {
    console.log('HI');
    navigate(`/Details/${val.recipe.label}`)
  }
  return (
      <div className="component bg-slate text-slate-700 m-5 rounded-2xl overflow-hidden hover:scale-105 ease-linear duration-200 shadow-2xl">
        <img src={val.recipe.image} alt="" className=" object-contain" />
        <div className="p-5">
          <p className="text-xl mb-1">{val.recipe.label.slice(0,25) + '...'}</p>
          <p className="text-xl mb-2 capitalize ">Cuisine: {val.recipe.cuisineType[0]}</p>
          <div className="cuisine flex justify-between mb-3">
            <p className='capitalize'>{val.recipe.dishType[0]}</p>
            <p>{val.recipe.dietLabels[0]}</p>
          </div>
          <div className="flex justify-between">
            <p>Calories: {Math.round(val.recipe.calories)}</p>
          <button onClick={updateHandler} className='bg-black text-slate-300 font-sans px-5 py-1'>Details</button>
          </div>
        </div>
      </div>
    
   
  );
}

export default Item;