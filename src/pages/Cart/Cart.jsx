import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import './styles/Cart.css'

import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

const Cart = () => {
    const temporaryCart = [
        {
            id: 5,
            name: "NEWSPAPER STORAGE",
            price: 90,
            ratingAvg: 4.0,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                          eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                          nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
            productImgs: [
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4.jpg',
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-1.jpg',
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-2.jpg',
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-3.jpg',
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-4.jpg'
            ],

            color: ["Beige", "White"],
            material: ["Wood"],
            weight: "2 kg",
            dimensions: "10 x 10 x 15 cm",

            reviews: [
                { forProductId: 5, reviewId: 5, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
            ],
            path: "newspaper-storage"
        },
        {
            id: 5,
            name: "NEWSPAPER STORAGE",
            price: 90,
            ratingAvg: 4.0,
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                          eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                          nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
            productImgs: [
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4.jpg',
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-1.jpg',
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-2.jpg',
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-3.jpg',
                'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-4-gallery-4.jpg'
            ],

            color: ["Beige", "White"],
            material: ["Wood"],
            weight: "2 kg",
            dimensions: "10 x 10 x 15 cm",

            reviews: [
                { forProductId: 5, reviewId: 5, rating: 5.0, reviewerName: "Mark Jackson", reviewImg: "https://freesvg.org/img/abstract-user-flat-4.png", description: "asd", dateOfReview: "01/23/2024" },
            ],
            path: "newspaper-storage"
        },
    ];
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section>
            <div className="relative">
                <div className="bg-image"></div>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-[1.8em] md:text-[2.5em] lg:text-[3em] tracking-wider">CART</p>
            </div>

            <div className="max-w-[1250px] m-auto">
                <div className="px-5 pt-[4em] pb-[7em]">
                    {
                        temporaryCart.length === 0
                            ? <div>
                                <div className="font-bold text-center border-2 border-gray-300 text-[1.6em] py-[0.5em] ">
                                    <p className="px-5 ">YOUR CART IS CURRENTLY EMPTY.</p>
                                </div>
                                <div className="max-w-[610px] m-auto">
                                    <p className="text-center text-[#979797] text-[1.3em] my-[2.2em]">Why not return to our amazing shop and start filling it with products. Just click on the button below to instantly get back to the shop page. Oh, and while you’re there, check out all of our mind-blowing discounts.</p>
                                </div>
                                <div className="bg-black text-white font-bold w-[220px] m-auto text-center py-[1.2em] mt-[1.2em] cursor-pointer brightness-100 hover:brightness-50">
                                    RETURN TO SHOP
                                </div>
                            </div>

                            : <div>
                                <p className="font-bold text-[1.6em] tracking-wider mb-[1.2em] text-center md:text-left">SHOPPING CART</p>
                                <div className="flex flex-col lg:flex-row items-start gap-[3em]">
                                    <div className="w-[100%] lg:w-[70%]">
                                        {/* items */}
                                        {
                                            temporaryCart.map((item) => {
                                                const { id, productImgs, name, price } = item;
                                                return <>
                                                    <div key={id} className="mt-5">
                                                        <div className="block sm:flex justify-between items-center">

                                                            <div className="flex items-center gap-[1.3em]">
                                                                <div>
                                                                    <box-icon name='x' size='sm' color='gray'></box-icon>
                                                                </div>
                                                                <div className="hidden md:block">
                                                                    <img src={productImgs[0]} alt="" className="w-[110px]" />
                                                                </div>
                                                                <div>
                                                                    <p className="font-bold tracking-wider">{name}</p>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center gap-5 mt-5">
                                                                <div>
                                                                    <p>${price}</p>
                                                                </div>

                                                                <div className="relative flex items-center w-full   md:w-[160px]">
                                                                    <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M1 1h16" />
                                                                        </svg>
                                                                    </button>
                                                                    <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                                                                    <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M9 1v16M1 9h16" />
                                                                        </svg>
                                                                    </button>
                                                                    <p className='absolute left-[0em] sm:left-[9em] md:left-[5em] top-[4em] text-[12px] text-[#979797]'>Quantity </p>
                                                                </div>

                                                                <div>
                                                                    <p className="font-bold tracking-wider">$123</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-[2em]" />
                                                    </div>
                                                </>
                                            })
                                        }

                                        <div className="my-5">
                                            <p className="text-center font-bold mb-5 cursor-pointer">UPDATE CART</p>
                                            <hr className="" />
                                        </div>
                                    </div>
                                    <div className="w-[100%] lg:w-[30%] bg-[#F5F5F5]">
                                        <div className="m-[2.2em]">
                                            <p className="font-bold text-[1.5em] tracking-wider text-center md:text-left">CART TOTALS</p>
                                            <div className="flex gap-[2em] mt-[1.5em]">
                                                <p className="font-bold">SUBTOTAL</p>
                                                <p>$123</p>
                                            </div>
                                            <div className="flex gap-[2.5em] mt-[1.5em]">
                                                <p className="font-bold">SHIPPING</p>

                                                <div className=" w-full md:w-3/5 lg:w-full">
                                                    <ChakraProvider>
                                                        <RadioGroup defaultValue='1'>
                                                            <Stack>
                                                                <Radio value='1'>Free Shipping</Radio>
                                                                <Radio value='2'>Local Pickup</Radio>
                                                                <Radio value='3'>Flat Rate: $10</Radio>
                                                            </Stack>
                                                        </RadioGroup>
                                                    </ChakraProvider>
                                                    <p className="my-5">Shipping to <span className="font-bold">Peru</span></p>

                                                    <div className="font-bold flex gap-2 items-center cursor-pointer">
                                                        <p>CHANGE ADDRESS</p>
                                                        <div className="">
                                                            <box-icon type='solid' name='down-arrow' size='xs'></box-icon>
                                                        </div>
                                                    </div>

                                                    <div className="border-2 border-red-500 mt-2">
                                                        a
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    }
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default Cart;