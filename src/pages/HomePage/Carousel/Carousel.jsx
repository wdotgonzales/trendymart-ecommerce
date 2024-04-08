import { useState, useEffect } from 'react';
import './Carousel.css';
import chair from './img/chair.png';
import lamp from './img/lamp-removebg-preview.png';
import bulb from './img/bulb-removebg-preview.png';
import woodenChair from './img/wooden-chair-removebg-preview.png';

const Carousel = () => {
    const [currentHoveredNumber, setCurrentHoveredNumber] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    const handleSlideChange = (slideNumber) => {
        setCurrentSlide(slideNumber);
    };

    // Function to automatically change slides
    useEffect(() => {
        const interval = setInterval(() => {
            // If current slide is not the last one, move to the next slide, otherwise go back to the first slide
            setCurrentSlide(currentSlide === 3 ? 1 : currentSlide + 1);
        }, 5000); // Change slide every 5 seconds (adjust as needed)

        // Clean up the interval when component unmounts
        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <>
            {/* xl screensize  */}
            <section className='relative bg-gray-200 mx-[7em] overflow-hidden hidden lg:block'>
                {/* Slides */}

                <div className={`${currentSlide !== 1 ? 'hidden' : ''}`}>
                    <div className='flex justify-center'>
                        <div className='self-start ml-[5.5em] self-end mb-[5em]'>
                            <p className='font-bold text-[30px] tracking-wider text-1'>THINK DIFFERENT.</p>
                            <p className='text-[20px] text-[#979797] w-[58%] text-2'>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
                        </div>
                        <div className=''>
                            <img src={chair} alt="" className='pb-5 chair' />
                        </div>
                    </div>
                </div>


                <div className={`${currentSlide !== 2 ? 'hidden' : ''}`}>
                    <div className='flex justify-center'>
                        <div className='self-start ml-[5.5em] self-end mb-[5em]'>
                            <p className='font-bold text-[30px] tracking-wider text-1'>PREMIUM COMFORT.</p>
                            <p className='text-[20px] text-[#979797] w-[58%] text-2'>One-click import feature lets you import the complete Depot demo content with a single mouse click.</p>
                        </div>
                        <div className='flex'>
                            <div>
                                <img src={lamp} alt="" className='lamp' />
                            </div>
                            <div>
                                <img src={bulb} alt="" className='bulb' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${currentSlide !== 3 ? 'hidden' : ''}`}>
                    <div className='flex justify-center'>
                        <div className=' ml-[5.5em] self-end mb-[5em] mr-[9em]'>
                            <p className='font-bold text-[30px] tracking-wider text-1'>CONTEMPORARY DESIGN.</p>
                            <p className='text-[20px] text-[#979797] w-[58%] text-2'>A large set of beautiful & fully flexible homepage layouts lets you create your website quickly & easily.</p>
                        </div>
                        <div className='mr-7 border-2'>
                            <img src={woodenChair} alt="" className='wooden-chair' />
                        </div>
                    </div>
                </div>

            </section>

            {/* Slide Number */}
            <div className='absolute top-[20em] ml-[-3.5em] hidden lg:block'>
                <div className='absolute top-[1em] left-[8em]'>
                    {[1, 2, 3].map((slideNumber) => (
                        <div
                            key={slideNumber}
                            onClick={() => handleSlideChange(slideNumber)}
                            onMouseEnter={() => setCurrentHoveredNumber(slideNumber)}
                            onMouseLeave={() => setCurrentHoveredNumber(null)}
                            className='mt-2'
                        >
                            <button className='flex items-center'>
                                <p className={`font-bold ${currentSlide === slideNumber || currentHoveredNumber === slideNumber ? 'hovered-black-text' : 'defaultTextColor'}`}>{slideNumber.toString().padStart(2, '0')}</p>
                                <div className={`p-[1px] w-[30px] ml-[10.5px] ${currentSlide === slideNumber || currentHoveredNumber === slideNumber ? 'extendLineWidthWithAnimationHover' : 'defaultLineBgColor'}`}></div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* lg screen size */}
            <section className='bg-gray-200 overflow-hidden block lg:hidden hidden md:block'>
                <div className={`${currentSlide !== 1 ? 'hidden' : ''}`}>
                    <div className='flex justify-center'>
                        <div className='self-start ml-[5.5em] self-end mb-[5em]'>
                            <p className='font-bold text-[25px] tracking-wider text-1'>THINK DIFFERENT.</p>
                            <p className='text-[17px] text-[#979797] w-[58%] text-2'>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
                        </div>
                        <div className=''>
                            <img src={chair} alt="" className='pb-5 chair' />
                        </div>
                    </div>
                </div>

                <div className={`${currentSlide !== 2 ? 'hidden' : ''}`}>
                    <div className='flex justify-center'>
                        <div className='self-start ml-[5.5em] self-end mb-[5em]'>
                            <p className='font-bold text-[25px] tracking-wider text-1'>PREMIUM COMFORT.</p>
                            <p className='text-[17px] text-[#979797] w-[58%] text-2'>One-click import feature lets you import the complete Depot demo content with a single mouse click.</p>
                        </div>
                        <div className='flex'>
                            <div>
                                <img src={lamp} alt="" className='lamp lgSize' />
                            </div>
                            <div>
                                <img src={bulb} alt="" className='bulb lgSize' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${currentSlide !== 3 ? 'hidden' : ''}`}>
                    <div className='flex justify-center'>
                        <div className=' ml-[5.5em] self-end mb-[5em] mr-[9em]'>
                            <p className='font-bold text-[25px] tracking-wider text-1'>CONTEMPORARY DESIGN.</p>
                            <p className='text-[17  px] text-[#979797] w-[58%] text-2'>A large set of beautiful & fully flexible homepage layouts lets you create your website quickly & easily.</p>
                        </div>
                        <div className='mr-7 border-2'>
                            <img src={woodenChair} alt="" className='wooden-chair ' />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center gap-2 pb-3'>
                    <button
                        onClick={() => handleSlideChange(1)}>
                        <div
                            className={`${currentSlide === 1 ? 'bg-gray-500' : 'bg-gray-50'} rounded-full p-2`}>
                        </div>
                    </button>
                    <button
                        onClick={() => handleSlideChange(2)}>
                        <div

                            className={`${currentSlide === 2 ? 'bg-gray-500' : 'bg-gray-50'} rounded-full p-2`}>
                        </div>
                    </button>
                    <button
                        onClick={() => handleSlideChange(3)}>
                        <div
                            className={`${currentSlide === 3 ? 'bg-gray-500' : 'bg-gray-50'} rounded-full p-2`}>
                        </div>
                    </button>
                </div>
            </section >


            {/* md screen size */}
            < section className='bg-gray-200 overflow-hidden block md:hidden' >
                <div className={`${currentSlide !== 1 ? 'hidden' : ''}`}>
                    <div>
                        <img src={chair} alt="" className='pb-5 chair max-w-[200px] m-auto' />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-[25px] tracking-wider text-1'>THINK DIFFERENT.</p>
                        <p className='text-[17  px] text-[#979797] text-2 mx-5 mt-2 pb-5'>Depot is a unique & captivating theme designed specifically for all types of shops and online stores.</p>
                    </div>
                </div>

                <div className={`${currentSlide !== 2 ? 'hidden' : ''}`}>
                    <div className='flex justify-center'>
                        <div className='h-[250px]'>
                            <img src={lamp} alt="" className='lamp mdSize w-[200px]' />
                        </div>
                        <div>
                            <img src={bulb} alt="" className='bulb mdSize w-[100px]' />
                        </div>
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-[25px] tracking-wider text-1'>PREMIUM COMFORT.</p>
                        <p className='text-[17  px] text-[#979797] text-2 mx-5 mt-2 pb-5'>One-click import feature lets you import the complete Depot demo content with a single mouse click.</p>
                    </div>
                </div>

                <div className={`${currentSlide !== 3 ? 'hidden' : ''}`}>
                    <div>
                        <img src={woodenChair} alt="" className='pb-5 chair max-w-[200px] m-auto' />
                    </div>

                    <div className='text-center'>
                        <p className='font-bold text-[25px] tracking-wider text-1'>CONTEMPORARY DESIGN.</p>
                        <p className='text-[17  px] text-[#979797] text-2 mx-5 mt-2 pb-5'>A large set of beautiful & fully flexible homepage layouts lets you create your website quickly & easily.</p>
                    </div>
                </div>


                <div className='flex justify-center gap-2 pb-3'>
                    <button
                        onClick={() => handleSlideChange(1)}>
                        <div
                            className={`${currentSlide === 1 ? 'bg-gray-500' : 'bg-gray-50'} rounded-full p-2`}>
                        </div>
                    </button>
                    <button
                        onClick={() => handleSlideChange(2)}>
                        <div

                            className={`${currentSlide === 2 ? 'bg-gray-500' : 'bg-gray-50'} rounded-full p-2`}>
                        </div>
                    </button>
                    <button
                        onClick={() => handleSlideChange(3)}>
                        <div
                            className={`${currentSlide === 3 ? 'bg-gray-500' : 'bg-gray-50'} rounded-full p-2 `}>
                        </div>
                    </button>
                </div>
            </section >


        </>

    );
};

export default Carousel;

