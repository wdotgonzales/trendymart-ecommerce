import './Item.css';

import Rating from '@mui/material/Rating';
import { useRef, useState } from 'react';

import {
    Link,
} from "react-router-dom";

import ItemModal from './ItemModal';

const Item = ({ products }) => {

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
        {
            products.map((item) => {
                const { id, name, productImgs, price, ratingAvg } = item;

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
                                <img src={productImgs[0]} alt="" />
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
                            <Rating name="half-rating-read" defaultValue={ratingAvg} precision={0.5} readOnly />
                        </div>

                        <div className='relative w-full'>
                            <button className={`text-center absolute addToCart text-[#979797] tracking-wider font-bold`}>
                                <p>ADD TO CART</p>
                            </button>

                            <p className={`mb-2 text-[#979797] absolute price`}>${price}</p>
                        </div>
                    </div >

                    <ItemModal
                        isQuickLookModalHidden={isQuickLookModalHidden}
                        setIsQuickLookModalHidden={setIsQuickLookModalHidden}
                        products={products}
                    />
                </>
            })
        }
    </>
}

export default Item;