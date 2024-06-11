import React from 'react';
import {Link} from 'react-router-dom';

// Pictures

const Pictures = () => {
  return (
    <div>
            <ul className= 'border-gray-200 bg-sky-500 '>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <li className='font-bold text-3xl p-8'><Link to="/">Home</Link></li>
            <li className='font-bold text-3xl p-8'><Link to="/destinations">Destinations</Link></li>
            <li className='font-bold text-3xl p-8'><Link to="/story">Story</Link></li>
            <li className='font-bold text-3xl p-8'><Link to="/pictures">Pictures</Link></li>
            <li className='font-bold text-3xl p-8'><Link to="/contact">Contact</Link></li>
            </div>
        </ul>
    </div>
  )
}

export default Pictures