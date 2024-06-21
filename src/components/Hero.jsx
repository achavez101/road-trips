import React from 'react';
import heroImage from '../images/hero.jpeg';
// import {Link} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

// Places to Visit Headline

const Hero = () => {
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
    <div className='w-full h-screen'> 
      <img className='top-0 left-0 w-full h-screen object-cover' src={heroImage} />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md: left-[10%] max-w-[1100px] m-auto absolute p-4' >
          {/* <p>All Inclusive</p> */}
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl mt-20'>Places to Visit</h1>
            {/* <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>Sacramento</p> */}
            <p className=''>
                Embark on an unforgettable journey through California's diverse landscapes, from the 
                vibrant urban hub of Sacramento to the tranquil shores of Monterey Bay, the quaint 
                charm of Morro Bay, and the sunny shores of San Diego. Begin your adventure in 
                Sacramento, where history comes alive at the State Capitol and the captivating 
                Old Sacramento district. Then, head west towards the breathtaking coastline of 
                Monterey Bay, where you can explore the renowned Monterey Bay Aquarium and take a 
                cenic drive along the iconic 17-Mile Drive. Continue south to Morro Bay, a hidden 
                gem known for its iconic Morro Rock and picturesque harbor, perfect for leisurely 
                strolls and fresh seafood indulgence. Finally, bask in the sun-kissed beaches and 
                vibrant culture of San Diego, where you can surf the waves at Pacific Beach, and stroll 
                through Balboa Park's lush gardens. Each destination offers its own unique blend of 
                history, natural beauty, and vibrant culture, promising an enriching and unforgettable 
                journey through the Golden State.
            </p>
            <button className='bg-white text-black mt-3'><Link to="/destinations/highlights">Trending</Link></button>
        </div>
      </div>
    </div>
  )
};

export default Hero


// Places to Visit Paragraph
// a really nice area to see the capital and much more. Welcome to the adventures of the Chavez Girls. 
// They really enjoyed their time in Sacramento and can't wait to go there again. 
// There are not only adventures for kids but for adults as well. 
// From Old Town Sacramento to the Capital to the Museum to the Train, it is all amazing