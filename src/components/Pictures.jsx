import React, {useState} from 'react';
import Hero from '../images/hero.JPG'
import aguilarFamily from '../images/aguilarFamily.jpg'
import centennialPark from '../images/centennialPark.jpeg'
import imperial from '../images/imperialBeach.jpeg'
import laJolla from '../images/laJolla.jpeg'
import laJolla2 from '../images/laJolla2.jpeg'
import cove from '../images/laJollaCove.jpeg'
import littleItaly2 from '../images/littleItaly2.jpeg'
import oldTown from '../images/oldTown.JPG'
import townBeca from '../images/oldTownBeca.jpeg'
import townRose from '../images/oldTownRose.jpeg'
import sdPier from '../images/sdPier.JPG'
import seaport2 from '../images/seaport2.JPG'
import seaportFriends from '../images/seaportFriends.jpg'
import seaportMore from '../images/seaportMore.jpeg'
import sdSeaport from '../images/sd-seaport-village.jpeg'
import imperial1 from '../images/imperial-1.jpg'
import imperial2 from '../images/imperial-2.jpg'
import imperial3 from '../images/imperial-3.jpg'
import imperial4 from '../images/imperial-4.jpg'
import imperial5 from '../images/imperial-5.jpeg'
import imperial6 from '../images/imperial-6.jpeg'
import imperial7 from '../images/imperial-7.jpeg'
import sdBeach from '../images/sd-beach.jpeg'
import sdDrive from '../images/sd-drive.jpeg'
import sdEngage from '../images/sd-engage.jpeg'
import littleItaly from '../images/littleItaly.jpeg'

const Pictures = () => {

    const imagesList = [
        {
            id: 1,
            src: imperial1,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 2,
            src: imperial2,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 3,
            src: imperial3,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 4,
            src: imperial4,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 5,
            src: imperial5,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 6,
            src: imperial6,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 7,
            src: imperial7,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 8,
            src: imperial1,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 9,
            src: sdBeach,
            alt: "Image 1",
            name: "Imperial Beach",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 10,
            src: sdDrive,
            alt: "Image 1",
            name: "Road Trip",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 11,
            src: sdEngage,
            alt: "Image 1",
            name: "Engage Youth Conference",
            description: "Beautiful place to enjoy the view",
            date: "August 2020",
        },
        {
            id: 12,
            src: imperial,
            alt: "Image 1",
            name: "SeaPort Village",
            description: "Beautiful place to enjoy the view",
            date: "June 2022",
        },
        {
            id: 13,
            src: littleItaly,
            alt: "Image 2",
            name: "Little Italy",
            description: "telling us that it works",
            date: "June 2022",
        },
        {
            id: 14,
            src: littleItaly2,
            alt: "Image 3",
            name: "Little Italy",
            description: "the view",
            date: "June 2022",
        },
        {
            id: 15,
            src: aguilarFamily,
            alt: "Image 4",
            name: "San Diego Pizza",
            description: "the view",
            date: "June 2022",
        },
        {
            id: 16,
            src: seaport2,
            alt: "Image 5",
            name: "SeaPort Village",
            description: "the view",
            date: "June 2022",
        },
        {
            id: 17,
            src: centennialPark,
            alt: "Image 6",
            name: "Centennial Park",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 18,
            src: seaportMore,
            alt: "Image 7",
            name: "SeaPort Village",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 19,
            src: sdPier,
            alt: "Image 8",
            name: "San Diego Pier",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 20,
            src: sdSeaport,
            alt: "Image 9",
            name: "SeaPort Village",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 21,
            src: seaportFriends,
            alt: "Image 10",
            name: "SeaPort Village",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 22,
            src: Hero,
            alt: "Image 11",
            name: "Old Town San Diego",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 23,
            src: cove,
            alt: "Image 12",
            name: "La Jolla Cove",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 24,
            src: laJolla,
            alt: "Image 13",
            name: "La Jolla Cove",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 25,
            src: laJolla2,
            alt: "Image 14",
            name: "La Jolla Cove",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 26,
            src: cove,
            alt: "Image 15",
            name: "La Jolla Cove",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 27,
            src: oldTown,
            alt: "Image 16",
            name: "Old Town San Diego",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 28,
            src: townBeca,
            alt: "Image 17",
            name: "Old Town San Diego",
            description: "the view",
            date: "May 2024",
        },
        {
            id: 29,
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