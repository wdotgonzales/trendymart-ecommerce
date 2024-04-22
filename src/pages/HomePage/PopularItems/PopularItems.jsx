import './PopularItems.css';
import Rating from '@mui/material/Rating';
import { useRef, useState } from 'react';

import {
    Link,
} from "react-router-dom";

import { temporaryPopularItems } from './temporaryPopularItems';
import PopularItemsModal from './PopularItemsModal';

const PopularItems = () => {

    const [isQuickLookModalHidden, setIsQuickLookModalHidden] = useState(true);

    function hoverStateAddToCartPrice(child) {
        child[1].classList.remove('price');
        child[1].classList.remove('priceNormalState');
        child[1].classList.add('priceHover');

        child[0].classList.remove('addToCart');
        child[0].classList.remove('addToCartNormalState');
        child[0].classList.add('addToCartHover');
    }

    function normalStateAddToCartPrice(child) {
        child[1].classList.remove('priceHover');
        child[1].classList.add('priceNormalState');

        child[0].classList.remove('addToCartHover');
        child[0].classList.add('addToCartNormalState');
    }

    function hoverStateQuickLookFavorite(child) {
        child.classList.remove('QuickLookFavorite');
        child.classList.remove('QuickLookFavoriteNormalState');
        child.classList.add('QuickLookFavoriteHoverState');
    }

    function normalStateQuickLookFavorite(child) {
        child.classList.remove('QuickLookFavoriteHoverState');
        child.classList.add('QuickLookFavoriteNormalState');
    }


    return <>
        <section className='max-w-[1250px] m-auto'>
            <div className='mx-8'>
                <p className='font-bold text-[30px] tracking-wider text-1 mt-[3em] mb-[1.5em] text-center'>POPULAR ITEMS.</p>

                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {
                        temporaryPopularItems.map((item) => {
                            const { id, name, url, price, rating } = item;

                            const popularItem = useRef(null);
                            return <>
                                <div
                                    ref={popularItem}
                                    key={id}
                                    onMouseEnter={() => {
                                        hoverStateAddToCartPrice(popularItem.current.children[3].children)
                                        hoverStateQuickLookFavorite(popularItem.current.children[0].children[1])
                                    }}
                                    onMouseLeave={() => {
                                        normalStateAddToCartPrice(popularItem.current.children[3].children)
                                        normalStateQuickLookFavorite(popularItem.current.children[0].children[1])
                                    }}
                                >
                                    <div className='relative overflow-hidden h-auto'>
                                        <Link to="/">
                                            <img src={url} alt="" />
                                        </Link>
                                        <div className='absolute QuickLookFavorite left-1/2 transform -translate-x-1/2 flex items-center'>
                                            <Link to={`?productId=${id}`} onClick={() => setIsQuickLookModalHidden(false)}>
                                                <div className='bg-black text-white px-4 py-[6px] text-[12px]'>
                                                    <p className='font-bold'>QUICK LOOK</p>
                                                </div>
                                            </Link>
                                            <button onClick={() => alert('<3')}>
                                                <div className='bg-gray-500 py-[1px] px-2'>
                                                    <div className='mt-1'>
                                                        <box-icon name='heart' type='solid' color='#ffffff' size="xs"></box-icon>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <Link to="/"><p className='text-center font-bold mt-3'>{name}</p></Link>
                                    <div className='text-center'>
                                        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                                    </div>

                                    <div className='relative w-full'>
                                        <button className={`text-center absolute addToCart text-[#979797] tracking-wider font-bold`}>
                                            <p>ADD TO CART</p>
                                        </button>

                                        <p className={`mb-2 text-[#979797] absolute price`}>${price}</p>
                                    </div>
                                </div >



                                {/* Modal for Quick Look Button */}
                                <PopularItemsModal
                                    isQuickLookModalHidden={isQuickLookModalHidden}
                                    setIsQuickLookModalHidden={setIsQuickLookModalHidden}
                                />
                            </>
                        })
                    }
                </div>


                <Link to="/">
                    <div className="text-center sm:text-left mt-[3em]">
                        <div className='inline-block text-left'>
                            <div className='flex gap-1'>
                                <p className='text-[21px] tracking-wider text-1 mt-[1em]'>Go To Shop</p>
                                <div className='mt-5 inline-block'>
                                    <box-icon name='right-arrow-alt' size="md"></box-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </section >


    </>
}

export default PopularItems;