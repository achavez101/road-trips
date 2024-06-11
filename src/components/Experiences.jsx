import React from 'react';
import sdCafe from '../images/sd-cafe.jpeg';
import oldTown from '../images/old-town-sac.jpeg';
import sdSeaport from '../images/sd-seaport-village.jpeg';
import elkGrove from '../images/elk-grove.jpeg';

const Experiences = () => {
  return (
    // look through experiences
    // 'max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4' 

// old
//'max-w-[1400px] h-full bg-blue-200 mx-auto my-20 pt-16 lg:mb-[20%] md:mb[35%] px-4 grid lg:grid-cols-3 gap-4 pb-2'

    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Experiences</h3>
            <p className='pt-4'>Enjoying the ride</p>
            <p>Experience the quintessential California journey with a whirlwind tour through Sacramento, 
                Morro Bay, Monterey Bay, San Diego, and Elk Grove. Whether you're captivated by the rich 
                history of the state's capital, Sacramento, or enchanted by the serene coastal vibes of 
                Morro Bay, each destination offers its own unique flavor of enjoyment. Dive into the 
                bustling streets of Monterey Bay, where marine life and maritime history converge, or 
                bask in the sun-kissed shores of San Diego, a paradise for beach lovers and adventure 
                seekers alike. And don't forget to explore Elk Grove's charming neighborhoods and vibrant 
                community spirit. With a tapestry of experiences waiting to be discovered, embark on a 
                journey through these captivating California destinations and let the adventure unfold.
            </p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full h-[50vh]' src={sdCafe} alt='San Diego Espresso Café'/>
            <img className='object-cover w-full h-full h-[50vh]' src={oldTown} alt='Old Town Sacramento'/>
            <img className='object-cover w-full h-full h-[50vh]' src={sdSeaport} alt='Seaport Village'/>
            <img className='object-cover w-full h-full h-[50vh]' src={elkGrove} alt='Elk Grove Hotel'/>
        </div>
    </div>
  )
}

export default Experiences