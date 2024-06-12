import React from 'react';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';

// Destinations

const DestinationPage = () => {
  (() => {
    if (window.localStorage) {

        // If there is no item as 'reload'
        // in localstorage then create one &
        // reload the page
        if (!localStorage.getItem('reload')) {
            localStorage['reload'] = true;
            window.location.reload();
        } else {

            // If there exists a 'reload' item
            // then clear the 'reload' item in
            // local storage
            localStorage.removeItem('reload');
        }
    }
    })();
  return (
    <div>
        <ul className= 'border-gray-200 bg-sky-500 '>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1'>
            <li className='font-bold text-md md:text-lg p-5'><Link to="/">Home</Link></li>
            <li className='font-bold text-md md:text-lg p-5'><Link to="/destinations">Destinations</Link></li>
            <li className='font-bold text-md md:text-lg p-5'><Link to="/story">Story</Link></li>
            <li className='font-bold text-md md:text-lg p-5'><Link to="/pictures">Pictures</Link></li>
            <li className='font-bold text-md md:text-lg p-5'><Link to="/contact">Contact</Link></li>
            </div>
        </ul>
        <Navbar></Navbar>
        <Slider></Slider>
    </div>
  )
}

export default DestinationPage