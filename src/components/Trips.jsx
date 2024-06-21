import React from 'react';
import {Link} from 'react-router-dom';

const Trips = () => {
  return (
    <div className='max-w-[900px] m-auto px-4 py-12 flex-wrap justify-between'>
        <p className='text-lg font-bold text-gray-700'><Link to='/destinations'>Location</Link>s</p>
        <p className='text-lg font-bold text-gray-700'>Experiences</p>
    </div>
  )
}

export default Trips