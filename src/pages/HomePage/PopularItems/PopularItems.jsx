import './PopularItems.css';
import Rating from '@mui/material/Rating';

import {
    Link,
    Routes,
    Route
} from "react-router-dom";

const PopularItems = () => {
    const typeofItemCategory = [
        { id: 1, name: "DEFAULT" },
        { id: 2, name: "HOME DECOR" },
        { id: 3, name: "LIGHTNING" },
        { id: 4, name: "DECORATION" },
        { id: 5, name: "VASES" },
        { id: 6, name: "BASICS" },
    ];

    const temporaryPopularItems = [
        { id: 1, name: "BASKET WITH HANDLES", price: 68, rating: 4.5, url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8-505x505.jpg" },
        { id: 2, name: "WALL CLOCK", price: 168, rating: 3.5, url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-505x505.jpg" },
        { id: 3, name: "FLOWER VASE", price: 200, rating: 2.7, url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-505x505.jpg" },
        { id: 4, name: "DECO ACCESSORY", price: 402, rating: 4.5, url: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-505x505.jpg" },
    ];

    return <>
        <section className='max-w-[1250px] m-auto'>
            <div className='mx-8'>
                <p className='font-bold text-[30px] tracking-wider text-1 mt-[3em] mb-[1.5em] text-center'>POPULAR ITEMS.</p>
                {/* <div>
                    <button className='font-bold flex lg:hidden gap-2 mb-2  '>
                        CATEGORY
                        <box-icon type='solid' name='down-arrow' size='xs'></box-icon>
                    </button>
                    <div className='flex justify-between'>
                        <div className='hidden lg:flex gap-6'>
                            {
                                typeofItemCategory.map((category) => {
                                    const { id, name } = category;
                                    return <>
                                        <button key={id} className='font-bold text-[#979797] tracking-wider hover:text-black'>
                                            {name}
                                        </button>
                                    </>
                                })
                            }
                        </div>

                        <div>
                            <div className='relative text-left hidden lg:block'>


                                <button
                                    onClick={() => document.getElementById('dropdown-content').classList.toggle('hidden')}
                                    className='font-bold flex gap-2'
                                >
                                    FILTER
                                    <box-icon type='solid' name='down-arrow' size='xs'></box-icon>
                                </button>


                                <div id='dropdown-content' className='hidden lg:absolute z-10 bg-black text-white flex p-8 gap-12 mt-2 lg:mt-0 right-0 w-[430px]'>
                                    <div>
                                        <p className='tracking-wider text-[28px] mb-3'>SORT BY</p>
                                        <div>
                                            {typeofItemCategory.map((category) => {
                                                const { id, name } = category;
                                                return (
                                                    <div key={id}>
                                                        <button className='text-[#979797] hover:text-white mb-3 text-[18px]'>{name}</button>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <p className='tracking-wider text-[28px] mb-3'>PRICE RANGE</p>
                                        <div>
                                            <div>
                                                <button className='text-[#979797] mb-3 text-[18px] hover:text-white'>ALL</button>
                                            </div>
                                            <div>
                                                <button className='text-[#979797] mb-3 text-[18px] hover:text-white'>$0 - $10</button>
                                            </div>
                                            <div>
                                                <button className='text-[#979797] mb-3 text-[18px] hover:text-white'>$10 - $20</button>
                                            </div>
                                            <div>
                                                <button className='text-[#979797] mb-3 text-[18px] hover:text-white'>$20 - $30</button>
                                            </div>
                                            <div>
                                                <button className='text-[#979797] mb-3 text-[18px] hover:text-white'>$30 - $40</button>
                                            </div>
                                            <div>
                                                <button className='text-[#979797] mb-3 text-[18px] hover:text-white'>$40 +</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='flex lg:hidden  '>
                                <button className='font-bold flex gap-2 '>
                                    FILTER2
                                    <box-icon type='solid' name='down-arrow' size='xs'></box-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {
                        temporaryPopularItems.map((item) => {
                            const { id, name, url, price, rating } = item;
                            return <>
                                <div key={id}>
                                    <img src={url} alt="" />
                                    <p className='text-center font-bold mt-3'>{name}</p>
                                    <div className='text-center'>
                                        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                                    </div>
                                    <p className='text-center mb-2 text-[#979797]'>${price}</p>
                                </div>
                            </>
                        })
                    }
                </div>


                <Link to="/">
                    <div class="text-center sm:text-left">
                        <div class='inline-block text-left'>
                            <div className='flex gap-1'>
                                <p class='text-[21px] tracking-wider text-1 mt-[1em]'>Go To Shop</p>
                                <div class='mt-5 inline-block'>
                                    <box-icon name='right-arrow-alt' size="md"></box-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                
            </div>
        </section>
    </>
}

export default PopularItems;