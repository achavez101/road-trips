import React from 'react';
import heroImage from '../images/hero.JPG';
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full h-screen'> 
      <img className='top-0 left-0 w-full h-screen object-cover' src={heroImage} />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md: left-[10%] max-w-[1100px] m-auto absolute p-4' >
          <p>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Places to Visit</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Sacramento</p>
            <p>a really nice area to see the capital and much more. Welcome to the adventures of the Chavez Girls. 
              They really enjoyed their time in Sacramento and can't wait to go there again. 
              There are not only adventures for kids but for adults as well. 
              From Old Town Sacramento to the Capital to the Museum to the Train, it is all amazing
            </p>
            <button className='bg-white text-black'><Link to="/destinations">Trending</Link></button>
        </div>
      </div>
    </div>
  )
};

export default Hero

