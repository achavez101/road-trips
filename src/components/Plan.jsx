import React from 'react';
import trip1 from '../images/trip1.JPG';
import trip2 from '../images/trip2.JPG';
import trip3 from '../images/trip3.JPG';
import trip4 from '../images/trip4.JPG';
import {Link} from 'react-router-dom';

// Scenery

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* {Right Side} */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Scenery</h3>
            <p className='text-2xl py-6'>Featured are San Diego Images</p>
            <p className='pb-6'>Take a Tour through the various sights California has to offer.</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'><Link to="/story">Learn More</Link></button>
        </div>
        </div>


        {/* {Left Side} */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'> 
            <img className='row-span-3 object-cover w-full h-full p-2' src={trip1} alt="sunset cliffs"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={trip2} alt="la jolla cove"/>
            <img className='row-span-3 object-cover w-full h-full p-2' src={trip3} alt="la jolla"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={trip4} alt="san diego"/>
        </div>
    </div>
  )
}

export default Plan