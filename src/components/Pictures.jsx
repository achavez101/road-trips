import React, {useState} from 'react';
import Hero from '../images/hero.JPG'
import aguilarFamily from '../images/aguilarFamily.jpg'
import centennialPark from '../images/centennialPark.JPG'
import imperial from '../images/imperialBeach.JPG'
import laJolla from '../images/laJolla.JPG'
import laJolla2 from '../images/laJolla2.JPG'
import cove from '../images/laJollaCove.JPG'
import littleItaly from '../images/littleItaly.JPG'
import littleItaly2 from '../images/littleItaly2.JPG'
import oldTown from '../images/oldTown.JPG'
import townBeca from '../images/oldTownBeca.jpg'
import townRose from '../images/oldTownRose.jpg'
import sdPier from '../images/sdPier.JPG'
import seaport2 from '../images/seaport2.JPG'
import seaportFriends from '../images/seaportFriends.jpg'
import seaportMore from '../images/seaportMore.JPG'
import sdSeaport from '../images/sd-seaport-village.jpeg'

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
            alt: "Image 4",
            name: "San Diego Pizza",
            description: "the view",
            date: "June 2022",
        },
        {
            id: 5,
            src: seaport2,
            alt: "Image 5",
            name: "SeaPort Village",
            description: "the view",
            date: "June 2022",
        },
        {
            id: 6,
            src: centennialPark,
            alt: "Image 6",
            name: "Centennial Park",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 7,
            src: seaportMore,
            alt: "Image 7",
            name: "SeaPort Village",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 8,
            src: sdPier,
            alt: "Image 8",
            name: "San Diego Pier",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 9,
            src: sdSeaport,
            alt: "Image 9",
            name: "SeaPort Village",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 10,
            src: seaportFriends,
            alt: "Image 10",
            name: "SeaPort Village",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 11,
            src: Hero,
            alt: "Image 11",
            name: "Old Town San Diego",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 12,
            src: cove,
            alt: "Image 12",
            name: "La Jolla Cove",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 13,
            src: laJolla,
            alt: "Image 13",
            name: "La Jolla Cove",
            description: "the view",
            date: "May 2024",
        },
        {
            id:14,
            src: laJolla2,
            alt: "Image 14",
            name: "La Jolla Cove",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 15,
            src: cove,
            alt: "Image 15",
            name: "La Jolla Cove",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 16,
            src: oldTown,
            alt: "Image 16",
            name: "Old Town San Diego",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 17,
            src: townBeca,
            alt: "Image 17",
            name: "Old Town San Diego",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 18,
            src: townRose,
            alt: "Image 18",
            name: "Old Town San Diego",
            description: "the view",
            date: "May 2024",
        },
    ];

    return (
        <div>
            {/* San Diego Pictures Section */}
            <h3 className='text-2xl font-bold p-2'>San Diego</h3>

            <div className='flex flex-wrap justify-center'>

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