import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const ItemModal = ({ isQuickLookModalHidden, setIsQuickLookModalHidden, products, currentItemChosenForModalId, setCurrentItemChosenForModalId, exitModalRoute }) => {

    // popular item
    const [popularItem, setPopularItem] = useState(null);

    useEffect(() => {
        if (currentItemChosenForModalId !== undefined || null) {
            // set popular items based on the id from params
            setPopularItem(products.find((product) => currentItemChosenForModalId === product.id));
        }
    }, [currentItemChosenForModalId])

    // quantity to add  to cart
    const [quantity, setQuantity] = useState(1);

    // restart qntnty if quits
    useEffect(() => {
        setQuantity(1)
    }, [isQuickLookModalHidden])

    // Ensure that the Rating component updates when props change
    const [ratingKey, setRatingKey] = useState(0); // Key to force re-render
    useEffect(() => {
        // Increment the key whenever popularItem changes to force re-render
        setRatingKey(prevKey => prevKey + 1);
    }, [popularItem]);

    return <>
        <div
            className={`absolute left-0 top-[0px] w-full h-full z-20 ${isQuickLookModalHidden && 'hidden'}`}
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.1)'
            }}>

            <div className="flex justify-center items-center h-screen mx-6">
                <div className="bg-white max-w-[350px] md:max-w-[920px] md:h-auto fixed">
                    {/* Content */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <Carousel showArrows={true} showThumbs={false}>
                                {popularItem != null && popularItem.productImgs.map((imgUrl, index) => (
                                    <div key={index}>
                                        <img src={imgUrl} alt="" />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="m-3">
                            <div className="inline-block absolute right-1">
                                <Link to={exitModalRoute} onClick={() => {
                                    setIsQuickLookModalHidden(true);
                                    setCurrentItemChosenForModalId(null)
                                }}
                                >
                                    <box-icon name='x' size='sm' color='black'></box-icon>
                                </Link>
                            </div>

                            <div className="p-3">
                                <p className="text-[24px] font-bold tracking-wider">{popularItem != null && popularItem.name}</p>
                                <p className="text-[24px]">${popularItem != null && popularItem.price}</p>
                                <div className='my-4'>
                                    <Rating key={ratingKey} name="half-rating-read" defaultValue={popularItem != null ? popularItem.ratingAvg : 0} precision={0.5} readOnly />
                                </div>
                                <p className='text-[14px] text-[#979797]'>
                                    {popularItem != null && popularItem.description}
                                </p>
                                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-2'>
                                    <div className="relative flex items-center w-full">
                                        <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M1 1h16" />
                                            </svg>
                                        </button>
                                        <input type="text" value={quantity} id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                                        <button onClick={() => setQuantity(quantity + 1)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                            <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M9 1v16M1 9h16" />
                                            </svg>
                                        </button>
                                        <p className='absolute left-[3.5em] top-[1.2em] text-[12px] text-[#979797]'>Quantity</p>
                                    </div>

                                    <Link to='/'>
                                        <div onClick={() => alert(popularItem.id)} className='bg-black text-white text-center tracking-wider p-[12.9px] text-[12px]'>
                                            ADD TO CART
                                        </div>
                                    </Link>
                                </div>

                                <button>
                                    <div className='mt-8 flex gap-2 items-center'>
                                        <box-icon name='heart' type='solid' color='black'></box-icon>
                                        <p className='text-[#979797] tracking-wider text-[12.5px] mt-1'>ADD TO FAVORITES</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </>
}

export default ItemModal;
