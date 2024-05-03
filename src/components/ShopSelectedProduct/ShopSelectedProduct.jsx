import products from "../../products";
import NavBar from "../NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import { Rating } from "@mui/material";
import { useState } from "react";

import { Link } from "react-router-dom";
const ShopSelectedProduct = () => {
    const path = window.location.pathname;
    const segments = path.split('/');
    // Example : shop/variable-products -> variable-products
    const lastSegment = segments[segments.length - 1];

    const selectedProductObject = products.find((product) => product.path === lastSegment);
    console.log(selectedProductObject);

    const removeFirstImageArr = selectedProductObject.productImgs.slice(1);

    const [quantity, setQuantity] = useState(1);

    const [contentToggle, setContentToggle] = useState({
        description: true,
        additionalInformation: false,
        reviews: false
    });


    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="">
            <div className="">
                <div className="max-w-[1243px] m-auto">
                    <div className="mx-5 pt-[5em]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2em] items-start pb-[5em]">
                            {/* child 1 */}
                            <div className="flex gap-2">
                                <div className="grid grid-cols-1 gap-y-2">
                                    {
                                        removeFirstImageArr.map((img) => {
                                            return <>
                                                <div>
                                                    <img className="w-[129px] md:w-[100px]" src={img} alt="" />
                                                </div>
                                            </>
                                        })
                                    }
                                </div>
                                <div >
                                    <img className="w-[565px] sm:w-[550px] md:w-[430px]" src={selectedProductObject.productImgs[0]} alt="" />
                                </div>
                            </div>
                            {/* child 2 */}
                            <div>
                                <div>
                                    <p className="font-bold text-[1.2em]">{selectedProductObject.name}</p>
                                    <p className="text-[1.2em] text-[#979797]">${selectedProductObject.price}</p>
                                    <div className="flex items-center gap-1 mt-7">
                                        <Rating
                                            key={selectedProductObject.ratingAvg}
                                            name="half-rating-read"
                                            defaultValue={selectedProductObject.ratingAvg != null ? selectedProductObject.ratingAvg : 0}
                                            precision={0.5}
                                            size="small"
                                            readOnly
                                        />
                                        <p className="text-[0.8em] mt-[0.2em] text-[#979797]">( <span className="text-[1.2em]">{selectedProductObject.reviews.length}</span> CUSTOMER REVIEW )</p>
                                    </div>

                                    <div className="w-[100%] md:w-[80%] mt-2">
                                        <p className="text-[#979797] text-[0.8em]">{selectedProductObject.description}</p>
                                    </div>

                                    <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-[290px] sm:max-w-[350px]'>

                                        <div className="w-full">
                                            <p className='text-[12px] text-[#979797]'>Quantity:</p>
                                            <div className="flex items-center">
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
                                            </div>
                                        </div>

                                        <Link to='/' className="mt-0 sm:mt-[1.1em]">
                                            <div onClick={() => alert(selectedProductObject.id)} className='bg-black text-white text-center tracking-wider p-[12.9px] text-[12px]'>
                                                ADD TO CART
                                            </div>
                                        </Link>
                                    </div>

                                    <button>
                                        <div className='mt-8 flex gap-2 items-center'>
                                            <box-icon name='heart' type='solid' color='red'></box-icon>
                                            <p className='text-[#979797] tracking-wider text-[12.5px] mt-1'>ADD TO FAVORITES</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* toggles */}
                        <div>
                            <div className="grid grid-cols-1 md:flex">
                                <div
                                    onClick={() => setContentToggle({ ...contentToggle, description: true, additionalInformation: false, reviews: false })}
                                    className={`text-[0.8em] font-bold border-2 border-white py-5 text-center md:text-left md:px-[3em] cursor-pointer ${contentToggle.description && 'bg-black text-white border-black'}`}>DESCRIPTION</div>
                                <div
                                    onClick={() => setContentToggle({ ...contentToggle, description: false, additionalInformation: true, reviews: false })}
                                    className={`text-[0.8em] font-bold border-2 border-white py-5 text-center md:text-left md:px-[3em] cursor-pointer ${contentToggle.additionalInformation && 'bg-black text-white border-black'}`}>ADDITIONAL INFORMATION</div>
                                <div
                                    onClick={() => setContentToggle({ ...contentToggle, description: false, additionalInformation: false, reviews: true })}
                                    className={`text-[0.8em] font-bold border-2 border-white py-5 text-center md:text-left md:px-[3em] cursor-pointer ${contentToggle.reviews && 'bg-black text-white border-black'}`}>REVIEWS ({selectedProductObject.reviews.length})</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="max-w-[1237px] m-auto">
                    <div className={`mx-5 py-[6em]`}>
                        <div className={`${!contentToggle.description && 'hidden'}`}>
                            <p className="font-bold text-[1.3em] tracking-wider mb-3">DESCRIPTION</p>
                            <p className="text-[#979797]">{selectedProductObject.description}</p>
                        </div>

                        <div className={`${!contentToggle.additionalInformation && 'hidden'}`}>
                            <p className="font-bold text-[1.3em] tracking-wider mb-[1.2em]">ADDITIONAL INFORMATION</p>
                            <div className="max-w-[240px]">
                                <div className="grid grid-cols-2 mb-2 text-[#979797]">
                                    <p className="font-bold">Weight</p>
                                    <p>${selectedProductObject.weight}</p>
                                </div>
                                <div className="grid grid-cols-2 mb-2 text-[#979797]">
                                    <p className="font-bold">Dimensions</p>
                                    <p>${selectedProductObject.dimensions}</p>
                                </div>
                                <div className="grid grid-cols-2 mb-2 text-[#979797]">
                                    <p className="font-bold">Color</p>
                                    <p>
                                        {
                                            selectedProductObject.color.map((color, index) => {
                                                return index === selectedProductObject.color.length - 1
                                                    ? color  // No comma and space for the last item
                                                    : color + ", ";
                                            })
                                        }
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 mb-2 text-[#979797]">
                                    <p className="font-bold">Material</p>
                                    <p>
                                        {
                                            selectedProductObject.material.map((material, index) => {
                                                return index === selectedProductObject.material.length - 1
                                                    ? material  // No comma and space for the last item
                                                    : material + ", ";
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
        <Footer />
    </>
}

export default ShopSelectedProduct;