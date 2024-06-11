import React from 'react';
import trip1 from '../images/trip1.JPG';
import trip2 from '../images/trip2.JPG';
import trip3 from '../images/trip3.JPG';
import trip4 from '../images/trip4.JPG';
import {Link} from 'react-router-dom';


const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* {Left Side} */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'> 
            <img className='row-span-3 object-cover w-full h-full p-2' src={trip1} alt="sunset cliffs"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={trip2} alt="la jolla cove"/>
            <img className='row-span-3 object-cover w-full h-full p-2' src={trip3} alt="la jolla"/>
            <img className='row-span-2 object-cover w-full h-full p-2' src={trip4} alt="san diego"/>
        </div>
        {/* {Right Side} */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Look through our Experiences</h3>
            <p className='text-2xl py-6'>We were able to make our last trip to San Diego and it was a success</p>
            <p className='pb-6'>Look for more information</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'><Link to="/story">Learn More</Link></button>
        </div>
        </div>
    </div>
  )
}

export default Plan