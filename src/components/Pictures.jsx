import React, {useState} from 'react';

import Hero from '../images/hero.JPG'

import aguilarFamily from '../images/aguilarFamily.jpg'

import centennialPark from '../images/centennialPark.JPG'
// done
import imperial from '../images/imperialBeach.JPG'

import laJolla from '../images/laJolla.JPG'

import laJolla2 from '../images/laJolla2.JPG'

import cove from '../images/laJollaCove.JPG'

//done
import littleItaly from '../images/littleItaly.JPG'
//done
import littleItaly2 from '../images/littleItaly2.JPG'

import oldTown from '../images/oldTown.JPG'

import townBeca from '../images/oldTownBeca.jpg'

import townRose from '../images/oldTownRose.jpg'

import sdPier from '../images/sdPier.JPG'
//done
import seaport2 from '../images/seaport2.JPG'

import seaportFriends from '../images/seaportFriends.jpg'

import seaportMore from '../images/seaportMore.JPG'


// const Pictures = () => {
//   return (
//     <div>
//         {/* San Diego Pictures Section */}
//         <h3 className='text-2xl font-bold p-2'>San Diego</h3>
        
//         {/* div for picture start so that they wrap */}
//         <div className='flex flex-wrap p-2'>

//         {/* seaport image */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image Seaport */}
//         <img src={coronado} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 SeaPort Village
//             </div>
//             <ul>
//                 <li>
//                     <strong>Beautiful place to enjoy the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={laJolla} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 La Jolla
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={cove} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 La Jolla Cove
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={littleItaly} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 Little Italy
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={seaport2} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 SeaPort Village
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={sdPier} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 San Diego Pier
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={oldTown} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 Old Town San Diego
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}


//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={Hero} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 SeaPort Village
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}


//          {/* next start */}
//          <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={townBeca} alt='' loading='eager' className='w-full mt-8'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 Old Town San Diego
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={townRose} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 Old Town San Diego
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={aguilarFamily} alt='' loading='eager' className='w-full mt-14'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 San Diego Pizza
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={laJolla2} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 La Jolla Cave
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={seaportFriends} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 SeaPort Village
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={littleItaly2} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 Little Italy
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={imperial} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 Imperial Beach
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         {/* next start */}
//         <div className='max-w-xs rounded overflow-hidden shadow-lg p-2'>
//         {/* image next */}
//         <img src={seaportMore} alt='' loading='eager' className='w-full'/>
//         <div className='px-6 py-4'>
//             <div className='font-bold text-purple-500 text-xl mb-2'>
//                 SeaPort Village
//             </div>
//             <ul>
//                 <li>
//                     <strong>the view</strong>
//                 </li>
//             </ul>
//         </div>
//         </div>
//         {/* next end */}

//         </div>
//     </div>
//   )
// }

// export default Pictures;




const Pictures = () => {

    const imagesList = [
        {
            id: 1,
            src: imperial,
            alt: "Image 1",
            name: "SeaPort Village",
            description: "Beautiful place to enjoy the view",
            date: "June 2022",
        },
        {
            id: 2,
            src: littleItaly,
            alt: "Image 2",
            name: "Little Italy",
            description: "telling us that it works",
            date: "June 2022",
        },
        {
            id: 3,
            src: littleItaly2,
            alt: "Image 3",
            name: "Little Italy",
            description: "the view",
            date: "June 2022",
        },
        {
            id: 4,
            src: aguilarFamily,
            alt: "Image 3",
            name: "San Diego Pizza",
            description: "the view",
            date: "June 2022",
        },
        {
            id: 5,
            src: seaport2,
            alt: "Image 3",
            name: "SeaPort Village",
            description: "the view",
            date: "June 2022",
        },
        {
            id: 6,
            src: centennialPark,
            alt: "Image 3",
            name: "Centennial Park",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 7,
            src: cove,
            alt: "Image 3",
            name: "La Jolla Cove",
            description: "the view",
        },
        {
            id: 8,
            src: cove,
            alt: "Image 3",
            name: "La Jolla Cove",
            description: "the view",
        },
        {
            id: 9,
            src: cove,
            alt: "Image 3",
            name: "La Jolla Cove",
            description: "the view",
        },
        {
            id: 10,
            src: cove,
            alt: "Image 3",
            name: "La Jolla Cove",
            description: "the view",
        },
    ];

    return (
        <div>
            {/* San Diego Pictures Section */}
            <h3 className='text-2xl font-bold p-2'>San Diego</h3>

            <div className='flex flex-wrap'>

            {imagesList.map(( { id, src, alt, name, description, date }) => (

                    <div className='max-w-xs rounded overflow-hidden shadow-lg p-2' key={id}>
                        <img src={src} alt={alt} className='w-full'/>
                        <div className='px-6 py-4'>
                            <div className='font-bold text-purple-500 text-xl mb-2'>
                                {name}
                            </div>
                            <ul>
                                <li>
                                    <strong>{description}</strong>
                                    <p>{date}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
            ))}
            </div>
        </div>

    );
}

export default Pictures;