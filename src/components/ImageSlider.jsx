import React, {useState} from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';

const ImageSlider = () => {
    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1527684651001-731c474bbb5a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Old Town Sacramento',
        },
        {
            url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: 'Monterrey Bay',
        },
        {
            url: 'https://images.unsplash.com/photo-1613333046289-4cd8e6a6270e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Sea Port Village',
        },
        {
            url: 'https://images.unsplash.com/photo-1574732320585-b36a666f0afa?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'La Jolla Cove',
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
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
        <h3 className='text-5xl md:text-6xl font-bold'>Featured Locations</h3>
        <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
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
        <p className='text-2xl md:text-1xl'>Location: {slides[currentIndex].title}</p>
        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                    <RxDotFilled />
                    <p></p>
                </div>
            ))}
        </div>

    </div>
  )
}

export default ImageSlider