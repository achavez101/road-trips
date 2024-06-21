import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import {Link} from 'react-router-dom';
import sac from '../images/old-town-sac-3.jpeg';
import mont from '../images/monterrey.JPG';
import spt from '../images/spt.JPG';
import ljhl from '../images/hl.JPG';
import lakeIsabella from '../images/lakeIsabella.JPG';

// Featured Locations Headline

const Highlights = () => {
    const slides = [
        {
            url: sac,
            title: 'Old Town Sacramento',
        },
        {
            url: mont,
            title: 'Monterrey Bay',
        },
        {
            url: spt,
            title: 'Seaport Village',
        },
        {
            url: ljhl,
            title: 'La Jolla Cove',
        },
        {
            url: lakeIsabella,
            title: 'Lake Isabella',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }


  return (
    <div className='max-w-[1400px] h-[880px] m-auto py-16 px-4 relative group bg-gradient-to-r from-cyan-500 to-blue-500 pb-40'>
        <h3 className='text-5xl md:text-6xl font-bold top-10 py-4 mt-5'>Highlights</h3>
        <div className='w-full h-full rounded-2xl bg-contain bg-no-repeat bg-center'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` } }>
        </div>
        {/* {left arrow} */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%]left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer '>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* {right arrow} */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer '>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <p className='text-2xl md:text-1xl pb-16'>Location: {slides[currentIndex].title}</p>
        <button className='bg-sky-500'><Link to="/pictures">Learn More</Link></button>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    <RxDotFilled />
                </div>
            ))}
        </div>

    </div>
  )
}

export default Highlights;