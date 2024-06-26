import React, {useState} from 'react';
import { TfiMenu } from 'react-icons/tfi';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }

  return (
    <div className='absolute w-full flex justify-between p-4 items-center '>
        <h1 className='text-white font-bold text-2xl z-20'><Link to="/destinations">Experiences</Link></h1>
        <TfiMenu onClick={handleNav} className='z-20 text-white cursor-pointer mt-3' size={25} />
        <div 
            className={
                nav 
                    ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' 
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
                } 
        >
            <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                <li className='font-bold text-3xl p-8'><Link to="/">Home</Link></li>
                <li className='font-bold text-3xl p-8'><Link to="/destinations">Destinations</Link></li>
                <li className='font-bold text-3xl p-8'><Link to="/story">Story</Link></li>
            <li className='font-bold text-3xl p-8'><Link to="/pictures">Pictures</Link></li>
            <li className='font-bold text-3xl p-8'><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar